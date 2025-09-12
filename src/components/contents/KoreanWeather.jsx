import React, { useEffect, useState } from "react";

export default function KoreanWeather() {
  const [city, setCity] = useState({ name: "Seoul", lat: 37.5665, lon: 126.9780 });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [kst, setKst] = useState("");

  const weatherCodeMap = {
    0: ["Klar", "☀️"],
    1: ["Überwiegend klar", "🌤️"],
    2: ["Teilweise bewölkt", "⛅"],
    3: ["Bewölkt", "☁️"],
    45: ["Nebel", "🌫️"],
    48: ["Frostnebel", "🌫️"],
    51: ["Leichter Nieselregen", "🌦️"],
    53: ["Mäßiger Nieselregen", "🌧️"],
    55: ["Starker Nieselregen", "🌧️"],
    61: ["Leichter Regen", "🌧️"],
    63: ["Mäßiger Regen", "🌧️"],
    65: ["Starker Regen", "🌧️"],
    71: ["Leichter Schneefall", "❄️"],
    73: ["Mäßiger Schneefall", "❄️"],
    75: ["Schwerer Schneefall", "❄️"],
    80: ["Regenschauer", "🌦️"],
    81: ["Starke Schauer", "🌧️"],
    82: ["Heftige Schauer", "⛈️"],
    95: ["Gewitter", "⛈️"],
    96: ["Gewitter mit leichtem Hagel", "⛈️"],
    99: ["Gewitter mit starkem Hagel", "⛈️"]
  };

  async function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia/Seoul`;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Netzwerkfehler");
      const data = await res.json();
      if (!data.current_weather) throw new Error("Keine aktuellen Daten");
      setWeather(data.current_weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather(city.lat, city.lon);
    const kstTimer = setInterval(() => {
      const now = new Date().toLocaleString("de-DE", { timeZone: "Asia/Seoul" });
      setKst(now);
    }, 1000);

    const refreshTimer = setInterval(() => {
      fetchWeather(city.lat, city.lon);
    }, 10 * 60 * 1000);

    return () => {
      clearInterval(kstTimer);
      clearInterval(refreshTimer);
    };
  }, [city]);

  const handleCityChange = (e) => {
    const [lat, lon] = e.target.value.split(",").map((v) => parseFloat(v.trim()));
    const name = e.target.options[e.target.selectedIndex].text;
    setCity({ name, lat, lon });
  };

  let desc = "—";
  let emoji = "❓";
  if (weather) {
    const map = weatherCodeMap[weather.weathercode] || ["Unbekannt", "❓"];
    desc = map[0];
    emoji = map[1];
  }

  return (
    <div className="wrap" style={{ display: "flex", gap: 20, alignItems: "flex-start", maxWidth: 980, margin: "0 auto", fontFamily: "Inter, sans-serif" }}>
      <article className="intro" style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" }}>
        <h1>Willkommen!</h1>
        <p>Hallo! Diese Website wurde speziell für Muttersprachler des Deutschen entwickelt, die Koreanisch auf einfache und unterhaltsame Weise lernen möchten. Anstatt trockene Lehrbücher zu verwenden, können Sie die Sprache ganz natürlich durch spannende Inhalte erwerben.</p>
        <p>Hier können Sie Koreanisch auf folgende Arten genießen:</p>
        <ul>
          <li>Übung im Hangeul-Tippen: Gewöhnen Sie sich spielerisch an die Hangeul-Tastaturbelegung.</li>
          <li>Koreanische Volksmärchen: Lernen Sie Vokabeln und Satzstrukturen durch das Lesen von spannenden alten Geschichten.</li>
          <li>Klassische koreanische Romane: Tauchen Sie tiefer in die koreanische Literatur ein, um Sprache und Kultur gleichzeitig zu verstehen.</li>
        </ul>
        <p style={{ marginTop: 12 }}>Wir laden Sie ein in die Welt einer neuen Sprache!</p>
      </article>

      <aside className="widget" style={{ width: 220, minWidth: 220, background: "linear-gradient(180deg,#ffffff,#fbfeff)", borderRadius: 12, padding: 12, boxShadow: "0 8px 22px rgba(2,6,23,0.08)", display: "flex", flexDirection: "column", gap: 8 }}>
        <div>
          <label htmlFor="city" style={{ fontSize: 12, color: "#6b7280" }}>Ort:</label>
          <select id="city" value={`${city.lat},${city.lon}`} onChange={handleCityChange} style={{ width: "100%", padding: 6, borderRadius: 8, border: "1px solid #e6eef3", background: "white" }}>
            <option value="37.5665,126.9780">Seoul</option>
            <option value="35.1796,129.0756">Busan</option>
            <option value="35.8714,128.6014">Daegu</option>
            <option value="37.4563,126.7052">Incheon</option>
            <option value="36.3504,127.3845">Daejeon</option>
            <option value="35.1595,126.8526">Gwangju</option>
          </select>
        </div>

        <div className="top" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 600 }}>{city.name}</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>Stand (API): {weather ? new Date(weather.time).toLocaleString("de-DE", { timeZone: "Asia/Seoul" }) : "—"}</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>KST: {kst}</div>
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{weather ? Math.round(weather.temperature) + "°C" : "--°C"}</div>
        </div>

        <div className="cond" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: 8, background: "linear-gradient(135deg,#e6fffb,#dff7f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{emoji}</div>
          <div>
            <div style={{ fontWeight: 600 }}>{desc}</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>{weather ? `Wind: ${weather.windspeed} km/h, Richtung: ${weather.winddirection}°` : "—"}</div>
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#6b7280", textAlign: "center" }}>Aktuelle Daten via Open-Meteo (kostenfrei)</div>
        {loading && <div style={{ fontSize: 12, color: "#6b7280", textAlign: "center" }}>Laden…</div>}
        {error && <div style={{ color: "#b91c1c", fontSize: 13, textAlign: "center" }}>{error}</div>}
      </aside>
    </div>
  );
}

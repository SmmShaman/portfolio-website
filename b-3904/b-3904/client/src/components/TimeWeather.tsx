import React, { useState, useEffect } from "react";
import { Sun, CloudRain, CloudSnow } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translationHelpers";

// Weather types
type WeatherType = 'Clear' | 'Rain' | 'Snow' | 'Clouds';

const TimeWeather = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherType>('Clear');
  const [weatherText, setWeatherText] = useState("А за окном сейчас солнце");
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = getTranslation(language);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Weather fetching
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        
        if (!apiKey || apiKey === 'your_api_key_here') {
          toast.error("Please configure your OpenWeatherMap API key");
          setIsLoading(false);
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=55.7558&lon=37.6173&appid=${apiKey}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Weather API error: ${errorData.message || response.statusText}`);
        }

        const data = await response.json();
        setWeather(data.weather[0].main as WeatherType);
        
        // Set weather text based on condition
        switch(data.weather[0].main) {
          case 'Rain':
            setWeatherText("А за окном сейчас дождь");
            break;
          case 'Snow':
            setWeatherText("А за окном сейчас снег");
            break;
          default:
            setWeatherText("А за окном сейчас солнце");
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
        toast.error("Failed to fetch weather data. Please check your API key.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 600000); // Update every 10 minutes
    return () => clearInterval(weatherInterval);
  }, []);

  const WeatherIcon = () => {
    switch(weather) {
      case 'Rain':
        return <CloudRain className="w-6 h-6 text-blue-400" />;
      case 'Snow':
        return <CloudSnow className="w-6 h-6 text-gray-400" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-400" />;
    }
  };

  return (
    <div className="bento-card">
      <p className="text-2xl font-bold font-mono mb-2">
        {time.toLocaleTimeString()}
      </p>
      <div className="flex items-center justify-center space-x-2">
        {isLoading ? (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
        ) : (
          <WeatherIcon />
        )}
        <p className="text-sm text-gray-300">{weatherText}</p>
      </div>
    </div>
  );
};

export default TimeWeather;

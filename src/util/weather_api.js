export async function fetchForecast(location){
   const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=31fbe52fd548e1e1a3ba45291183eb12`,{
      method: 'GET',
      mode: 'cors'
   })

   // return response.json()
    return {
      "cod": "200",
      "message": 0,
      "cnt": 40,
      "list": [
          {
              "dt": 1634342400,
              "main": {
                  "temp": 80.87,
                  "feels_like": 79.07,
                  "temp_min": 80.13,
                  "temp_max": 80.87,
                  "pressure": 1019,
                  "sea_level": 1019,
                  "grnd_level": 1017,
                  "humidity": 19,
                  "temp_kf": 0.41
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 1
              },
              "wind": {
                  "speed": 1.66,
                  "deg": 343,
                  "gust": 2.21
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-16 00:00:00"
          },
          {
              "dt": 1634353200,
              "main": {
                  "temp": 76.55,
                  "feels_like": 74.84,
                  "temp_min": 67.89,
                  "temp_max": 76.55,
                  "pressure": 1019,
                  "sea_level": 1019,
                  "grnd_level": 1018,
                  "humidity": 20,
                  "temp_kf": 4.81
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 3
              },
              "wind": {
                  "speed": 2.55,
                  "deg": 346,
                  "gust": 2.95
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-16 03:00:00"
          },
          {
              "dt": 1634364000,
              "main": {
                  "temp": 69.19,
                  "feels_like": 66.88,
                  "temp_min": 63.34,
                  "temp_max": 69.19,
                  "pressure": 1018,
                  "sea_level": 1018,
                  "grnd_level": 1018,
                  "humidity": 23,
                  "temp_kf": 3.25
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 4
              },
              "wind": {
                  "speed": 2.17,
                  "deg": 4,
                  "gust": 2.55
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-16 06:00:00"
          },
          {
              "dt": 1634374800,
              "main": {
                  "temp": 59.94,
                  "feels_like": 56.89,
                  "temp_min": 59.94,
                  "temp_max": 59.94,
                  "pressure": 1018,
                  "sea_level": 1018,
                  "grnd_level": 1017,
                  "humidity": 27,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 2
              },
              "wind": {
                  "speed": 1.9,
                  "deg": 8,
                  "gust": 2.26
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-16 09:00:00"
          },
          {
              "dt": 1634385600,
              "main": {
                  "temp": 57.69,
                  "feels_like": 54.57,
                  "temp_min": 57.69,
                  "temp_max": 57.69,
                  "pressure": 1018,
                  "sea_level": 1018,
                  "grnd_level": 1017,
                  "humidity": 30,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 2
              },
              "wind": {
                  "speed": 2.37,
                  "deg": 340,
                  "gust": 2.37
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-16 12:00:00"
          },
          {
              "dt": 1634396400,
              "main": {
                  "temp": 57.36,
                  "feels_like": 54.21,
                  "temp_min": 57.36,
                  "temp_max": 57.36,
                  "pressure": 1018,
                  "sea_level": 1018,
                  "grnd_level": 1017,
                  "humidity": 30,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 1
              },
              "wind": {
                  "speed": 2.33,
                  "deg": 348,
                  "gust": 2.48
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-16 15:00:00"
          },
          {
              "dt": 1634407200,
              "main": {
                  "temp": 72.84,
                  "feels_like": 70.63,
                  "temp_min": 72.84,
                  "temp_max": 72.84,
                  "pressure": 1017,
                  "sea_level": 1017,
                  "grnd_level": 1016,
                  "humidity": 17,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 1
              },
              "wind": {
                  "speed": 0.58,
                  "deg": 288,
                  "gust": 0.69
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-16 18:00:00"
          },
          {
              "dt": 1634418000,
              "main": {
                  "temp": 82.83,
                  "feels_like": 80.22,
                  "temp_min": 82.83,
                  "temp_max": 82.83,
                  "pressure": 1014,
                  "sea_level": 1014,
                  "grnd_level": 1013,
                  "humidity": 12,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 1
              },
              "wind": {
                  "speed": 1.43,
                  "deg": 127,
                  "gust": 2.66
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-16 21:00:00"
          },
          {
              "dt": 1634428800,
              "main": {
                  "temp": 83.43,
                  "feels_like": 80.67,
                  "temp_min": 83.43,
                  "temp_max": 83.43,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 1011,
                  "humidity": 11,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "clouds": {
                  "all": 1
              },
              "wind": {
                  "speed": 1.36,
                  "deg": 251,
                  "gust": 2.82
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-17 00:00:00"
          },
          {
              "dt": 1634439600,
              "main": {
                  "temp": 70.43,
                  "feels_like": 68.02,
                  "temp_min": 70.43,
                  "temp_max": 70.43,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1012,
                  "humidity": 18,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 3
              },
              "wind": {
                  "speed": 4.59,
                  "deg": 291,
                  "gust": 4.81
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-17 03:00:00"
          },
          {
              "dt": 1634450400,
              "main": {
                  "temp": 64.71,
                  "feels_like": 61.92,
                  "temp_min": 64.71,
                  "temp_max": 64.71,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1013,
                  "humidity": 22,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 7
              },
              "wind": {
                  "speed": 2.35,
                  "deg": 356,
                  "gust": 3.09
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-17 06:00:00"
          },
          {
              "dt": 1634461200,
              "main": {
                  "temp": 61.03,
                  "feels_like": 57.97,
                  "temp_min": 61.03,
                  "temp_max": 61.03,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1013,
                  "humidity": 24,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04n"
                  }
              ],
              "clouds": {
                  "all": 64
              },
              "wind": {
                  "speed": 2.64,
                  "deg": 82,
                  "gust": 2.86
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-17 09:00:00"
          },
          {
              "dt": 1634472000,
              "main": {
                  "temp": 58.82,
                  "feels_like": 55.62,
                  "temp_min": 58.82,
                  "temp_max": 58.82,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 1012,
                  "humidity": 26,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04n"
                  }
              ],
              "clouds": {
                  "all": 63
              },
              "wind": {
                  "speed": 1.36,
                  "deg": 180,
                  "gust": 1.72
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-17 12:00:00"
          },
          {
              "dt": 1634482800,
              "main": {
                  "temp": 58.91,
                  "feels_like": 55.78,
                  "temp_min": 58.91,
                  "temp_max": 58.91,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 1012,
                  "humidity": 27,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 98
              },
              "wind": {
                  "speed": 2.95,
                  "deg": 130,
                  "gust": 3.78
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-17 15:00:00"
          },
          {
              "dt": 1634493600,
              "main": {
                  "temp": 70.95,
                  "feels_like": 68.54,
                  "temp_min": 70.95,
                  "temp_max": 70.95,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1012,
                  "humidity": 17,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 99
              },
              "wind": {
                  "speed": 1.92,
                  "deg": 183,
                  "gust": 3.15
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-17 18:00:00"
          },
          {
              "dt": 1634504400,
              "main": {
                  "temp": 78.04,
                  "feels_like": 76.26,
                  "temp_min": 78.04,
                  "temp_max": 78.04,
                  "pressure": 1010,
                  "sea_level": 1010,
                  "grnd_level": 1010,
                  "humidity": 15,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 7.18,
                  "deg": 230,
                  "gust": 11.01
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-17 21:00:00"
          },
          {
              "dt": 1634515200,
              "main": {
                  "temp": 71.87,
                  "feels_like": 70.07,
                  "temp_min": 71.87,
                  "temp_max": 71.87,
                  "pressure": 1010,
                  "sea_level": 1010,
                  "grnd_level": 1010,
                  "humidity": 28,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 85
              },
              "wind": {
                  "speed": 15.59,
                  "deg": 261,
                  "gust": 20.76
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-18 00:00:00"
          },
          {
              "dt": 1634526000,
              "main": {
                  "temp": 57.92,
                  "feels_like": 56.61,
                  "temp_min": 57.92,
                  "temp_max": 57.92,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1013,
                  "humidity": 68,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 7
              },
              "wind": {
                  "speed": 13.49,
                  "deg": 273,
                  "gust": 24.09
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-18 03:00:00"
          },
          {
              "dt": 1634536800,
              "main": {
                  "temp": 57.25,
                  "feels_like": 55.02,
                  "temp_min": 57.25,
                  "temp_max": 57.25,
                  "pressure": 1014,
                  "sea_level": 1014,
                  "grnd_level": 1014,
                  "humidity": 50,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04n"
                  }
              ],
              "clouds": {
                  "all": 51
              },
              "wind": {
                  "speed": 10.96,
                  "deg": 256,
                  "gust": 20.58
              },
              "visibility": 10000,
              "pop": 0.03,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-18 06:00:00"
          },
          {
              "dt": 1634547600,
              "main": {
                  "temp": 51.42,
                  "feels_like": 49.37,
                  "temp_min": 51.42,
                  "temp_max": 51.42,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1016,
                  "humidity": 66,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "scattered clouds",
                      "icon": "03n"
                  }
              ],
              "clouds": {
                  "all": 28
              },
              "wind": {
                  "speed": 1.52,
                  "deg": 291,
                  "gust": 7.02
              },
              "visibility": 10000,
              "pop": 0.03,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-18 09:00:00"
          },
          {
              "dt": 1634558400,
              "main": {
                  "temp": 50.27,
                  "feels_like": 48.43,
                  "temp_min": 50.27,
                  "temp_max": 50.27,
                  "pressure": 1017,
                  "sea_level": 1017,
                  "grnd_level": 1017,
                  "humidity": 73,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "few clouds",
                      "icon": "02n"
                  }
              ],
              "clouds": {
                  "all": 16
              },
              "wind": {
                  "speed": 4.83,
                  "deg": 233,
                  "gust": 9.4
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-18 12:00:00"
          },
          {
              "dt": 1634569200,
              "main": {
                  "temp": 50.34,
                  "feels_like": 48.51,
                  "temp_min": 50.34,
                  "temp_max": 50.34,
                  "pressure": 1018,
                  "sea_level": 1018,
                  "grnd_level": 1018,
                  "humidity": 73,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "few clouds",
                      "icon": "02d"
                  }
              ],
              "clouds": {
                  "all": 14
              },
              "wind": {
                  "speed": 3.42,
                  "deg": 279,
                  "gust": 6.87
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-18 15:00:00"
          },
          {
              "dt": 1634580000,
              "main": {
                  "temp": 59.05,
                  "feels_like": 56.97,
                  "temp_min": 59.05,
                  "temp_max": 59.05,
                  "pressure": 1018,
                  "sea_level": 1018,
                  "grnd_level": 1018,
                  "humidity": 49,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "scattered clouds",
                      "icon": "03d"
                  }
              ],
              "clouds": {
                  "all": 38
              },
              "wind": {
                  "speed": 7.61,
                  "deg": 317,
                  "gust": 8.01
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-18 18:00:00"
          },
          {
              "dt": 1634590800,
              "main": {
                  "temp": 65.14,
                  "feels_like": 62.91,
                  "temp_min": 65.14,
                  "temp_max": 65.14,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1015,
                  "humidity": 33,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "scattered clouds",
                      "icon": "03d"
                  }
              ],
              "clouds": {
                  "all": 45
              },
              "wind": {
                  "speed": 7.38,
                  "deg": 321,
                  "gust": 7.45
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-18 21:00:00"
          },
          {
              "dt": 1634601600,
              "main": {
                  "temp": 65.68,
                  "feels_like": 63.3,
                  "temp_min": 65.68,
                  "temp_max": 65.68,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1014,
                  "humidity": 29,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "scattered clouds",
                      "icon": "03d"
                  }
              ],
              "clouds": {
                  "all": 44
              },
              "wind": {
                  "speed": 8.19,
                  "deg": 325,
                  "gust": 8.81
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-19 00:00:00"
          },
          {
              "dt": 1634612400,
              "main": {
                  "temp": 57.24,
                  "feels_like": 54.54,
                  "temp_min": 57.24,
                  "temp_max": 57.24,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1015,
                  "humidity": 40,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 2
              },
              "wind": {
                  "speed": 5.57,
                  "deg": 314,
                  "gust": 10.07
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-19 03:00:00"
          },
          {
              "dt": 1634623200,
              "main": {
                  "temp": 53.1,
                  "feels_like": 50.22,
                  "temp_min": 53.1,
                  "temp_max": 53.1,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1016,
                  "humidity": 45,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 1
              },
              "wind": {
                  "speed": 5.68,
                  "deg": 314,
                  "gust": 9.04
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-19 06:00:00"
          },
          {
              "dt": 1634634000,
              "main": {
                  "temp": 50.67,
                  "feels_like": 47.88,
                  "temp_min": 50.67,
                  "temp_max": 50.67,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1016,
                  "humidity": 52,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04n"
                  }
              ],
              "clouds": {
                  "all": 52
              },
              "wind": {
                  "speed": 3.67,
                  "deg": 314,
                  "gust": 5.32
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-19 09:00:00"
          },
          {
              "dt": 1634644800,
              "main": {
                  "temp": 48.58,
                  "feels_like": 47.8,
                  "temp_min": 48.58,
                  "temp_max": 48.58,
                  "pressure": 1017,
                  "sea_level": 1017,
                  "grnd_level": 1016,
                  "humidity": 55,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "scattered clouds",
                      "icon": "03n"
                  }
              ],
              "clouds": {
                  "all": 45
              },
              "wind": {
                  "speed": 3.29,
                  "deg": 343,
                  "gust": 4.56
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-19 12:00:00"
          },
          {
              "dt": 1634655600,
              "main": {
                  "temp": 48.74,
                  "feels_like": 48.74,
                  "temp_min": 48.74,
                  "temp_max": 48.74,
                  "pressure": 1017,
                  "sea_level": 1017,
                  "grnd_level": 1017,
                  "humidity": 54,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "few clouds",
                      "icon": "02d"
                  }
              ],
              "clouds": {
                  "all": 21
              },
              "wind": {
                  "speed": 2.19,
                  "deg": 332,
                  "gust": 2.89
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-19 15:00:00"
          },
          {
              "dt": 1634666400,
              "main": {
                  "temp": 62.38,
                  "feels_like": 59.88,
                  "temp_min": 62.38,
                  "temp_max": 62.38,
                  "pressure": 1017,
                  "sea_level": 1017,
                  "grnd_level": 1017,
                  "humidity": 33,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "few clouds",
                      "icon": "02d"
                  }
              ],
              "clouds": {
                  "all": 19
              },
              "wind": {
                  "speed": 2.3,
                  "deg": 356,
                  "gust": 2.08
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-19 18:00:00"
          },
          {
              "dt": 1634677200,
              "main": {
                  "temp": 70.79,
                  "feels_like": 68.61,
                  "temp_min": 70.79,
                  "temp_max": 70.79,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1015,
                  "humidity": 22,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "scattered clouds",
                      "icon": "03d"
                  }
              ],
              "clouds": {
                  "all": 32
              },
              "wind": {
                  "speed": 1.77,
                  "deg": 159,
                  "gust": 3.38
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-19 21:00:00"
          },
          {
              "dt": 1634688000,
              "main": {
                  "temp": 71.4,
                  "feels_like": 69.19,
                  "temp_min": 71.4,
                  "temp_max": 71.4,
                  "pressure": 1014,
                  "sea_level": 1014,
                  "grnd_level": 1014,
                  "humidity": 20,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 801,
                      "main": "Clouds",
                      "description": "few clouds",
                      "icon": "02d"
                  }
              ],
              "clouds": {
                  "all": 18
              },
              "wind": {
                  "speed": 0.74,
                  "deg": 256,
                  "gust": 2.51
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-20 00:00:00"
          },
          {
              "dt": 1634698800,
              "main": {
                  "temp": 61.16,
                  "feels_like": 58.39,
                  "temp_min": 61.16,
                  "temp_max": 61.16,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1015,
                  "humidity": 30,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01n"
                  }
              ],
              "clouds": {
                  "all": 0
              },
              "wind": {
                  "speed": 4.76,
                  "deg": 307,
                  "gust": 6.91
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-20 03:00:00"
          },
          {
              "dt": 1634709600,
              "main": {
                  "temp": 55.87,
                  "feels_like": 53.28,
                  "temp_min": 55.87,
                  "temp_max": 55.87,
                  "pressure": 1018,
                  "sea_level": 1018,
                  "grnd_level": 1017,
                  "humidity": 45,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 802,
                      "main": "Clouds",
                      "description": "scattered clouds",
                      "icon": "03n"
                  }
              ],
              "clouds": {
                  "all": 35
              },
              "wind": {
                  "speed": 3.65,
                  "deg": 335,
                  "gust": 5.59
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "n"
              },
              "dt_txt": "2021-10-20 06:00:00"
          },
          {
              "dt": 1634720400,
              "main": {
                  "temp": 53.94,
                  "feels_like": 51.3,
                  "temp_min": 53.94,
                  "temp_max": 53.94,
                  "pressure": 1019,
                  "sea_level": 1019,
                  "grnd_level": 1018,
                  "humidity": 48,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 100
              },
              "wind": {
                  "speed": 2.62,
                  "deg": 358,
                  "gust": 3.89
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-20 09:00:00"
          },
          {
              "dt": 1634731200,
              "main": {
                  "temp": 52.03,
                  "feels_like": 49.33,
                  "temp_min": 52.03,
                  "temp_max": 52.03,
                  "pressure": 1019,
                  "sea_level": 1019,
                  "grnd_level": 1019,
                  "humidity": 51,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 99
              },
              "wind": {
                  "speed": 2.33,
                  "deg": 345,
                  "gust": 2.62
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-20 12:00:00"
          },
          {
              "dt": 1634742000,
              "main": {
                  "temp": 52.32,
                  "feels_like": 49.6,
                  "temp_min": 52.32,
                  "temp_max": 52.32,
                  "pressure": 1020,
                  "sea_level": 1020,
                  "grnd_level": 1020,
                  "humidity": 50,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 73
              },
              "wind": {
                  "speed": 1.36,
                  "deg": 346,
                  "gust": 1.99
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-20 15:00:00"
          },
          {
              "dt": 1634752800,
              "main": {
                  "temp": 66.45,
                  "feels_like": 64.17,
                  "temp_min": 66.45,
                  "temp_max": 66.45,
                  "pressure": 1021,
                  "sea_level": 1021,
                  "grnd_level": 1021,
                  "humidity": 29,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 82
              },
              "wind": {
                  "speed": 1.83,
                  "deg": 2,
                  "gust": 1.74
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-20 18:00:00"
          },
          {
              "dt": 1634763600,
              "main": {
                  "temp": 75.18,
                  "feels_like": 73.35,
                  "temp_min": 75.18,
                  "temp_max": 75.18,
                  "pressure": 1020,
                  "sea_level": 1020,
                  "grnd_level": 1020,
                  "humidity": 20,
                  "temp_kf": 0
              },
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04d"
                  }
              ],
              "clouds": {
                  "all": 79
              },
              "wind": {
                  "speed": 3.27,
                  "deg": 325,
                  "gust": 3.33
              },
              "visibility": 10000,
              "pop": 0,
              "sys": {
                  "pod": "d"
              },
              "dt_txt": "2021-10-20 21:00:00"
          }
      ],
      "city": {
          "id": 5399020,
          "name": "Stockton",
          "coord": {
              "lat": 37.9577,
              "lon": -121.2908
          },
          "country": "US",
          "population": 291707,
          "timezone": -25200,
          "sunrise": 1634307231,
          "sunset": 1634347650
      }
  }
}
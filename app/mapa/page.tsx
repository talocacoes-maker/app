"use client"
import { useEffect, useState } from "react"
import Map, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

export default function MapaPage() {
  const [locacoes, setLocacoes] = useState([
    { id: 1, cliente: "Cliente A", status: "entregue", lat: -27.5954, lng: -48.5480 },
    { id: 2, cliente: "Cliente B", status: "alerta", lat: -27.6000, lng: -48.5500 },
    { id: 3, cliente: "Cliente C", status: "vencido", lat: -27.5900, lng: -48.5400 },
  ])

  const getColor = (status: string) => {
    switch (status) {
      case "entregue": return "#10b981"
      case "alerta": return "#f59e0b"
      case "vencido": return "#ef4444"
      default: return "#6b7280"
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Mapa Operacional</h1>
      
      <div className="bg-white rounded shadow h-[600px]">
        <Map
          mapboxAccessToken="pk.eyJ1IjoidGVzdGV1c2VyIiwiYSI6ImNrczI5NjVlZzA5bG4ycHBnbXl4b2x1ZmoifQ.Your_Token_Here"
          initialViewState={{
            longitude: -48.5480,
            latitude: -27.5954,
            zoom: 12
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          {locacoes.map((loc) => (
            <Marker key={loc.id} longitude={loc.lng} latitude={loc.lat} anchor="center">
              <div
                className="w-4 h-4 rounded-full border-2 border-white cursor-pointer"
                style={{ backgroundColor: getColor(loc.status) }}
                title={`${loc.cliente} - ${loc.status}`}
              />
            </Marker>
          ))}
        </Map>
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>Entregue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span>Alerta</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>Vencido</span>
        </div>
      </div>
    </div>
  )
}

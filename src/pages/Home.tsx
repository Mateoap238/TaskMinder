import Button from "./../components/ui/button"
import { PlusCircle, Calendar, Bell, CheckCircle } from "lucide-react"

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="flex flex-col justify-center items-center mb-12">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800  to-gray-900 bg-clip-text text-transparent">
                    Bienvenido a TaskMinder
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Organiza tus tareas de manera eficiente y nunca olvides una fecha importante
                </p>
                <Button >
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Agregar Recordatorio
                </Button>
            </div>



            <div className="flex justify-center gap-4 flex-wrap">
                <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                    <Calendar className="mr-2 h-4 w-4" />
                    Ver Calendario
                </Button>
                <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
                    <Bell className="mr-2 h-4 w-4" />
                    Gestionar Recordatorios
                </Button>
                <Button variant="outline" className="border-green-200 hover:bg-green-50">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Ver Estadísticas
                </Button>
            </div>
        </div>
    )
}


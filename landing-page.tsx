import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AcompanarAppLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo-acompanar.jpeg" alt="AcompañarApp Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-gray-900">AcompañarApp</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Cómo funciona
            </Link>
            <Link href="#para-familias" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Para familias
            </Link>
            <Link href="#para-profesionales" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Para profesionales
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pronto conectaremos familias con
              <span className="text-blue-600"> acompañantes terapéuticos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Estamos desarrollando la plataforma que facilitará el encuentro entre familias que necesitan apoyo
              terapéutico y profesionales especializados en acompañamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Notificarme cuando esté lista
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Registrar mi interés
              </Button>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cómo funcionará AcompañarApp</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Conecta</h3>
                <p className="text-gray-600">
                  Las familias publican sus necesidades y los profesionales crean sus perfiles especializados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Acompaña</h3>
                <p className="text-gray-600">
                  Se establece la conexión perfecta para brindar el apoyo terapéutico necesario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Para Familias */}
        <section id="para-familias" className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Para familias que buscarán apoyo</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Podrás encontrar el acompañante terapéutico ideal para tu ser querido. Profesionales verificados,
                  especializados y comprometidos con el bienestar.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Profesionales verificados y con experiencia comprobada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Búsqueda personalizada según necesidades específicas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Comunicación directa y transparente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Soporte continuo durante todo el proceso</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Registrar interés</Button>
              </div>
              <div className="lg:order-first">
                <Card className="p-6 shadow-lg">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <Users className="h-24 w-24 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Para Profesionales */}
        <section id="para-profesionales" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-6 shadow-lg">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <Shield className="h-24 w-24 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Para acompañantes terapéuticos</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Podrás conectar con familias que necesiten tu experiencia y dedicación. Ampliarás tu práctica
                  profesional de manera segura y confiable.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Acceso a familias que buscan tu especialización</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Gestión simplificada de tu práctica profesional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Plataforma segura y confiable</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Herramientas para destacar tu experiencia</span>
                  </li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Registrar mi perfil</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¡Próximamente disponible!</h2>
            <p className="text-xl mb-8 opacity-90">
              Sé parte de la comunidad que transformará el acceso al acompañamiento terapéutico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Notificarme del lanzamiento
              </Button>
              <Button size="lg" className="border-white bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Conocer más del proyecto
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo-acompanar.jpeg" alt="AcompañarApp Logo" className="h-6 w-6" />
                <span className="text-xl font-bold">AcompañarApp</span>
              </div>
              <p className="text-gray-400 mb-4">
                Próximamente: conectando familias con acompañantes terapéuticos de manera segura y confiable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Para familias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Para profesionales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos de uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AcompañarApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

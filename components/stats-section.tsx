import { Card, CardContent } from "@/components/ui/card"
import { Award, BarChart3, Building, Users } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Meters Installed</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-xl sm:text-3xl font-bold">1.2M+</h3>
                  <span className="text-xs sm:text-sm text-gray-500">nationwide</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Years Experience</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-xl sm:text-3xl font-bold">20+</h3>
                  <span className="text-xs sm:text-sm text-gray-500">since 2003</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">DISCOs Served</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-xl sm:text-3xl font-bold">8+</h3>
                  <span className="text-xs sm:text-sm text-gray-500">distribution companies</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Production Capacity</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-xl sm:text-3xl font-bold">720K+</h3>
                  <span className="text-xs sm:text-sm text-gray-500">meters annually</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

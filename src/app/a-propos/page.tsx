import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavigationFrancaise } from "@/components/navigation-francaise";
import { Heart, Users, Target, Award, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

export default function AProposPage() {
  return (
    <>
      <NavigationFrancaise />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-fr">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Une équipe passionnée dédiée à transformer les rêves digitaux en réalités
              tangibles et performantes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing">
        <div className="container-fr">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bleu-clair text-bleu-fonce text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Notre Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Créer des Solutions qui Font la Différence
              </h2>
              <p className="text-xl text-secondaire mb-6 leading-relaxed">
                Depuis notre création, nous nous engageons à fournir des solutions digitales
                innovantes qui permettent à nos clients de se démarquer dans un monde
                en constante évolution.
              </p>
              <p className="text-lg text-secondaire leading-relaxed">
                Notre approche combine expertise technique, créativité et écoute attentive
                pour créer des expériences digitales exceptionnelles qui génèrent des
                résultats mesurables et durables.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-2xl">
                    <Heart className="w-20 h-20" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Passion & Excellence</h3>
                  <p className="text-lg text-secondaire">
                    Au cœur de tout ce que nous faisons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-gris-clair">
        <div className="container-fr">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-secondaire max-w-2xl mx-auto">
              Les principes qui guident nos actions et définissent notre culture d'entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-secondaire leading-relaxed">
                Nous croyons en la force du travail d'équipe et de la collaboration étroite
                avec nos clients pour atteindre des objectifs communs.
              </p>
            </Card>

            <Card className="card text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-secondaire leading-relaxed">
                Nous restons à la pointe des technologies pour offrir des solutions
                modernes et efficaces qui dépassent les attentes.
              </p>
            </Card>

            <Card className="card text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-secondaire leading-relaxed">
                Chaque projet est une opportunité de démontrer notre engagement
                envers la qualité et l'excellence dans tous les détails.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing">
        <div className="container-fr">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Impact en Chiffres
            </h2>
            <p className="text-xl text-secondaire max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de notre engagement et de notre expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <Globe className="w-12 h-12 mx-auto mb-4 text-bleu-principal" />
              <div className="text-5xl font-bold text-bleu-principal mb-2">50+</div>
              <div className="text-lg font-semibold">Pays Desservis</div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
              <Users className="w-12 h-12 mx-auto mb-4 text-violet-accent" />
              <div className="text-5xl font-bold text-violet-accent mb-2">10K+</div>
              <div className="text-lg font-semibold">Clients Satisfaits</div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100">
              <Award className="w-12 h-12 mx-auto mb-4 text-pink-600" />
              <div className="text-5xl font-bold text-pink-600 mb-2">25+</div>
              <div className="text-lg font-semibold">Récompenses</div>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <div className="text-5xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-lg font-semibold">Projets Actifs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-gris-clair">
        <div className="container-fr">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-secondaire max-w-2xl mx-auto">
              Des experts passionnés qui travaillent ensemble pour créer des solutions
              exceptionnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nom: "Marie Dubois",
                poste: "Directrice Générale",
                description: "15 ans d'expérience en transformation digitale",
              },
              {
                nom: "Thomas Martin",
                poste: "Directeur Technique",
                description: "Expert en architectures cloud et développement",
              },
              {
                nom: "Sophie Laurent",
                poste: "Directrice Créative",
                description: "Spécialisée en UX/UI et design thinking",
              },
            ].map((membre, index) => (
              <Card key={index} className="card text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  {membre.nom.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-2xl font-bold mb-2">{membre.nom}</h3>
                <p className="text-bleu-principal font-semibold mb-3">{membre.poste}</p>
                <p className="text-secondaire">{membre.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-fr">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez Notre Aventure
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vous partagez notre passion pour l'excellence digitale ?
              Explorons ensemble comment nous pouvons collaborer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-bleu hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg"
              >
                Nous Contacter
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
              >
                Voir les Opportunités
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-fr">
          <div className="text-center">
            <p className="text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Retour à l'Accueil
              </Link>
              {" | "}
              &copy; 2025 Votre Entreprise. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavigationFrancaise } from "@/components/navigation-francaise";
import { ArrowRight, Sparkles, Zap, Shield, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <NavigationFrancaise />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Section Héros */}
      <section className="section-spacing">
        <div className="container-fr">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bleu-clair text-bleu-fonce text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Bienvenue sur notre plateforme
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Votre Vision, Notre Mission
            </h1>

            <p className="text-xl md:text-2xl text-secondaire mb-8 leading-relaxed">
              Transformez vos idées en réalité avec des solutions digitales
              innovantes et performantes, pensées pour votre succès.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-bleu text-white hover:bg-bleu-fonce text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Commencer Maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-2 hover:border-bleu-principal hover:text-bleu-principal transition-all"
              >
                Découvrir Plus
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-bleu mb-2">500+</div>
                <div className="text-secondaire">Projets Réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-bleu mb-2">98%</div>
                <div className="text-secondaire">Satisfaction Client</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-bleu mb-2">24/7</div>
                <div className="text-secondaire">Support Dédié</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-bleu mb-2">10+</div>
                <div className="text-secondaire">Années d'Expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Caractéristiques */}
      <section className="section-spacing bg-gris-clair">
        <div className="container-fr">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-secondaire max-w-2xl mx-auto">
              Des solutions complètes et personnalisées pour propulser votre entreprise
              vers de nouveaux sommets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <Card className="card group hover:border-bleu-principal">
              <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Rapide & Performant</h3>
              <p className="text-secondaire leading-relaxed">
                Des solutions optimisées pour une performance maximale et une expérience
                utilisateur fluide, quelle que soit la taille de votre projet.
              </p>
            </Card>

            {/* Carte 2 */}
            <Card className="card group hover:border-bleu-principal">
              <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sécurité Garantie</h3>
              <p className="text-secondaire leading-relaxed">
                Protection de vos données avec les dernières technologies de sécurité
                et conformité aux normes internationales les plus strictes.
              </p>
            </Card>

            {/* Carte 3 */}
            <Card className="card group hover:border-bleu-principal">
              <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Innovation Continue</h3>
              <p className="text-secondaire leading-relaxed">
                Technologies de pointe et mises à jour régulières pour rester toujours
                à la pointe de l'innovation digitale.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="section-spacing">
        <div className="container-fr">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Des Résultats Concrets pour Votre Succès
              </h2>
              <p className="text-xl text-secondaire mb-8">
                Nous ne nous contentons pas de créer des solutions, nous créons
                des expériences qui transforment votre activité et génèrent des résultats mesurables.
              </p>

              <div className="space-y-4">
                {[
                  "Interface intuitive et ergonomique",
                  "Support technique réactif et personnalisé",
                  "Intégration facile avec vos outils existants",
                  "Évolutivité pour accompagner votre croissance",
                  "Formation complète de vos équipes"
                ].map((avantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bleu-principal flex-shrink-0 mt-1" />
                    <span className="text-lg">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
                    <Sparkles className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Excellence Digitale</h3>
                  <p className="text-secondaire">
                    Des solutions qui font la différence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="section-spacing bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-fr">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Transformer Votre Vision ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez des centaines d'entreprises qui ont déjà fait le choix de l'excellence.
              Commencez votre parcours dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-bleu hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg"
              >
                Démarrer Gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
              >
                Planifier une Démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-fr">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">À Propos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Notre Histoire</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Équipe</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Développement Web</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Applications Mobiles</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Ressources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@example.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Votre Entreprise. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}

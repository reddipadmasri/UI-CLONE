export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-purple-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          What Clients Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-600">
              "Dr. Maya helped me navigate one of the most difficult periods of my life.
              Her approach is warm, understanding, and truly effective."
            </p>
            <h4 className="mt-4 font-semibold">— Sarah T.</h4>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-600">
              "I finally feel heard and supported. Therapy here has changed my life
              for the better."
            </p>
            <h4 className="mt-4 font-semibold">— James L.</h4>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-600">
              "Professional, compassionate, and incredibly insightful.
              Highly recommend Dr. Maya."
            </p>
            <h4 className="mt-4 font-semibold">— Priya K.</h4>
          </div>

        </div>
      </div>
    </section>
  );
}

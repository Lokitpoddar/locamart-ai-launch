import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Mehenga maal milta hai",
  "Pata nahi kya bikega",
  "Credit nahi milta",
  "Time waste hota hai",
];

const solutions = [
  "Sahi maal dikhata hai (jo bikta hai)",
  "Sasta rate deta hai",
  "Profit clearly batata hai",
  "Easy order — WhatsApp jaisa simple",
];

const ProblemSolution = () => (
  <section className="py-20 bg-muted/40">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Abhi <span className="bg-primary px-2 py-0.5 inline-block -rotate-1">problem</span> kya hai?
          </h2>
          <div className="space-y-4">
            {problems.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-foreground font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Locamart <span className="bg-primary px-2 py-0.5 inline-block -rotate-1">kya karta hai?</span>
          </h2>
          <div className="space-y-4">
            {solutions.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;

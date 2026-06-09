import "dotenv/config";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.adAnalysis.deleteMany();

  await prisma.adAnalysis.createMany({
    data: [
      {
        brand: "Nike",
        product: "Pegasus Running Shoes",
        rawAdContent: "A commuter turns the city into a race track during the morning rush.",
        targetAudience: "Urban runners who want energy in daily training",
        coreMessage: "Everyday movement can feel like a personal win.",
        creativeHook: "Treat a routine commute like an elite race moment.",
        elementA: "Morning commute",
        elementB: "Track race intensity",
        bridge: "The city transforms into a competitive lane system around the runner.",
        bridgeType: "context shift",
        emotion: "Momentum",
        narrativePattern: "ordinary life elevated into performance",
        visualPattern: "kinetic city motion and lane overlays",
        copywritingPattern: "short motivational statements with motion verbs",
        whyItFeelsCreative: "It reframes a familiar routine with elite-sport language and imagery.",
        reusableFormula: "Take an everyday routine + apply a high-performance frame + visualize the new rules of that world.",
        fullAnalysisJson: {
          insight: "People want daily effort to feel meaningful.",
          execution: ["city lane overlays", "pace-driven edits", "performance voiceover"],
        },
      },
      {
        brand: "Apple",
        product: "AirPods Pro",
        rawAdContent: "Noise disappears as a crowded train becomes a private listening room.",
        targetAudience: "Professionals seeking calm in noisy environments",
        coreMessage: "Control your soundscape anywhere.",
        creativeHook: "Make public chaos feel privately curated.",
        elementA: "Crowded train commute",
        elementB: "Personal studio isolation",
        bridge: "Active noise cancellation turns public space into a controlled audio cocoon.",
        bridgeType: "sensory inversion",
        emotion: "Relief",
        narrativePattern: "external chaos fades while inner focus sharpens",
        visualPattern: "sharp subject focus against muted surroundings",
        copywritingPattern: "minimal lines centered on control and clarity",
        whyItFeelsCreative: "It sells the product by dramatizing the invisible sensory change it creates.",
        reusableFormula: "Start with a stressful environment + reveal an invisible product effect + contrast before and after perception.",
        fullAnalysisJson: {
          insight: "Silence is experienced as regained control.",
          execution: ["sound-drop transition", "ambient desaturation", "close-up listening cues"],
        },
      },
      {
        brand: "IKEA",
        product: "Modular Storage System",
        rawAdContent: "A messy family hallway is reorganized like backstage prep before a performance.",
        targetAudience: "Families balancing small spaces and busy schedules",
        coreMessage: "Organization creates emotional breathing room.",
        creativeHook: "Treat home storage like stagecraft for daily life.",
        elementA: "Cluttered entryway",
        elementB: "Backstage performance prep",
        bridge: "Each storage module acts like a cue point that keeps the household in sync.",
        bridgeType: "functional metaphor",
        emotion: "Calm confidence",
        narrativePattern: "chaos structured into smooth ritual",
        visualPattern: "before-after sequencing with labeled zones",
        copywritingPattern: "friendly functional lines tied to family rhythm",
        whyItFeelsCreative: "It makes a practical product feel emotionally transformative through metaphor.",
        reusableFormula: "Map a practical household problem to a coordinated professional system, then show how structure changes behavior.",
        fullAnalysisJson: {
          insight: "Storage matters when it reduces daily friction across multiple people.",
          execution: ["zone labeling", "ritual-based storytelling", "family motion choreography"],
        },
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });


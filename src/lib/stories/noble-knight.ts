import { StoryNode } from "../types";

export const nobleKnightStory: StoryNode[] = [
  // Chapter 1
  {
    id: "kn-01",
    character: "noble-knight",
    title: "The Noble Knight Gets a Quest",
    narrative:
      "You are the Noble Knight! You live in a cozy castle with a drawbridge that squeaks every time you walk across it. Your horse, Sir Clip-Clop, is the funniest horse in the kingdom. This morning, the King sends you a message tied to a pigeon. The message says: \"Dear Noble Knight, a Grumpy Dragon has moved into Marshmallow Mountain and keeps blowing smoke rings that make everyone's hair stand up! Please help! P.S. Bring snacks.\" You grab your Wooden Sword, hop on Sir Clip-Clop, and ride off!",
    sillyMoment:
      "Sir Clip-Clop looks at the message and says out loud, \"I hope we're back by dinner. I'm making spaghetti tonight.\" You stare at your horse. Since when does your horse TALK?! Sir Clip-Clop shrugs. \"What? I've always talked. You just never listened.\"",
    choices: [
      {
        text: "Ride through the Ticklish Meadow",
        nextNodeId: "kn-02a",
        preview: "The flowers there wiggle when you walk by...",
      },
      {
        text: "Take the road past Wobbly Bridge",
        nextNodeId: "kn-02b",
        preview: "The bridge makes funny bouncing sounds...",
      },
    ],
  },

  // Chapter 2a - Ticklish Meadow
  {
    id: "kn-02a",
    character: "noble-knight",
    title: "The Ticklish Meadow",
    narrative:
      "You ride into the Ticklish Meadow where every flower giggles when the wind blows! \"Tee hee hee!\" the daisies laugh. \"Ha ha ha!\" the sunflowers chuckle. Sir Clip-Clop starts laughing too because the tall grass is tickling his belly. \"Hee hee — stop it — hee hee!\" he neighs, wiggling around. You spot a pair of shiny boots stuck in the ground. A sign next to them says: \"Mud-Proof Boots — Free to a good knight!\"",
    sillyMoment:
      "When you pull the boots out of the ground, they make a sound like a giant rubber duck: SQUEEEAK! Every single flower in the meadow stops giggling and stares at you. Then they ALL burst out laughing even harder.",
    itemEarned: {
      name: "Mud-Proof Boots",
      description: "These boots are so slippery, mud slides right off! SQUEEAK!",
      emoji: "🥾",
    },
    choices: [
      {
        text: "Follow the trail of smoke rings",
        nextNodeId: "kn-03a",
        preview: "The smoke rings float by, making your hair go BOING...",
      },
      {
        text: "Ask the flowers for directions",
        nextNodeId: "kn-03b",
        preview: "They can't stop giggling long enough to answer...",
      },
    ],
  },

  // Chapter 2b - Wobbly Bridge
  {
    id: "kn-02b",
    character: "noble-knight",
    title: "The Wobbly Bridge",
    narrative:
      "You ride up to Wobbly Bridge. It bounces up and down like a trampoline! BOING BOING BOING! Sir Clip-Clop takes one look at it and says, \"I am NOT going on that thing.\" A friendly turtle sitting by the bridge waves at you. \"Don't worry!\" says the turtle. \"I'll hold it steady. I'm very strong.\" The turtle is the size of a football. Sir Clip-Clop raises an eyebrow. The turtle flexes a tiny arm muscle. Somehow, when the turtle holds the bridge, it stops wobbling!",
    sillyMoment:
      "Halfway across the bridge, Sir Clip-Clop accidentally steps on a whoopee cushion someone left there. PFFFFFFFTTTT! \"THAT WASN'T ME!\" Sir Clip-Clop yells, his face turning red. The turtle is laughing so hard it almost falls over.",
    itemEarned: {
      name: "Mud-Proof Boots",
      description: "These boots are so slippery, mud slides right off! SQUEEAK!",
      emoji: "🥾",
    },
    choices: [
      {
        text: "Climb up the Squishy Swamp path",
        nextNodeId: "kn-03a",
        preview: "It looks muddy, but you've got new boots!",
      },
      {
        text: "Take the Rocky Shortcut",
        nextNodeId: "kn-03b",
        preview: "Sir Clip-Clop says he knows a faster way...",
      },
    ],
  },

  // Chapter 3a - Approaching the Dragon
  {
    id: "kn-03a",
    character: "noble-knight",
    title: "The Squishy Swamp",
    narrative:
      "You reach the Squishy Swamp at the base of Marshmallow Mountain. Thanks to your amazing Mud-Proof Boots, you walk right through while the mud slides off — SQUEAK SQUEAK SQUEAK! Sir Clip-Clop is not so lucky. He gets stuck in the mud up to his belly. \"A little help here?\" he says, looking very grumpy. You pull him out with a loud SCHLUUUUURP! Up ahead, you can see Marshmallow Mountain. The top is covered in fluffy white stuff that looks exactly like marshmallows. Smoke rings float up from a cave near the top.",
    sillyMoment:
      "When you pull Sir Clip-Clop out of the mud, it makes such a loud SCHLUUURP sound that birds fly out of every tree in the forest. One bird stops, looks at you, and says, \"Could you keep it down? I'm trying to nap!\"",
    skillEarned: {
      name: "Tickle Attack",
      description: "The secret weapon! Makes anyone laugh so hard they can't fight!",
      emoji: "🤣",
    },
    choices: [
      {
        text: "March right up to the dragon's cave",
        nextNodeId: "kn-04a",
        preview: "Time to be brave! Your boots are squeaking heroically...",
      },
      {
        text: "Sneak around the back of the mountain",
        nextNodeId: "kn-04b",
        preview: "Sir Clip-Clop says sneaking is very noble...",
      },
    ],
  },

  // Chapter 3b - Alternative approach
  {
    id: "kn-03b",
    character: "noble-knight",
    title: "The Singing Stones",
    narrative:
      "You take the Rocky Shortcut and discover that the rocks actually SING! Every time you step on one, it sings a note: \"DOOO! REEE! MIIII!\" Sir Clip-Clop starts prancing on the rocks on purpose, making a silly song: \"DO MI SOL DO MI SOL!\" He's actually pretty good! At the top of the path, you can see Marshmallow Mountain and the Grumpy Dragon's cave. The dragon shoots another smoke ring into the sky. POOOOF! Your hair stands straight up.",
    sillyMoment:
      "Sir Clip-Clop plays \"Twinkle Twinkle Little Star\" on the singing stones with his hooves. He takes a bow. The rocks give him a standing ovation. Rocks can't actually stand, but they wobble enthusiastically.",
    skillEarned: {
      name: "Tickle Attack",
      description: "The secret weapon! Makes anyone laugh so hard they can't fight!",
      emoji: "🤣",
    },
    choices: [
      {
        text: "Charge up the mountain bravely",
        nextNodeId: "kn-04a",
        preview: "Your Brave Charge skill is tingling!",
      },
      {
        text: "Find the secret tunnel",
        nextNodeId: "kn-04b",
        preview: "There's a little door hidden behind a bush...",
      },
    ],
  },

  // Chapter 4a - Meet the Dragon (front door)
  {
    id: "kn-04a",
    character: "noble-knight",
    title: "The Grumpy Dragon",
    narrative:
      "You march right into the cave and find the Grumpy Dragon! He's actually not that big — about the size of a school bus, which is still pretty big, but not SCARY big. He has little round glasses and is sitting on a pile of marshmallows. He's blowing smoke rings and looking VERY grumpy. \"Go away!\" the dragon grumbles. \"I moved here because everyone in Dragon Town said my smoke rings were annoying. Well if I'M annoying, then I'll just annoy EVERYONE from up here! HMPH!\" He blows a smoke ring right at you. POOF! Your hair stands up again.",
    sillyMoment:
      "Sir Clip-Clop walks up to the dragon, looks at him, and says, \"Your glasses are crooked.\" The dragon gets embarrassed and tries to fix them, but his claws are too big and he keeps fumbling. He looks like he's trying to thread a needle with oven mitts on.",
    itemEarned: {
      name: "Shield of Sharing",
      description: "This sparkly shield makes anyone nearby want to share and be kind!",
      emoji: "🛡️",
    },
    choices: [
      {
        text: "Use the Tickle Attack on the dragon",
        nextNodeId: "kn-05a",
        preview: "Dragons have very ticklish tummies...",
      },
      {
        text: "Tell the dragon his smoke rings are actually cool",
        nextNodeId: "kn-05b",
        preview: "Nobody ever told him they liked his rings...",
      },
    ],
  },

  // Chapter 4b - Meet the Dragon (back way)
  {
    id: "kn-04b",
    character: "noble-knight",
    title: "The Dragon's Secret Room",
    narrative:
      "You sneak in through a back tunnel and discover the dragon's secret room. It's full of... paintings?! The Grumpy Dragon has painted beautiful pictures of flowers and butterflies and rainbows! He's actually an artist! You hear him grumbling in the next room: \"Nobody likes my smoke rings... nobody thinks I'm cool... I'll show them ALL!\" He doesn't sound scary. He sounds sad! Sir Clip-Clop whispers, \"I think this dragon just needs a friend. Also, these paintings are really good. Better than mine, and I took a class.\"",
    sillyMoment:
      "One of the dragon's paintings is a self-portrait, but he drew himself way too muscular — like a dragon bodybuilder. Sir Clip-Clop tilts his head. \"Interesting artistic choice,\" he says politely.",
    itemEarned: {
      name: "Shield of Sharing",
      description: "This sparkly shield makes anyone nearby want to share and be kind!",
      emoji: "🛡️",
    },
    choices: [
      {
        text: "Surprise the dragon with a tickle ambush",
        nextNodeId: "kn-05a",
        preview: "Time for your Tickle Attack!",
      },
      {
        text: "Tell the dragon you love his paintings",
        nextNodeId: "kn-05b",
        preview: "Art appreciation might save the day...",
      },
    ],
  },

  // Chapter 5a - Tickle ending
  {
    id: "kn-05a",
    character: "noble-knight",
    title: "The Great Tickle Battle!",
    narrative:
      "\"TICKLE ATTACK!\" you yell, and rush at the Grumpy Dragon! You tickle his big round belly and — oh my — the dragon EXPLODES with laughter! \"BWAHAHAHA! STOP! HAHAHA! I CAN'T — HAHAHA!\" He laughs so hard that he blows the most AMAZING smoke rings anyone has ever seen! They come out in the shape of hearts and stars and smiley faces! \"Wait,\" the dragon gasps between laughs, \"I... I didn't know I could make THOSE shapes!\" You hold up your Shield of Sharing and say, \"If you come back to Dragon Town and show everyone THESE smoke rings, they'll think you're the coolest dragon ever!\" The dragon sniffles. \"You really think so?\" Sir Clip-Clop nods. \"Definitely. Now come on, dinner's getting cold. I made spaghetti.\" And so the Noble Knight, the talking horse, and the not-so-grumpy-anymore dragon all ride home together. The dragon's fancy smoke rings become the most popular thing in the kingdom!",
    sillyMoment:
      "The dragon tries to eat spaghetti at Sir Clip-Clop's house but accidentally sneezes fire and toasts all the garlic bread PERFECTLY. \"I meant to do that,\" the dragon says, putting on sunglasses.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Kindness ending
  {
    id: "kn-05b",
    character: "noble-knight",
    title: "The Dragon's New Friends",
    narrative:
      "\"Your smoke rings are AMAZING!\" you tell the dragon. \"And your paintings — wow! You're really talented!\" The Grumpy Dragon's eyes fill with happy tears. Big, steamy, dragon-sized tears that make little puddles on the floor. \"R-really?\" he sniffles. \"Nobody's ever said anything nice about my smoke rings before.\" You hold up the Shield of Sharing and it glows bright gold. \"Come back with me,\" you say. \"I bet everyone would love to see what you can do!\" The dragon nervously follows you down the mountain. When the people see his beautiful heart-shaped and star-shaped smoke rings, they CHEER! The dragon is so happy he does a little dance (which shakes the ground, but everyone just bounces along). From that day on, the dragon puts on a smoke ring show every Saturday, and he teaches art classes on Sundays. Sir Clip-Clop signs up for the art class. His painting of a bowl of spaghetti wins first place in the kingdom art show.",
    sillyMoment:
      "At the art show, Sir Clip-Clop's painting of spaghetti is SO realistic that someone tries to eat it. \"That's ART, not DINNER!\" Sir Clip-Clop yells, swatting their hand away with his tail.",
    isEnding: true,
    choices: [],
  },
];

import { StoryNode } from "../types";

export const prettyPrincessStory: StoryNode[] = [
  // Chapter 1
  {
    id: "pr-01",
    character: "pretty-princess",
    title: "The Pretty Princess and the Missing Music",
    narrative:
      "You are the Pretty Princess! You live in a sparkling castle surrounded by a garden where the flowers sing songs every morning. Your best friend is a bunny named Fluffington who wears a tiny crown. Today, something terrible has happened — the Enchanted Forest has gone SILENT! No birds singing, no crickets chirping, no frogs croaking. A little mouse runs up to you squeaking in a panic. You use your Royal Command, and the mouse calms down enough to explain: \"The Confused Goblin took all the sounds and put them in his Noise Jar because he thought the forest was TOO LOUD!\" Time for an adventure!",
    sillyMoment:
      "Fluffington the bunny tries to look tough by putting on tiny sunglasses and flexing. He flexes so hard that his tiny crown falls off and lands on the mouse, who is now accidentally a mouse king.",
    choices: [
      {
        text: "Walk through the Whispering Wildflowers",
        nextNodeId: "pr-02a",
        preview: "The flowers are trying to whisper, but no sound comes out...",
      },
      {
        text: "Follow the stream to the Sparkly Waterfall",
        nextNodeId: "pr-02b",
        preview: "Even the waterfall is strangely quiet...",
      },
    ],
  },

  // Chapter 2a - Whispering Wildflowers
  {
    id: "pr-02a",
    character: "pretty-princess",
    title: "The Quiet Wildflowers",
    narrative:
      "You walk into the field of Whispering Wildflowers. Usually they hum beautiful songs, but today they're moving their petals with no sound coming out! They look so frustrated! A tall sunflower is mouthing words at you very dramatically, but you can't hear anything. You try your Royal Command — animals and flowers listen to you! The sunflower starts doing charades instead. It points at itself, then makes a crying face, then points toward the Dark... no, the Dim... no, the SLIGHTLY-SHADY Forest. That must be where the Confused Goblin lives!",
    sillyMoment:
      "The sunflower is so bad at charades that a daisy facepalms with its leaf. The sunflower then tries to do interpretive dance to explain, but it's rooted in the ground, so it just wiggles aggressively.",
    itemEarned: {
      name: "Singing Flowers",
      description: "A bouquet that can distract anyone with a silly song!",
      emoji: "💐",
    },
    choices: [
      {
        text: "Head toward the Slightly-Shady Forest",
        nextNodeId: "pr-03a",
        preview: "It's not scary, just a little bit dim in there...",
      },
      {
        text: "Gather more animal friends first",
        nextNodeId: "pr-03b",
        preview: "Fluffington thinks you need more backup...",
      },
    ],
  },

  // Chapter 2b - Sparkly Waterfall
  {
    id: "pr-02b",
    character: "pretty-princess",
    title: "The Silent Waterfall",
    narrative:
      "You follow the stream to the Sparkly Waterfall. It's still sparkling, but it's completely silent! Water is pouring down without making any WHOOOOSH sound. It's SO weird. Fluffington sticks his paw in the water and looks confused. A family of frogs is sitting by the waterfall, opening and closing their mouths with no ribbit coming out. You use your Royal Command to calm them down. The biggest frog (wearing a tiny bow tie, very fancy) does a little mime show to tell you that the Confused Goblin lives past the Slightly-Shady Forest.",
    sillyMoment:
      "The fancy frog tries to ribbit SO hard to show you what's wrong that it puffs up like a balloon and floats off the ground for a second. Fluffington catches it. The frog looks embarrassed and straightens its bow tie.",
    itemEarned: {
      name: "Singing Flowers",
      description: "A bouquet that can distract anyone with a silly song!",
      emoji: "💐",
    },
    choices: [
      {
        text: "Follow the frog's directions through the forest",
        nextNodeId: "pr-03a",
        preview: "The frog hops ahead to show you the way...",
      },
      {
        text: "Build a team of animal helpers first",
        nextNodeId: "pr-03b",
        preview: "Every princess needs a good team!",
      },
    ],
  },

  // Chapter 3a - Into the Forest
  {
    id: "pr-03a",
    character: "pretty-princess",
    title: "The Slightly-Shady Forest",
    narrative:
      "You enter the Slightly-Shady Forest. It's not dark or scary — just a little shady, like when a cloud goes over the sun. The trees have silly faces on them (they grew that way naturally, it's a magical forest). Normally the trees would be telling jokes to each other, but they're silent too! One tree is trying SO hard to tell a joke that its bark is turning red from effort. You pat its trunk gently. \"Don't worry,\" you say, \"We'll get your sounds back!\" Deeper in the forest, you see a cozy-looking treehouse with a sign: \"The Confused Goblin's Cozy Cottage — Come Back Later (or Now, I Guess)\"",
    sillyMoment:
      "Fluffington trips over a root and somersaults into a pile of leaves. He pops out wearing a leaf crown on top of his regular crown. \"I meant to do that,\" he says, trying to look dignified while a caterpillar crawls across his nose.",
    skillEarned: {
      name: "Dance Power",
      description: "Everything around you starts dancing, even the trees! Boogie time!",
      emoji: "💃",
    },
    choices: [
      {
        text: "Knock on the treehouse door politely",
        nextNodeId: "pr-04a",
        preview: "A princess always has good manners...",
      },
      {
        text: "Use Dance Power to get the Goblin's attention",
        nextNodeId: "pr-04b",
        preview: "If you can't make sound, you can make MOVES...",
      },
    ],
  },

  // Chapter 3b - Gather the team
  {
    id: "pr-03b",
    character: "pretty-princess",
    title: "The Princess's Animal Squad",
    narrative:
      "You decide to gather a team first! Using your Royal Command, you call all the animals of the Enchanted Forest. They can't make sounds, but they can still hear you! Pretty soon you have Fluffington the bunny, three determined squirrels, a very serious-looking owl, a hedgehog wearing a tiny backpack, and a deer that keeps accidentally bumping into trees (she really needs glasses). Together, you march toward the Slightly-Shady Forest. Your animal squad looks very brave! Well, mostly brave. The hedgehog keeps checking if they brought enough snacks.",
    sillyMoment:
      "The owl tries to do a dramatic \"HOO HOO\" to inspire the troops but no sound comes out. So instead, she does a dramatic wing-spread pose. Everyone claps silently. The deer walks into another tree. BONK!",
    skillEarned: {
      name: "Dance Power",
      description: "Everything around you starts dancing, even the trees! Boogie time!",
      emoji: "💃",
    },
    choices: [
      {
        text: "Lead your squad to the Goblin's treehouse",
        nextNodeId: "pr-04a",
        preview: "The treehouse is just up ahead!",
      },
      {
        text: "Send the squirrels to scout first",
        nextNodeId: "pr-04b",
        preview: "Squirrels are excellent spies (and snack finders)...",
      },
    ],
  },

  // Chapter 4a - Meet the Goblin (polite approach)
  {
    id: "pr-04a",
    character: "pretty-princess",
    title: "The Confused Goblin",
    narrative:
      "You knock on the treehouse door. It opens and there's the Confused Goblin! He's small and purple with big confused-looking eyes that are always going in different directions. He's wearing earmuffs made of cotton candy. \"Huh? Who? What?\" he says, looking left when you're standing on the right. \"Oh! A princess! I love princesses! Wait, why are you here? I forgot.\" Behind him, you can see a GIANT glass jar full of swirling colors and sparkles — those are all the stolen sounds! \"Oh, the sounds?\" he says when you point at the jar. \"I took those because they were SO LOUD! Birds at five in the morning! Frogs ALL night! I just wanted some QUIET!\" He yawns. \"I haven't slept in weeks!\"",
    sillyMoment:
      "The Confused Goblin tries to offer you tea but accidentally pours it on his own head. \"That was on purpose,\" he says. \"It's a... hair treatment.\" It's clearly not a hair treatment.",
    itemEarned: {
      name: "Rainbow Bridge",
      description: "Creates a beautiful rainbow bridge that goes anywhere you want!",
      emoji: "🌈",
    },
    choices: [
      {
        text: "Use your Singing Flowers to play a lullaby",
        nextNodeId: "pr-05a",
        preview: "Maybe if he gets some sleep, he'll give the sounds back...",
      },
      {
        text: "Help the Goblin find a quieter place to live",
        nextNodeId: "pr-05b",
        preview: "Maybe he just needs a better bedroom...",
      },
    ],
  },

  // Chapter 4b - Meet the Goblin (dance/scout approach)
  {
    id: "pr-04b",
    character: "pretty-princess",
    title: "The Dancing Discovery",
    narrative:
      "You use your Dance Power and suddenly EVERYTHING around the treehouse starts dancing! The trees sway, the bushes boogie, and the ground does a little shimmy! The treehouse door flies open and out stumbles the Confused Goblin, confused as ever. \"Why is my house dancing?! My TEA is dancing! My SLIPPERS are dancing!\" He looks like he hasn't slept in days. His eyes are going in circles and his cotton candy earmuffs are falling apart. \"Please make it stop! I just want things to be QUIET so I can SLEEP!\" Oh! He's not a bad goblin — he's just a TIRED goblin!",
    sillyMoment:
      "The Confused Goblin's slippers dance right off his feet and start doing the cha-cha across the forest floor. He chases them but trips over Fluffington, and they both roll into a bush. Fluffington pops out wearing one of the slippers as a hat.",
    itemEarned: {
      name: "Rainbow Bridge",
      description: "Creates a beautiful rainbow bridge that goes anywhere you want!",
      emoji: "🌈",
    },
    choices: [
      {
        text: "Sing the Goblin a lullaby with your flowers",
        nextNodeId: "pr-05a",
        preview: "Your Singing Flowers still have some magic left...",
      },
      {
        text: "Build the Goblin a cozy, quiet bedroom",
        nextNodeId: "pr-05b",
        preview: "Everyone deserves a good night's sleep!",
      },
    ],
  },

  // Chapter 5a - Lullaby ending
  {
    id: "pr-05a",
    character: "pretty-princess",
    title: "The Sweetest Lullaby",
    narrative:
      "You hold up your Singing Flowers and they start playing the sweetest, softest lullaby you've ever heard. The Confused Goblin's eyes get heavy. His head starts to nod. \"That's... so... nice...\" he mumbles. Fluffington finds a blanket and tucks the goblin in right there on his porch. Within seconds, the goblin is fast asleep, snoring tiny purple snores. While he sleeps, you carefully open the Noise Jar. WHOOOOOOSH! All the sounds fly back to the forest! Birds start singing! Frogs start ribbiting! The waterfall goes WHOOOOSH again! But the sounds are gentle near the goblin's treehouse — your Singing Flowers put a soft quiet spell around it so he can sleep peacefully. When the goblin wakes up hours later, he's the happiest he's ever been. \"I slept! I actually SLEPT!\" He builds a Rainbow Bridge from his treehouse to your castle so you can visit each other anytime. The whole forest celebrates with the biggest, most musical party ever — with a quiet corner for the goblin, of course!",
    sillyMoment:
      "At the party, Fluffington tries to sing karaoke but he only knows one song, and it's just the word \"carrots\" sung to the tune of \"Twinkle Twinkle Little Star.\" Everyone gives him a standing ovation anyway because he's VERY confident about it.",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - New home ending
  {
    id: "pr-05b",
    character: "pretty-princess",
    title: "The Cloud Castle Bedroom",
    narrative:
      "\"I have the BEST idea!\" you say. You use your Rainbow Bridge to create a beautiful bridge that stretches all the way up to the clouds! You lead the Confused Goblin up, up, up into the sky to a fluffy Cloud Castle! \"Up here, it's perfectly quiet and soft,\" you explain. The goblin touches the cloud floor. It's like walking on the fluffiest pillow ever! \"It's... it's PERFECT!\" he cries happy tears. He gives you the Noise Jar and you open it — WHOOOOOOSH! All the sounds rain down to the forest like musical confetti! Birds sing! Crickets chirp! The waterfall WHOOSHES! The goblin watches from his cloud window with a happy smile. \"It's actually beautiful from up here,\" he says. \"I can hear it just a little bit, like a nice quiet song.\" From that day on, the Confused Goblin lives happily in his Cloud Castle, and every evening he waves goodnight to the Pretty Princess from the clouds. Fluffington visits him every Tuesday for tea and cloud-jumping.",
    sillyMoment:
      "The goblin discovers that clouds are basically giant trampolines and starts bouncing around going \"WHEEEEE!\" He bounces so high he bonks his head on a star. The star says, \"Ow!\" and they become best friends.",
    isEnding: true,
    choices: [],
  },
];

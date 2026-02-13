import { StoryNode } from "../types";

export const wonkyWizardStory: StoryNode[] = [
  // Chapter 1
  {
    id: "wz-01",
    character: "wonky-wizard",
    title: "The Wonky Wizard Wakes Up",
    narrative:
      "You are the Wonky Wizard! You live in a tall, wobbly tower that leans to the left. Every morning your alarm clock is a rooster that sneezes instead of crowing. Today you wake up to find a sparkly letter sliding under your door. It says: \"HELP! The Giggle Goblin has stolen all the colors from Rainbow Village! Everything is gray and boring!\" You grab your Sparkly Wand and your pointy hat (which keeps falling over your eyes) and head out the door.",
    sillyMoment:
      "As you step outside, you trip over your own beard and roll down the hill like a wizard-shaped bowling ball. BOING BOING BOING!",
    choices: [
      {
        text: "Follow the path through the Bubbly Forest",
        nextNodeId: "wz-02a",
        preview: "You can hear the trees making funny popping sounds...",
      },
      {
        text: "Take the shortcut through the Pudding Swamp",
        nextNodeId: "wz-02b",
        preview: "Something smells like chocolate and bananas...",
      },
    ],
  },

  // Chapter 2a - Bubbly Forest
  {
    id: "wz-02a",
    character: "wonky-wizard",
    title: "The Bubbly Forest",
    narrative:
      "You walk into the Bubbly Forest where the trees blow bubbles instead of growing leaves. A friendly frog wearing tiny glasses hops onto your shoulder. \"Excuse me,\" the frog says in a very serious voice, \"but your hat is on backwards.\" You fix your hat, but now it's inside out. The frog sighs. Up ahead, you see two paths. One goes past a tree that's giggling, and the other goes past a pond that's full of fizzy lemonade.",
    sillyMoment:
      "A bubble the size of a horse floats by with a squirrel inside it, waving at you and eating a tiny sandwich. \"Nice day for floating!\" the squirrel yells.",
    itemEarned: {
      name: "Bubble Shield",
      description: "A magical bubble that protects you from stinky things!",
      emoji: "🫧",
    },
    choices: [
      {
        text: "Visit the giggling tree",
        nextNodeId: "wz-03a",
        preview: "Tee hee hee! The tree can't stop laughing...",
      },
      {
        text: "Splash through the lemonade pond",
        nextNodeId: "wz-03b",
        preview: "It looks fizzy and tickly on your toes...",
      },
    ],
  },

  // Chapter 2b - Pudding Swamp
  {
    id: "wz-02b",
    character: "wonky-wizard",
    title: "The Pudding Swamp",
    narrative:
      "You wade into the Pudding Swamp. The ground is squishy and jiggly, like walking on a giant chocolate pudding! SQUISH SQUISH SQUISH! A duck swims by wearing a tiny top hat. \"Quack quack,\" says the duck. Then it clears its throat and says very clearly: \"Actually, I meant to say — the bridge is that way.\" It points with its wing. You're so surprised that a duck is talking that you step in an extra-jiggly spot and — SPLOOOSH! — pudding splashes everywhere!",
    sillyMoment:
      "The duck looks at you covered in pudding and says, \"You've got a little something on your... everything.\"",
    itemEarned: {
      name: "Bubble Shield",
      description: "A magical bubble that protects you from stinky things!",
      emoji: "🫧",
    },
    choices: [
      {
        text: "Follow the duck to the bridge",
        nextNodeId: "wz-03a",
        preview: "The duck waddles ahead, humming a little tune...",
      },
      {
        text: "Try your Silly Spell on the pudding",
        nextNodeId: "wz-03b",
        preview: "What happens when you make pudding rainbow-colored?",
      },
    ],
  },

  // Chapter 3a - Meet the Helper
  {
    id: "wz-03a",
    character: "wonky-wizard",
    title: "The Snoring Mountain",
    narrative:
      "You reach the Snoring Mountain. It's a mountain that actually snores! Every few seconds: HONK-SHOOOO! HONK-SHOOOO! The whole ground shakes. There's a cave at the bottom with a sign that says \"Giggle Goblin's Workshop — Please Wipe Your Feet.\" How polite for a villain! Inside the cave, you can hear someone laughing and the sound of colors being squished into jars. You need to sneak in, but the mountain's snoring keeps blowing your hat off!",
    sillyMoment:
      "The mountain snores so hard that your beard flies up and wraps around your head like a scarf. You look like a wizard mummy! HONK-SHOOOOO!",
    skillEarned: {
      name: "Super Sneeze Spell",
      description: "Makes anyone sneeze sparkly glitter! ACHOO!",
      emoji: "🤧",
    },
    choices: [
      {
        text: "Sneak in through the front door",
        nextNodeId: "wz-04a",
        preview: "You tiptoe very carefully... well, kind of carefully...",
      },
      {
        text: "Find another way in through the chimney",
        nextNodeId: "wz-04b",
        preview: "There's smoke coming out that smells like cotton candy...",
      },
    ],
  },

  // Chapter 3b - Different path to the villain
  {
    id: "wz-03b",
    character: "wonky-wizard",
    title: "The Rainbow River",
    narrative:
      "You discover the Rainbow River — but wait, it's not rainbow anymore! It's all gray and sad-looking. The fish are swimming around looking confused. One fish pops its head out of the water and says, \"Have you seen our colors? I used to be bright orange! Now I look like a rainy day.\" You try your Silly Spell on the river. WHOOOOSH! Rainbow sparkles fly everywhere but they just bounce off the gray water. The Giggle Goblin's magic is too strong! You'll need to find him. Luckily, there's a trail of gray footprints leading up the hill.",
    sillyMoment:
      "The gray fish tries to look tough and flexes its tiny fish muscles. \"When I get my color back, I'm gonna look SO cool,\" it says, doing a little spin.",
    skillEarned: {
      name: "Super Sneeze Spell",
      description: "Makes anyone sneeze sparkly glitter! ACHOO!",
      emoji: "🤧",
    },
    choices: [
      {
        text: "Follow the gray footprints up the hill",
        nextNodeId: "wz-04a",
        preview: "The footprints are very big and go in zigzags...",
      },
      {
        text: "Ask the fish for directions",
        nextNodeId: "wz-04b",
        preview: "The fish seems to know a secret shortcut...",
      },
    ],
  },

  // Chapter 4a - Meet the Giggle Goblin
  {
    id: "wz-04a",
    character: "wonky-wizard",
    title: "The Giggle Goblin's Workshop",
    narrative:
      "You find the Giggle Goblin! He's a small, round, green fellow with enormous ears and a belly that jiggles when he laughs (which is always). He's surrounded by hundreds of jars filled with stolen colors — red, blue, yellow, purple, all swirling around inside the glass. \"Hee hee hee!\" he giggles. \"I took all the colors because nobody ever invites me to Rainbow Village's painting parties! So if I can't paint, NOBODY can paint! Hee hee!\" He doesn't look mean. He looks... lonely.",
    sillyMoment:
      "The Giggle Goblin accidentally sits on a jar of yellow and it goes PFFFFFTTTT and shoots yellow paint right up his nose. He sneezes and his ears flap like tiny wings.",
    itemEarned: {
      name: "Friendship Cloak",
      description: "Anyone who touches this sparkly cloak wants to be friends!",
      emoji: "🧥",
    },
    choices: [
      {
        text: "Use your Super Sneeze Spell on the jars",
        nextNodeId: "wz-05a",
        preview: "Maybe sneezing glitter will break the jars open...",
      },
      {
        text: "Offer to be the Giggle Goblin's friend",
        nextNodeId: "wz-05b",
        preview: "He looks like he really needs a buddy...",
      },
    ],
  },

  // Chapter 4b - Alternative meeting
  {
    id: "wz-04b",
    character: "wonky-wizard",
    title: "The Color Vault",
    narrative:
      "You sneak in through a back tunnel and find the Color Vault — a huge room filled with stolen colors in glass jars! They're all stacked up in wobbly towers. You hear the Giggle Goblin on the other side of the door, giggling to himself: \"Hee hee, my beautiful colors! All MINE! I'll have the best painting party all by myself!\" He sounds less like a villain and more like someone who really wants to paint. You could try to free the colors right now, or you could go talk to him.",
    sillyMoment:
      "You accidentally bump a jar of green paint and it falls on your head. Now you look like a green wizard with a purple beard. Very fashionable!",
    itemEarned: {
      name: "Friendship Cloak",
      description: "Anyone who touches this sparkly cloak wants to be friends!",
      emoji: "🧥",
    },
    choices: [
      {
        text: "Try to open all the jars with magic",
        nextNodeId: "wz-05a",
        preview: "Your wand is buzzing with sparkly energy...",
      },
      {
        text: "Go talk to the Giggle Goblin",
        nextNodeId: "wz-05b",
        preview: "Maybe he just needs someone to talk to...",
      },
    ],
  },

  // Chapter 5a - Action ending
  {
    id: "wz-05a",
    character: "wonky-wizard",
    title: "The Great Color Explosion!",
    narrative:
      "You point your Sparkly Wand at the jars and cast the biggest Silly Spell you've ever done! KAZOOOOOOM! All the jars start shaking and rattling. Then — POP POP POP POP POP! — every single jar bursts open and colors fly everywhere! Red and blue and green and yellow and purple swirl through the air like a beautiful tornado! The colors zoom out the windows and fly back to Rainbow Village! The Giggle Goblin watches with big, wide eyes. \"Wow,\" he whispers. \"That's the most beautiful thing I've ever seen.\" A tear rolls down his cheek. You put your Friendship Cloak around his shoulders. \"Hey,\" you say. \"Want to come to Rainbow Village? I bet they'd love someone who appreciates colors THIS much.\" The Giggle Goblin's face lights up. \"Really? You mean it?\" And just like that, you didn't just save Rainbow Village — you made a new friend!",
    sillyMoment:
      "The colors are so excited to be free that they paint a silly mustache on everybody, including the mountain, which wakes up and says, \"Hey! Who put a mustache on me?!\" HONK-SHOO— wait, WHAT?!",
    isEnding: true,
    choices: [],
  },

  // Chapter 5b - Friendship ending
  {
    id: "wz-05b",
    character: "wonky-wizard",
    title: "The Best Painting Party Ever",
    narrative:
      "You wrap your Friendship Cloak around the Giggle Goblin's shoulders. His eyes go wide and sparkly. \"W-what's this warm fuzzy feeling?\" he asks, his bottom lip wobbling. \"That's friendship!\" you say with a big smile. \"And I have an idea — what if we bring ALL the colors back to Rainbow Village AND you get to come to the painting party?\" The Giggle Goblin starts crying happy tears (which are rainbow-colored, by the way). \"Nobody's ever invited me to anything before!\" Together, you open all the jars and the colors dance back to the village. When you arrive at Rainbow Village with the Giggle Goblin, everyone cheers! They throw the biggest painting party in history, and the Giggle Goblin turns out to be the BEST painter in the whole kingdom. He paints a huge mural of you — the Wonky Wizard — saving the day!",
    sillyMoment:
      "The Giggle Goblin paints your portrait but accidentally makes your nose look like a potato. \"It's ABSTRACT ART!\" he says proudly. Everyone agrees it's a masterpiece. You're not so sure about the potato nose, but you laugh anyway.",
    isEnding: true,
    choices: [],
  },
];

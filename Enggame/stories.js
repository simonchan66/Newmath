// stories.js
const gameStories = {
    "school": {
        title: "Crazy School Day",
        emoji: "🏫",
        scenes: [
            {
                text: "You walk into your classroom, but your teacher is missing! Sitting at the desk is...",
                emoji: "👩‍🏫",
                choices: [
                    { text: "A giant hamster wearing glasses.", icon: "🐹" },
                    { text: "A robot eating homework.", icon: "🤖" },
                    { text: "A penguin in a tuxedo.", icon: "🐧" },
                    { text: "A slice of pizza with eyes.", icon: "🍕" }
                ]
            },
            {
                text: "The new teacher looks at the class and shouts...",
                emoji: "📢",
                choices: [
                    { text: "\"No more math! Only dancing!\"", icon: "💃" },
                    { text: "\"Who wants ice cream for breakfast?\"", icon: "🍦" },
                    { text: "\"Homework is illegal!\"", icon: "🚫" },
                    { text: "\"Everyone must walk backwards!\"", icon: "🔙" }
                ]
            },
            {
                text: "You sit down and open your backpack. Inside, you find...",
                emoji: "🎒",
                choices: [
                    { text: "A family of singing frogs.", icon: "🐸" },
                    { text: "A portal to a candy world.", icon: "🍭" },
                    { text: "100 marshmallows.", icon: "🍡" },
                    { text: "A sleeping baby dragon.", icon: "🐉" }
                ]
            },
            {
                text: "It is time for English class. But instead of pens, everyone has to write with...",
                emoji: "✍️",
                choices: [
                    { text: "Invisible ink.", icon: "👻" },
                    { text: "French fries dipped in ketchup.", icon: "🍟" },
                    { text: "Magic wands.", icon: "🪄" },
                    { text: "Their toes.", icon: "🦶" }
                ]
            },
            {
                text: "Suddenly, the school bell rings. It sounds like...",
                emoji: "🔔",
                choices: [
                    { text: "A cow mooing \"Mooooo-ve out!\"", icon: "🐄" },
                    { text: "A giant duck quacking.", icon: "🦆" },
                    { text: "Funny disco music.", icon: "🕺" },
                    { text: "Someone burping loudly.", icon: "🙊" }
                ]
            },
            {
                text: "You run to the playground. The floor has turned into...",
                emoji: "🛝",
                choices: [
                    { text: "Purple jelly.", icon: "🍮" },
                    { text: "A giant trampoline.", icon: "🤸" },
                    { text: "Crunchy popcorn.", icon: "🍿" },
                    { text: "Soft clouds.", icon: "☁️" }
                ]
            },
            {
                text: "For lunch, you open your lunchbox. Your sandwich suddenly...",
                emoji: "🥪",
                choices: [
                    { text: "Flies away like a bird.", icon: "🐦" },
                    { text: "Starts singing \"Let It Go\".", icon: "🎤" },
                    { text: "Turns into a butterfly.", icon: "🦋" },
                    { text: "Asks you for a napkin.", icon: "🧻" }
                ]
            },
            {
                text: "School is over! To get home, you jump onto your vehicle, which is...",
                emoji: "🚌",
                choices: [
                    { text: "A rocket-powered snail.", icon: "🐌" },
                    { text: "A flying carpet made of socks.", icon: "🧦" },
                    { text: "A friendly T-Rex.", icon: "🦖" },
                    { text: "A bubble that never pops.", icon: "🫧" }
                ]
            },
            {
                text: "You get home and tell your mom. She says...",
                emoji: "🏠",
                choices: [
                    { text: "\"Did you bring me a taco?\"", icon: "🌮" },
                    { text: "\"That is normal, I am an alien.\"", icon: "👽" },
                    { text: "\"Cool! I went to the moon for tea.\"", icon: "🌑" },
                    { text: "\"Let's go back tomorrow!\"", icon: "📅" }
                ]
            },
            {
                text: "You blink your eyes and realize it was all a dream! You are sleeping in...",
                emoji: "💤",
                choices: [
                    { text: "A giant donut.", icon: "🍩" },
                    { text: "A nest on top of a tree.", icon: "🌳" },
                    { text: "A bathtub full of slime.", icon: "🛁" },
                    { text: "A spaceship heading to Mars.", icon: "🚀" }
                ]
            }
        ]
    },
    "grocery": {
        title: "The Wildest Grocery Trip",
        emoji: "🛒",
        scenes: [
            {
                text: "You push a shopping cart, but instead of wheels, the cart has...",
                emoji: "🛒",
                choices: [
                    { text: "Four tiny turtle legs.", icon: "🐢" },
                    { text: "Skis made of frozen bananas.", icon: "🍌" },
                    { text: "Giant donuts.", icon: "🍩" },
                    { text: "Robot feet that dance.", icon: "🤖" }
                ]
            },
            {
                text: "You walk to the fruit section. Suddenly, an orange looks at you and says...",
                emoji: "🍊",
                choices: [
                    { text: "\"Please don't squeeze me!\"", icon: "😖" },
                    { text: "\"I am actually a pumpkin.\"", icon: "🎃" },
                    { text: "\"Do I smell like socks?\"", icon: "🧦" },
                    { text: "\"Help! I’m allergic to apples!\"", icon: "🍎" }
                ]
            },
            {
                text: "Your mom asks you to grab a box of cereal. When you shake the box, sound comes out like...",
                emoji: "🥣",
                choices: [
                    { text: "A cat meowing.", icon: "🐱" },
                    { text: "Breaking glass.", icon: "🥛" },
                    { text: "Drums playing rock music.", icon: "🥁" },
                    { text: "A baby laughing.", icon: "👶" }
                ]
            },
            {
                text: "You go to the freezer to get ice cream. Inside the freezer, you see...",
                emoji: "🍦",
                choices: [
                    { text: "A polar bear wearing a swimsuit.", icon: "🐻‍❄️" },
                    { text: "A snowman eating a popsicle.", icon: "⛄" },
                    { text: "Santa Claus taking a nap.", icon: "🎅" },
                    { text: "Fish swimming in the ice.", icon: "🐟" }
                ]
            },
            {
                text: "Suddenly, the store manager makes an announcement on the speaker...",
                emoji: "📢",
                choices: [
                    { text: "\"Free kittens on Aisle 5!\"", icon: "🐱" },
                    { text: "\"Gravity is turned off in 3, 2, 1...\"", icon: "🚀" },
                    { text: "\"Whoever jumps highest gets a cookie!\"", icon: "🍪" },
                    { text: "\"Run! The vegetables are attacking!\"", icon: "🥦" }
                ]
            },
            {
                text: "You are thirsty, so you grab a bottle of water. But inside the bottle is...",
                emoji: "💧",
                choices: [
                    { text: "Melted chocolate.", icon: "🍫" },
                    { text: "Glitter glue.", icon: "✨" },
                    { text: "Green slime.", icon: "🦠" },
                    { text: "Rainbow juice.", icon: "🌈" }
                ]
            },
            {
                text: "You bump into another shopper. It turns out to be...",
                emoji: "😲",
                choices: [
                    { text: "A zombie looking for brains.", icon: "🧟" },
                    { text: "A kangaroo with a shopping list.", icon: "🦘" },
                    { text: "A spooky ghost buying milk.", icon: "👻" },
                    { text: "Your teacher wearing pajamas.", icon: "👘" }
                ]
            },
            {
                text: "It is time to pay. The cashier doesn't want money. She wants to be paid with...",
                emoji: "💳",
                choices: [
                    { text: "Five loud high-fives.", icon: "🖐️" },
                    { text: "Your socks.", icon: "🧦" },
                    { text: "A funny face.", icon: "🤪" },
                    { text: "A bucket of mud.", icon: "💩" }
                ]
            },
            {
                text: "You leave the store, but the sky is raining...",
                emoji: "🌧️",
                choices: [
                    { text: "Hot dogs.", icon: "🌭" },
                    { text: "Purple glitter.", icon: "✨" },
                    { text: "Bouncy balls.", icon: "⚽" },
                    { text: "Tacos.", icon: "🌮" }
                ]
            },
            {
                text: "You wake up laughing. It was a dream! You are hugging...",
                emoji: "🛌",
                choices: [
                    { text: "Your pet dog.", icon: "🐶" },
                    { text: "A bag of frozen peas.", icon: "🧊" },
                    { text: "A giant teddy bear.", icon: "🧸" },
                    { text: "A pillow shaped like a pizza.", icon: "🍕" }
                ]
            }
        ]
    },
    // Add these to your gameStories object

    "museum": {
        title: "Night at the Crazy Museum",
        emoji: "🏛️",
        scenes: [
            {
                text: "You enter the History Museum. The ticket collector isn't a human, it is...",
                emoji: "🎟️",
                choices: [
                    { text: "A mummy asking for tape.", icon: "🤕" },
                    { text: "A caveman holding an iPad.", icon: "📱" },
                    { text: "A statue that tickles you.", icon: "🗿" },
                    { text: "A dinosaur wearing a tie.", icon: "👔" }
                ]
            },
            {
                text: "You walk into the Dinosaur Room. The T-Rex skeleton suddenly...",
                emoji: "🦖",
                choices: [
                    { text: "Starts doing ballet.", icon: "🩰" },
                    { text: "Sneezes a cloud of dust.", icon: "💨" },
                    { text: "Asks to play fetch.", icon: "🦴" },
                    { text: "Puts on sunglasses.", icon: "😎" }
                ]
            },
            {
                text: "Next is the Ocean Hall. A giant Blue Whale hangs from the ceiling. Inside its tummy, you hear...",
                emoji: "🐋",
                choices: [
                    { text: "A pirate singing karaoke.", icon: "🎤" },
                    { text: "A fish playing the drums.", icon: "🥁" },
                    { text: "The ocean rushing 'Whoosh!'", icon: "🌊" },
                    { text: "Someone ordering pizza.", icon: "🍕" }
                ]
            },
            {
                text: "You find the Ancient Egypt exhibit. A Sphinx riddle asks: 'What has legs but cannot walk?'",
                emoji: "🐫",
                choices: [
                    { text: "A table!", icon: "🪑" },
                    { text: "A very lazy cat.", icon: "🐈" },
                    { text: "My pants.", icon: "👖" },
                    { text: "A chair made of cheese.", icon: "🧀" }
                ]
            },
            {
                text: "In the Medieval Castle room, a suit of armor starts clanking. Inside the helmet is...",
                emoji: "🏰",
                choices: [
                    { text: "A hamster steering a wheel.", icon: "🐹" },
                    { text: "A ghost eating a sandwich.", icon: "👻" },
                    { text: "Just a floating mustache.", icon: "🥸" },
                    { text: "A pile of jellybeans.", icon: "🍬" }
                ]
            },
            {
                text: "You visit the Space Room to learn about gravity. Suddenly you start floating because...",
                emoji: "🌌",
                choices: [
                    { text: "You ate too much popcorn.", icon: "🍿" },
                    { text: "Gravity got turned off!", icon: "🪶" },
                    { text: "Your shoes are balloons.", icon: "🎈" },
                    { text: "A magnet is pulling you.", icon: "🧲" }
                ]
            },
            {
                text: "You see a famous painting of a lady. When you look closer, she...",
                emoji: "🖼️",
                choices: [
                    { text: "Sticks her tongue out.", icon: "😝" },
                    { text: "Winks at you.", icon: "😉" },
                    { text: "Throws a tomato.", icon: "🍅" },
                    { text: "Climbs out of the frame.", icon: "🖼️" }
                ]
            },
            {
                text: "It's time to visit the Ice Age. It is so cold that your breath turns into...",
                emoji: "❄️",
                choices: [
                    { text: "Little ice cubes.", icon: "🧊" },
                    { text: "Snowflakes shaped like stars.", icon: "⭐" },
                    { text: "Frozen bubbles.", icon: "🫧" },
                    { text: "Ice cream scoops.", icon: "🍨" }
                ]
            },
            {
                text: "You run to the gift shop to buy a souvenir. You decide to buy...",
                emoji: "🛍️",
                choices: [
                    { text: "A real dinosaur egg.", icon: "🥚" },
                    { text: "A time machine watch.", icon: "⌚" },
                    { text: "Invisible ink.", icon: "👻" },
                    { text: "A book that reads itself.", icon: "📖" }
                ]
            },
            {
                text: "Crash! You knock over a vase and wake up. You are actually in...",
                emoji: "🛌",
                choices: [
                    { text: "A blanket fort.", icon: "⛺" },
                    { text: "Your dog's bed.", icon: "🐕" },
                    { text: "A pile of laundry.", icon: "👕" },
                    { text: "Your history class.", icon: "🏫" }
                ]
            }
        ]
    },
    "body": {
        title: "The Incredible Body Voyage",
        emoji: "🧬",
        scenes: [
            {
                text: "You shrink down to the size of a bug to explore the human body! You enter through the mouth, which looks like...",
                emoji: "👄",
                choices: [
                    { text: "A giant pink cave.", icon: "⛰️" },
                    { text: "A car wash for food.", icon: "🚗" },
                    { text: "A cinema with teeth seats.", icon: "🦷" },
                    { text: "A sticky playground.", icon: "🛝" }
                ]
            },
            {
                text: "Watch out! The teeth are chewing. They are crushing a giant piece of...",
                emoji: "🦷",
                choices: [
                    { text: "Crunchy broccoli.", icon: "🥦" },
                    { text: "Chocolate cake.", icon: "🍰" },
                    { text: "A rubber duck.", icon: "🦆" },
                    { text: "Spicy tacos.", icon: "🌮" }
                ]
            },
            {
                text: "You slide down the throat like a waterslide. 'Wheeee!' You land with a splash in the stomach, which is full of...",
                emoji: "🎢",
                choices: [
                    { text: "Orange soda.", icon: "🥤" },
                    { text: "Alphabet soup.", icon: "🥣" },
                    { text: "Green slime.", icon: "🤢" },
                    { text: "Melted cheese.", icon: "🧀" }
                ]
            },
            {
                text: "The stomach shakes to digest food. It feels like you are...",
                emoji: "🌪️",
                choices: [
                    { text: "Inside a washing machine.", icon: "🧼" },
                    { text: "Jumping on a trampoline.", icon: "🤸" },
                    { text: "Dancing the salsa.", icon: "💃" },
                    { text: "Riding a rodeo bull.", icon: "🐂" }
                ]
            },
            {
                text: "You travel to the heart. It is beating very loud! The rhythm sounds like...",
                emoji: "❤️",
                choices: [
                    { text: "Boom-Boom-Pow!", icon: "🥁" },
                    { text: "A ticking clock.", icon: "⏰" },
                    { text: "A rock band drummer.", icon: "🎸" },
                    { text: "Someone knocking on a door.", icon: "🚪" }
                ]
            },
            {
                text: "Next stop: The Lungs! It is very windy here because of the oxygen. The wind blows you onto...",
                emoji: "🌬️",
                choices: [
                    { text: "A flying red blood cell.", icon: "🩸" },
                    { text: "A cloud of air.", icon: "☁️" },
                    { text: "A paper airplane.", icon: "✈️" },
                    { text: "A bouncy bubble.", icon: "🫧" }
                ]
            },
            {
                text: "You float up to the Brain. This is the command center! You see brain cells playing...",
                emoji: "🧠",
                choices: [
                    { text: "Video games.", icon: "🎮" },
                    { text: "Chess with memories.", icon: "♟️" },
                    { text: "Telephone with nerves.", icon: "☎️" },
                    { text: "Hide and seek.", icon: "🙈" }
                ]
            },
            {
                text: "Oh no! Dust got into the nose! A giant sneeze is coming! It feels like...",
                emoji: "🤧",
                choices: [
                    { text: "An earthquake!", icon: "🌋" },
                    { text: "A rocket launch.", icon: "🚀" },
                    { text: "A tornado.", icon: "🌪️" },
                    { text: "A balloon popping.", icon: "🎈" }
                ]
            },
            {
                text: "AHHH-CHOO! The sneeze shoots you out of the nose at super speed! You fly past...",
                emoji: "💨",
                choices: [
                    { text: "A surprised cat.", icon: "🙀" },
                    { text: "The moon.", icon: "🌙" },
                    { text: "A bird eating a worm.", icon: "🐦" },
                    { text: "Your best friend.", icon: "🙋" }
                ]
            },
            {
                text: "You land back in your own room, normal size again. You wipe your face and realize you just...",
                emoji: "🧼",
                choices: [
                    { text: "Sneezed on your mirror.", icon: "🪞" },
                    { text: "Fell off your chair.", icon: "🪑" },
                    { text: "Burped really loud.", icon: "🫢" },
                    { text: "Ate a lemon.", icon: "🍋" }
                ]
            }
        ]
    }

};

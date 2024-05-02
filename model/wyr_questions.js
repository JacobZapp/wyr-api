const {router} = require("express/lib/application");

const questions = [
    {
    'question': 'Step on a Nail or Staple your Tongue',
    'answer1': 'Step on Nail',
    'answer2': 'Staple Tongue',
},
{
    'question': 'Drink a Bottle of Ketchup or eat a Cup of Cinnamon',
    'answer1': 'Ketchup',
    'answer2': 'Cinnamon',
},
    {
    'question': 'Ski or Snowboard',
        'answer1': 'Ski',
        'answer2': 'Snowboard',
},
    {
    'question': 'Longboard or Skateboard',
        'answer1': 'Longboard',
        'answer2': 'Skateboard',
},
    {
    'question': 'Have a Pet Tiger or Pet Whale',
        'answer1': 'Tiger',
        'answer2': 'Whale',
},
    {
    'question': 'Have hands for feet or feet for hands',
        'answer1': 'Hands for Feet',
        'answer2': 'Feet for Hands',
},
    {
    'question': '2 personalities in one body or a clone of yourself',
        'answer1': '2 Personalities',
        'answer2': 'Clone',
},
    {
    'question': '',
        'answer1': '',
        'answer2': '',
}]

// This is selecting a random one of these questions
function randomWYRQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length)

    const randomQuestion = questions(randomIndex)
    return randomQuestion
}

module.exports = randomWYRQuestion
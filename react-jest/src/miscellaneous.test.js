var unescape = require('recursive-unescape')

describe('Miscellaneous tests', () => {


    it('unescape string', () => {

        const escapedString = 'British actor David Morrissey stars as which role in &quot;The Walking Dead&quot;?';
        const unescaped = unescape(escapedString)
        expect(unescaped).toEqual('British actor David Morrissey stars as which role in "The Walking Dead"?')

        const escapedString2 = 'The &#039;Squaring the Circle&#039; problem is solvable.'


    })

})
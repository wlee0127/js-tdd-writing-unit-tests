// Your tests here
import {pointsForWord} from "../utils";

describe("pointsForWord", ()=>{
    it("calculates the total points for a word (1 point per vowel, 2 per consonant)", ()=>{
        const arg = "test";

        const result = pointsForWord(arg);
        
        expect(result).toBe(7);
    });

    it("handles uppercase and lowercase input", ()=>{
        const arg = "tEsT";

        const result = pointsForWord(arg);

        expect(result).toBe(7);
    });
})


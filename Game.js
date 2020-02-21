const GameState = Object.freeze({
    WELCOME: Symbol("welcome"),
    START: Symbol("start"),
    IGNORE: Symbol("ignore"),
    CHECK1: Symbol("check1"),
    LOCK: Symbol("lock"),
    END: Symbol("end"),
    CALL: Symbol("call"),
    UPSTAIRS: Symbol("upstairs"),
    UPSTAIRS2: Symbol("upstairs2"),
    FRONTDOOR: Symbol("frontDoor"),
    LOCKFRONTDOOR: Symbol("lockFrontDoor"),
    CHECKBACKDOOR: Symbol("checkBackDoor"),
    CONFRONT: Symbol("confront")
});

let start = "It's 1:12AM. Your trying and failing to sleep. As you roll over yet again trying to get comfortable, you hear a 'tap tap' noise coming from down stairs. 'Ignore' the noise? 'Check' out the noice?";
let ignore = "You decide it's just an animal and close your eyes to once again try and sleep. 'Tap, Tap'. You roll over annoyed, it was hard enough to sleep when animals weren't mucking around. Thankfully the noise seems to stop, you think the animal has moved on until you hear your front door open slowly. 'Check' out the noise? 'Lock' your bedroom?";
let check1 = "You get out of bed and head down the squeaky stairs. You flip on the light and hear the 'Tap Tap' noise again. This time you can pinpoint that its coming from the front door. Go back 'upstairs'? 'Check' the front door?";
let check2 = "You need to know who is in your house, you pick up your trusty bat kept beside your bed for this very reason.You begin to move down the stairs slowly trying to make as little noise as possible.The stairs betray you as they creak with every step until you finally reach the bottom.Looking to the left you see your front door wide open but with no sign of the intruder.You begin to look to the right when you feel a sharp stab in the middle of your back.You scream out and fall to the floor.You can't move.'Start' over ?";
let lock = "You get out of bed as quietly as possible, praying the intruder can't hear the slight squeak of the floor beneath your feet. You reach the door and close it softly, cursing as it makes a loud 'ka-chunk' noise ruining your attempt at stealth. You turn the lock on your door. 'Reinforce' door with dresser? 'Call' the police?";
let reinforce = "You have to make sure the intruder can't get into your room before you call for help. You run to your dresser and begin to push it across your floor. Your struggling a little as you push, making the horrible wood on wood screeching sound. You hear the intruder run up the stairs and immediately go to your door, violently jiggling the handle. You finally made it to your door as the intruder begins to kick it with practiced movements. You push with a renewed vigor but its too late as the intruder busts open the door. You see the intruder slip through the broken door and smile as he walks towards you. 'Start' over?";
let call = "You decide there's no time to waste and run to pick up your phone. You hear the intruder run up the stairs and start searching the nearby rooms. '911 What's your emergency?' a woman inquires on the other side of the line. As you explain the situation you can hear the intruder getting closer, already finished with the other rooms. The operator instructs you to hide in a safe place while you wait for the police to arrive. Your door handle is wiggled almost gently. Hide under the 'bed'? Hide in the 'closet'? Hide in the 'bathroom'?";
let bed = "You crawl under your bed just as the intruder begins to kick the door with practiced movements. It doesn't take long for the door to be busted open. You see a pair of feet move into your room and stop in front of your bed. You hold your breath praying he moves on. The intruder crouches down, you see him smile as you make eye contact. 'Start' over?";
let bathroom = "You run into the bathroom and lock the door behind you. Two locked doors should keep you safe. You hear the intruder begin to kick the door with practiced movements. It doesn't take long for it to be busted open. You listen closely as the intruder makes his way through your room checking in various places. You jump as the handle to the bathroom is tried. A moment passes before the intruder gives this door the same treatment as the last, kicking it open in one fluid motion. You see the man smile as he walks into the room making eye contact with you. 'Start' over?";
let closet = "You run to your closet and bury yourself under the piles of laundry you should have put away. Thank god you didn't. You hear the intruder begin to kick the door with practiced movements. It doesn't take long for it to be busted open. You listen closely as the intruder makes his way through your room checking in various places. You hold your breath as the intruder stops by the closet and begins to riffle through your laundry. The intruder freezes as the sound of sirens could be heard off in the distance. An angry curse leaves his mouth as he begins to stab wildly at the clothes, hoping to make contact with flesh. The sirens were getting closer, deciding you weren't worth it anymore the man ran from your room. You waited for the creak of your stairs and the slide of your back door until you left your hiding place. You run over to the window facing the back yard just in time to see a men hop your fence and run into the dark. 'Start' over? ";
let upstairs = "You decide you really don't want to know what's at your door and begin to climb back up the stairs. Halfway up you hear the door open slowly. You forgot to lock it. 'Hey, I can really use your help.' A man calls out to you. 'Help' him? Run 'upstairs'? ";
let help = "Worried about the man you make your way back down the stairs. Reaching the bottom, you see a man smiling at you. 'Thanks for coming back, I really need your help.' His smile only widened when you notice the knife in his hands. 'Start' over?";
let upstairs2 = " You decide this is your best chance to call the police. Running up the stairs you hear the intruder yell in frustration. You run to your room and immediately lock the door behind you. 'Reinforce' door with dresser? 'Call' the police?";
let upstairs4 = " You decide this is your best chance to call the police. Running up the stairs you tense when you hear the sound of glass breaking. You run to your room and immediately lock the door behind you. 'Reinforce' door with dresser? 'Call' the police?";
let frontDoor = "You walk up to the front door and notice a man looking through the window beside the door. You stop as he smiles and waves at you. Looking down you notice the door is unlocked. 'Lock' the door? 'Open' the door? ";
let openDoor = "You open the door to see what the man wants. His smile stays friendly, “Thanks for opening the door, I really need your help.” His smile only widened when you notice the knife in his hands. 'Start' over?";
let lockFrontDoor = "The man sees you reach for the lock and tries to open the door. Luckily you were faster and turned the lock just in time. 'I really need your help!' the man angrily bangs at the window. You see the knife in his hand a thank god you didn't open the door. You back away from the door keeping your eye on the man. Run 'upstairs'? 'Check' the back door?";
let checkBackDoor = "You believe if you left the front door open you could have left the back open as well. You run to the back of the house and find the door locked. You sigh in relief but tense when you hear the sound of glass breaking. Run 'upstairs' to call the police? 'Run' out the back? 'Confront' the intruder?";
let runBackDoor = "Your safest bet is to run to a neighbor's house. You slide the back door open and make a run for it hopping over your wooden fence. you see a light on in a neighbor's window and knock on their door until its opened.A confused lock on there face. 'Start' over?";
let upstairs3 = "The man has a knife, fighting him would be stupid. You move towards the stairs and start to run up them when you feel a sharp stab in the middle of your back. You scream out and fall forward on the stairs. You can't move. 'Start' over?";
let confront = "You're not going to take this lying down! You cautiously approach the front and peek around the corner. You see the man crouched beside the stairs. Waiting. You head through the kitchen to approach the man from the side. Taking a deep breath, you attack the man, sending the knife flying off to the side. Try to grab the 'knife'? Run 'upstairs'?";
let knife = "You reach out for the knife but never make it as the man kicks you hard in the head. You hold your head trying to ease some of the pain. Disoriented you see feet in front of you, looking up you see the man. Knife in hand. 'Start' over?";
let unknown = "Comand not reconised";

export default class Game {
    constructor() {
        this.stateCur = GameState.WELCOME;
    }

    makeAMove(sInput) {

        let sReply = "";
        switch (this.stateCur) {
            case GameState.WELCOME:
                sReply = start;
                this.stateCur = GameState.START;
                break;
            case GameState.START:
                if (sInput.toLowerCase().match("ignore")) {
                    sReply = ignore;
                    this.stateCur = GameState.IGNORE;
                } else if (sInput.toLowerCase().match("check")) {
                    sReply = check1;
                    this.stateCur = GameState.CHECK1;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.START;
                }
                break;
            case GameState.CHECK1:
                if (sInput.toLowerCase().match("upstairs")) {
                    sReply = upstairs;
                    this.stateCur = GameState.UPSTAIRS;
                } else if (sInput.toLowerCase().match("check")) {
                    sReply = frontDoor;
                    this.stateCur = GameState.FRONTDOOR;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.CHECK1;
                }
                break;
            case GameState.FRONTDOOR:
                if (sInput.toLowerCase().match("open")) {
                    sReply = openDoor;
                    this.stateCur = GameState.END;
                } else if (sInput.toLowerCase().match("lock")) {
                    sReply = lockFrontDoor;
                    this.stateCur = GameState.LOCKFRONTDOOR;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.FRONTDOOR;
                }
                break;
            case GameState.LOCKFRONTDOOR:
                if (sInput.toLowerCase().match("check")) {
                    sReply = checkBackDoor;
                    this.stateCur = GameState.CHECKBACKDOOR;
                } else if (sInput.toLowerCase().match("upstairs")) {
                    sReply = upstairs4;
                    this.stateCur = GameState.LOCK;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.LOCKFRONTDOOR;
                }
                break;
            case GameState.CHECKBACKDOOR:
                if (sInput.toLowerCase().match("run")) {
                    sReply = runBackDoor;
                    this.stateCur = GameState.END;
                } else if (sInput.toLowerCase().match("upstairs")) {
                    sReply = upstairs3;
                    this.stateCur = GameState.END;
                } else if (sInput.toLowerCase().match("confront")) {
                    sReply = confront;
                    this.stateCur = GameState.CONFRONT;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.CHECKBACKDOOR;
                }
                break;
            case GameState.CONFRONT:
                if (sInput.toLowerCase().match("knife")) {
                    sReply = knife;
                    this.stateCur = GameState.END;
                } else if (sInput.toLowerCase().match("upstairs")) {
                    sReply = upstairs2;
                    this.stateCur = GameState.LOCK;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.CONFRONT;
                }
                break;
            case GameState.UPSTAIRS:
                if (sInput.toLowerCase().match("help")) {
                    sReply = help;
                    this.stateCur = GameState.END;
                } else if (sInput.toLowerCase().match("upstairs")) {
                    sReply = upstairs2;
                    this.stateCur = GameState.LOCK;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.UPSTAIRS;
                }
                break;
            case GameState.IGNORE:
                if (sInput.toLowerCase().match("lock")) {
                    sReply = lock;
                    this.stateCur = GameState.LOCK;
                } else if (sInput.toLowerCase().match("check")) {
                    sReply = check2;
                    this.stateCur = GameState.END;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.IGNORE;
                }
                break;
            case GameState.LOCK:
                if (sInput.toLowerCase().match("call")) {
                    sReply = call;
                    this.stateCur = GameState.CALL;
                } else if (sInput.toLowerCase().match("reinforce")) {
                    sReply = reinforce;
                    this.stateCur = GameState.END;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.LOCK;
                }
                break;
            case GameState.CALL:
                if (sInput.toLowerCase().match("closet")) {
                    sReply = closet;
                    this.stateCur = GameState.END;
                } else if (sInput.toLowerCase().match("bed")) {
                    sReply = bed;
                    this.stateCur = GameState.END;
                } else if (sInput.toLowerCase().match("bathroom")) {
                    sReply = bathroom;
                    this.stateCur = GameState.END;
                } else {
                    sReply = unknown;
                    this.stateCur = GameState.CALL;
                }
                break;
            case GameState.END:
                if (sInput.toLowerCase().match("start")) {
                    sReply = start;
                    this.stateCur = GameState.START;
                } 
                break;
        }
        return ([sReply]);

    }

}
$(document).ready(
    function () {
        //add all event listener (clicks, etc.)

        //when the button with the id boyNameGenerator is clicked run the function getBoyName
        $("#boyNameGenerator").click(getBoyName);
        //when the button with the id girlNameGenerator is clicked run the function getGirlName
        $("#girlNameGenerator").click(getGirlName);


        //form validation
        var myRules =
            {
                userFirstName:
                    {
                        required: true
                    },
                crushFirstName:
                    {
                        required:true
                    }
            };
        var myMessages =
            {
                userFirstName:
                    {
                        required: "Must enter a name"
                    },
                crushFirstName:
                    {
                        required: "Must enter a name"
                    }
            };
        $("form").validate(
            {
                submitHandler: loveCalculator,
                rules: myRules,
                messages: myMessages
            }
        );



        //any other functions (calculate trip, roll die, etc.)

        function loveCalculator()
        {
            //get users first name
            var userFirstName = $("#userFirstName").val();
            //get the crush's first name
            var crushFirstName = $("#crushFirstName").val();
            //get the users zodiac sign
            var userZodiacSign = $("#userZodiacSign").val();
            //get the crush's zodiac sign
            var crushZodiacSign = $("#crushZodiacSign").val();

            //create all possible combinations between the zodiac signs and ouput the percentage compatibility and summary
            if(userZodiacSign === "aries")
            {
                if(crushZodiacSign === "aries")
                {
                    $("#loveCalcOutput").html(`<h3>75% Compatibility</h3><p>When two Aries come together, it is 
                    imperative for at least one of them to have mastered the art of staying calm. If 
                    this is achieved by one of them, not through passive aggression but through rational 
                    thought, their relationship can be truly rewarding. As two warm and passionate people,
                     they can share many adventurous moments that raise their energy levels sky high. At 
                     some point in the relationship one of these partners will have to learn their lesson 
                     and take responsibility for the future of their relationship if they are to last in 
                     time.</p>`);
                }
                else if(crushZodiacSign === "taurus")
                {
                    $("#loveCalcOutput").html(`<h3>63% Compatibility</h3><p>This is a relationship full of
                    personal challenges and individual depth. If they want to succeed as a couple, many 
                    internal issues in both must be solved. Only if they both accomplish peace in their 
                    lives, have just enough education, just enough other relationships and acquired just 
                    enough humor, they might be able to put aside their differences and listen to each 
                    other well enough. It is not that hard, except when you are used to using your horns. </p>`);
                }
                else if(crushZodiacSign === "gemini")
                {
                    $("#loveCalcOutput").html(`<h3>74% Compatibility</h3><p>The overall impression of this
                    couple would be good, exciting and challenging, a relationship where both partners can
                     learn a lot and be active in a healthy way. The main problem with their romantic 
                     involvement is the lack of trust, especially if ${userFirstName} gets too attached to 
                     ${crushFirstName}, always fighting for their freedom. The need for conversation with a lot of 
                     essence is bigger than any positive or any negative aspects of their relationship and
                      both of them should always have this in mind. In general, there is a big chance 
                      these two will end up together, because their shared love of adventure is bigger 
                      than most of their troubles. </p>`);
                }
                else if(crushZodiacSign === "cancer")
                {
                    $("#loveCalcOutput").html(`<h3>47% Compatibility</h3><p>This relationship can be 
                    painful for both partners and needs a lot of work put into it in order to work. It 
                    requires both of the partners to adapt and make changes in their behavior, while tip 
                    toeing around each other most of the time. It is not an easy road, but the rewards are
                     such inner understanding of passion, full of emotion and the ability to create 
                     something truly unique. If they succeed, they will probably never be satisfied with 
                     a different partner. </p>`);
                }
                else if(crushZodiacSign === "leo")
                {
                    $("#loveCalcOutput").html(`<h3>83% Compatibility</h3><p>The relationship of ${userFirstName} and 
                    ${crushFirstName} is passionate and turbulent, but they don’t seem to mind an occasional fight and 
                    a sharp word. When they fall in love deeply, they are almost impossible to separate as
                     they stubbornly hold on to the idea of their future together. Although they are not
                      two of the most romantic believers in love, they are passionate in their beliefs and 
                      when they find love, they will fight for it until there is literally nothing left of
                       their relationship. For as long as they love each other and stay faithful and true,
                        they will be tied up in a relationship they need to fight for every day. Their 
                        main objective is to find a way to enjoy the fight and have fun. </p>`);
                }
                else if(crushZodiacSign === "virgo")
                {
                    $("#loveCalcOutput").html(`<h3>42% Compatibility</h3><p>It’s a good thing that the
                     relationship between ${userFirstName} and ${crushFirstName} is never boring. 
                     Although in most cases they are not really meant to last, it can still be a fun 
                     experience if none of them takes their potential for a shared future too seriously. 
                     In case they take the best out of their relationship, giving it enough freedom and 
                      unpredictability, ${crushFirstName} would incorporate some of ${userFirstName}'s 
                      energy, while ${userFirstName} would allow ${crushFirstName} to teach them how to 
                      organize their thoughts and communicate calmly. This way they might come to the point
                       where their relationship could actually last, and the outcome depends on their 
                       ability to relax and have fun together. </p>`);
                }
                else if(crushZodiacSign === "libra")
                {
                    $("#loveCalcOutput").html(`<h3>84% Compatibility</h3><p>However difficult it might be 
                    to reconcile these two natures, remember that this is a primal opposition that 
                    represents partners by signification. ${userFirstName} and ${crushFirstName} are the 
                    couple of the zodiac, as much as any other opposing signs, for they are each other’s 
                    seventh house, house of relationships. Even more so if we acknowledge the fact that
                    ${crushFirstName} is the sign of relationships in general. Any problem they might have
                     with each other is something to be worked on, because it shows what their personal 
                     problem with any relationship is. When they are madly attracted to each other and 
                     fall in love, there is almost nothing that could separate them, no matter the 
                     differences. Wouldn’t we all like to find the middle ground with our loved one? 
                     They need to work on their bond, that’s a fact, but their relationship is a 
                     promise of a perfect fit of two souls meant to be together. </p>`);
                }
                else if(crushZodiacSign === "scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>23% Compatibility</h3><p>Think of this combination of 
                    signs through the most aggressive image of Fire and Water element. Fire evaporates 
                    Water, just like ${userFirstName} shatters ${crushFirstName}'s feelings. Water damps
                     down Fire, just like ${crushFirstName} wears ${userFirstName} out. They seem to 
                     bring out the worst in each other and this is nobody’s fault, it is just hard to 
                     reconcile so much focused energy that moves in two different directions. Their 
                     relationship is like the process of nuclear fusion and often just too much to handle. </p>`);
                }
                else if(crushZodiacSign === "sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>87% Compatibility</h3><p>This is definitely a couple 
                    with lots of potential. They might have to stand up to their environment and defend 
                    their feelings from others, but this won’t shake them too much, for neither of them 
                    thinks that much about the opinion of others anyway. If they manage to mend their 
                    philosophical differences and respect each other’s different opinions, they could 
                    become one of the warmest relationships in the zodiac. Their main relationship advice
                     would be to always tell the truth to each other and not go crazy about their healthy
                      differences.  </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>This is not an easy 
                    relationship. None of the partners has any trace of lightness and blissful ignorance. 
                    Therefore, their relationship might seem like a competition to ruin the relationship 
                    in the best possible way. It is hard to say who will get out of it a winner, for they
                     will both feel lousy most of the time and be relieved that they finally separated. 
                     If they stubbornly decide they love each other too much to let each other go, both
                      would probably bang their heads against a wall for years to come. Their only chance
                       of success is unconditional respect and the wideness of their views and 
                       expectations. They could truly complement each other, but only in a scenario 
                       where they would look for good in one another and highlight each other’s qualities.
                        Unfortunately, the malefic nature of their rulers rarely allows for them to be 
                        this positive and acceptance oriented. If they got together they should think 
                        about the things they could learn from each other instead of looking for each 
                        other’s shortcomings, and always stay out of each other’s business. </p>`);
                }
                else if(crushZodiacSign === "aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>71% Compatibility</h3><p>This is a couple that lacks 
                    tenderness. They are not two brutes who let their relationship fade as soon as their 
                    passion does, but the distant examining look of ${crushFirstName} can take out the 
                    emotion out of it. ${userFirstName} needs to be relaxed by their significant other, 
                    so they can melt down and show their true, warm emotional nature. In this 
                    relationship, they would have a distant partner that basically supports their primal,
                     instinctive nature. Although it is nice to think that the point of each relationship
                      is for partners to accept each other as they are, in this case that would take away
                       every chance for ${userFirstName} to grow through togetherness and learn about 
                       their emotional nature. This is something they will never be satisfied with. 
                       Still, every relationship with an Aquarius can surprise us as much as any 
                       individual Aquarius could. With them as a partner, there is always room for an 
                       enlightening scenario that leaves all things to free will. In case they decide to
                        share their lives together, they should have a screaming room they could 
                        individually visit once in a while. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>33% Compatibility</h3><p>This is a relationship 
                    disturbed mostly by the lack of trust and the ability of both parties to open up to 
                    their partner. Aries is ruled by Mars, the planet that rules our first chakra, 
                    responsible for our ability to set good boundaries. Pisces is ruled by Neptune, in 
                    charge of our entire aura and our permeability for outside stimuli. Since they 
                    are both responsible for our border with the outside world, it is hard to say which
                     partner should loosen up and make it possible for them to come close. Their only 
                     chance of a happy ending is if ${userFirstName} dives in and ${crushFirstName} wakes
                      up.</p>`);
                }
            }
            else if(userZodiacSign==="taurus")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>63% Compatibility</h3><p>This is a relationship full 
                    of personal challenges and individual depth. If they want to succeed as a couple, 
                    many internal issues in both must be solved. Only if they both accomplish peace in 
                    their lives, have just enough education, just enough other relationships and acquired
                     just enough humor, they might be able to put aside their differences and listen to 
                     each other well enough. It is not that hard, except when you are used to using your
                      horns. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>86% Compatibility</h3><p>The relationship between two
                    Taurus representatives is something to cherish and hold on to, only if they are not 
                    both too stubborn in their intent to wait for the other person to make the first move.
                     Because of their emotional and sensual nature, they can be very attentive to each
                      other’s needs and take care of one another when necessary. Their problem usually
                       shows only through the double set of horns, making them sink too deep into their 
                       differences with no apparent reason. If they could open up to each other, and to
                        their mutual need for change, this is a relationship both of them would find
                         extraordinary. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>23% Compatibility</h3><p>The relationship between 
                    ${userFirstName} and ${crushFirstName} doesn’t give much promise to begin with. 
                    Still, the fixed quality of the sign of ${userFirstName} can give them enough endurance 
                    and persistence to last in their intent to be with ${crushFirstName}, long enough for
                     them to really get to know each other well. Although their chances to reconcile 
                     their differences are slim, if ${userFirstName} puts their whole heart into it, they
                      might manage to become the most relevant part of ${crushFirstName}'s life as their 
                      base and their reliability in everything they do. In case they accept each other 
                      completely, ${userFirstName} will give ${crushFirstName} their connection to planet
                       Earth, to their body and their daily routine, giving them the base for health and
                        normal functioning. In return, ${crushFirstName} will give ${userFirstName} wings
                         and, better yet, teach them how to fly. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>91% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    present the gentlest couple of the zodiac. When they fall in love, they will rarely 
                    find the reason to separate, because of their shared emotional goals for love, 
                    understanding, family and the feeling of home. As long as both partners don’t already
                     have too much emotional baggage that makes them unable to give and receive this 
                     depth of emotion, they will likely learn to forgive and forget as the flow of their
                      relationship takes them to what they always desired. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>40% Compatibility</h3><p>The relationship of ${userFirstName}
                    and ${crushFirstName} could be aggressively challenging if not for their warm natures
                     ruled by Venus and the Sun. Although they are both signs of fixed quality with 
                     entirely different natures, if they gather enough patience before they enter their 
                     relationship, they have a chance to become your archetypal couple of a girl and a 
                     boy. When their masculine and feminine principles are in balance, they can use them
                      to mend their sexual, intellectual and financial circumstances and really enjoy 
                      each other. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>73% Compatibility</h3><p>In general, ${userFirstName}
                    is there to teach ${crushFirstName} about love, tenderness and sexuality. ${crushFirstName}
                     needs to be flexible enough to value ${userFirstName} and give them the intellectual 
                     view on things they might idealize. Their relationship could be a match made in heaven, 
                     only if they are not too scared of being hurt and too distrustful. If they do give in to
                      each other and fall madly in love, they could be the combination of a clear heart, 
                      represented by ${userFirstName}, and a clear mind, represented by ${crushFirstName}. 
                      What more would they need than each other? </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>42% Compatibility</h3><p>Look out Libras, for Taurus 
                    is here to wake your inner fears and bring them all to surface! ${userFirstName} 
                    should be careful, too, for their need to feel guilt could blossom with ${crushFirstName}.
                     This relationship is a lesson both of them will never forget, especially if they manage 
                     to build enough understanding and tenderness between them. The only way they could ever 
                     be happy would be to embrace what they don’t want to deal with in their own inner 
                     worlds. If they do this, well you can imagine what a Venus complete would be like. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>89% Compatibility</h3><p>Taurus and Scorpio are both signs of 
                    deepest physical pleasure, each in their own way. This must be the focus of their 
                    relationship, for they can’t seem to understand platonic and imaginative 
                    relationships when they get together. There is no such thing as a platonic experience
                     of romance, when the whole point of romance is to get physical. It is very possible
                      that they will build their sexual life to the point where no other partner could
                       ever satisfy their needs. This could lead to a possessive relationship with no way
                        out, although they probably wouldn’t want to get out even if they could. The 
                        entire experience can be too dark for ${userFirstName}, especially if their 
                        practical sense is challenged by ${crushFirstName}'s character. In case they're 
                        both independent and ready to blend with someone else, they could be the perfect
                         connection between sexual and emotional, the one that we all wish for. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>38% Compatibility</h3><p>With their inner beauty and 
                    the understanding they share in search of the truth to life, these two might seem 
                    like a perfect couple. However, every positive needs a negative to complete it, and
                     when we really observe, we can notice that often ${userFirstName} and ${crushFirstName}
                      don’t even get attracted to each other. ${userFirstName} needs earthly pleasures 
                      in their relationships and as a fixed, Earth sign it is the slowest of all signs. 
                      This is not exactly someone who can easily understand the fast, changeable and 
                      fiery ${crushFirstName}. The best possible scenario for their relationship would be
                       for them to get to know each other very well and build a friendship without 
                       expectations, for years. In the end, this could result in deep understanding that
                        would provide them both with enough patience to actually start a relationship
                         that has a future. If not, they can always hold on to beauty in the world. 
                         Imagine how wonderful their world of creation could be if they joined their 
                         forces of good. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>89% Compatibility</h3><p>${userFirstName} and 
                    ${crushFirstName} can form a relationship so deep that their creative power in the 
                    material realm could seem unreachable for other signs of the zodiac. With the ability
                     to complement each other in a gentle, slow way, they are the most boring couple on 
                     the outside, with most exciting inner activity that stays hidden from the rest of 
                     the world. If ${userFirstName} motivates ${crushFirstName}, and ${crushFirstName} 
                     shows the way of accomplishment to ${userFirstName}, they could work together, 
                     raise children and share a life with more fun than they are both used to, or simply
                      form an unbreakable bond. When their deep emotions intertwine, they are bound to 
                      each other for eternity.</p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>22% Compatibility</h3><p>${userFirstName} and 
                    ${crushFirstName} are people from two different worlds. Still, there is a strange 
                    similarity and connection between their rulers and although very challenging, this 
                    is a relationship where both partners could fall in love with each other, over and 
                    over again, every single day. They are ruled by Venus and Uranus, both planets 
                    rotating in a direction opposite to the direction of other planets. They are two 
                    outcasts, different and standing out together, they understand that East can be where
                     West is, and vice versa. They understand diversity, change of direction and the 
                     excitement of love. However, they will rarely get to the point to understand each 
                     other because of ${userFirstName}'s excessive need for peace and ${crushFirstName}'s
                      excessive need for excitement. What a strange pair these signs are. With such an 
                      obvious opportunity for electric love, they go around it and search for something 
                      else. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>93% Compatibility</h3><p>This is a relationship based 
                    on love and full of it while it lasts. They both crave romance and beauty in their 
                    lives, and will do anything that is needed to keep the beauty going between them. 
                    ${userFirstName} will give ${crushFirstName} a chance to connect to the real world, 
                    showing them how to ground their creativity, while ${crushFirstName} will lift up 
                    ${userFirstName} and make them a bit softer and more flexible. They seem to be on a 
                    mission of convincing them that true love exists. When their relationship is over, 
                    they will both know it instantly and very often a conversation about a breakup would 
                    be redundant. If they savor their trust and nurture the beauty of love they share, 
                    their relationship can last and be as inspiring as a dream coming true. </p>`);
                }
            }
            else if (userZodiacSign==="gemini")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>74% Compatibility</h3><p>The overall impression of this
                    couple would be good, exciting and challenging, a relationship where both partners 
                    can learn a lot and be active in a healthy way. The main problem with their romantic
                     involvement is the lack of trust, especially if ${crushFirstName} gets too attached
                      to ${userFirstName}, always fighting for their freedom. The need for conversation 
                      with a lot of essence is bigger than any positive or any negative aspects of their
                       relationship and both of them should always have this in mind. In general, there 
                       is a big chance these two will end up together, because their shared love of 
                       adventure is bigger than most of their troubles. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>36% Compatibility</h3><p>The relationship between 
                    ${crushFirstName} and ${userFirstName} doesn’t give much promise to begin with. Still,
                     the fixed quality of the sign of ${crushFirstName} can give them enough endurance 
                     and persistence to last in their intent to be with ${userFirstName}, long enough for
                      them to really get to know each other well. Although their chances to reconcile 
                      their differences are slim, if ${crushFirstName} puts their whole heart into it, 
                      they might manage to become the most relevant part of ${userFirstName}'s life as 
                      their base and their reliability in everything they do. In case they accept each 
                      other completely, ${crushFirstName} will give ${userFirstName} their connection to 
                      planet Earth, to their body and their daily routine, giving them the base for 
                      health and normal functioning. In return, ${userFirstName} will give ${crushFirstName}
                       wings and, better yet, teach them how to fly. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>83% Compatibility</h3><p>The relationship between two
                    Gemini will give other signs of the zodiac an almost certain headache. They will go 
                    everywhere together, do everything together and talk about everything with one 
                    another, again and again, until one of them loses interest in the other. Because of 
                    their possibly superficial approach, it is best if they have already had some 
                    relationships with depth before they met each other. This could give them the quality
                     to last together for longer than a week or two. In most cases, this is not a 
                     relationship they will want to stay in, although their mutual understanding is 
                     perfect. It is like they are too similar, and at the same time a relationship of too
                      many personalities. If each of them isn’t gathered into one person, they will need
                       someone who is, to hold their balance and not let them dissipate. In case they 
                       have built up personalities and each of them understands their own inner core, 
                       they can probably live forever and never consume the energy their connection 
                       brings. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>21% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    are next to each other in the zodiac, and they are likely to be next to each other 
                    in friendship. When it comes to emotional or sexual relationships, there seems to be 
                    too many things that set them apart. In order for their relationship to last, they 
                    both need to make some adjustments. ${userFirstName} will hardly ever change their 
                    routine for someone, especially when they find someone’s way of life boring, so the 
                    best thing to do here is to give them their freedom. If ${crushFirstName} falls in 
                    love deeply enough, they will understand what ${userFirstName} needs, and won’t hold
                     them back even if they wished for them to be different. ${userFirstName} has to open
                      their heart and listen to those few words that ${crushFirstName} wants to share. 
                      Even though they can speak about many things, when it comes to discussions of their
                       relationship, their views on it are different. ${userFirstName} needs to keep it 
                       interesting and ${crushFirstName} needs to be heard, as much as felt. If they 
                       give each other enough freedom and understanding, they could be like children in 
                       love for the first time. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>82% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    can have so much fun that it could make the rest of the zodiac envious. They both 
                    consider their day best spent in laughter, and if they share friends, they could seem
                     like a perfect couple. Their main challenge is the difference in their approach to 
                     change and they both need to make room for small adjustments in their behavior if 
                     they want their relationship to last. ${crushFirstName} will need to make room for 
                     more movement and understand what seems to be “flakiness” of the changeable 
                     ${userFirstName}, while ${userFirstName} will have to understand that ${crushFirstName}
                      is in fact keeping them together for however long they are meant to last. Their
                       mutual respect can usually overcome any boundaries, and they should keep having 
                       fun and building their relationship on a solid foundation of childish joy. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>40% Compatibility</h3><p>The relationship of ${userFirstName}
                    and ${crushFirstName} can change as the wind, while both partners get lost and found
                     on a daily basis. Their mutual love for Mercury is what binds them and what tears 
                     them apart, because they both tend to overthink things instead of following their 
                     hearts. Both of them are mostly in their minds, each one in their own way, and need 
                     to respect each other to the point where no one’s intelligence is judged on a 
                     superficial level. If they do fall in love, they will become a unification of Air 
                     and Earth Mercury – heaven on Earth.</p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>78% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    are not exactly always a perfect couple, although their signs support each other. If
                     ${crushFirstName} has trouble being alone and doing things by themselves, this 
                     isn’t something ${userFirstName} will easily understand. Due to their lack of
                      personal boundaries, ${crushFirstName} will often let ${userFirstName} lead the way
                       until all of their energy is gone, they feel like they should only lie down and 
                       turn their brain off. If they want to work on their relationship and be happy, 
                       ${crushFirstName} needs to respect ${userFirstName} enough to let them be their 
                       teacher, lover and a friend. In return, ${userFirstName} will have to take care of
                        ${crushFirstName}, respecting their limits and their need for togetherness. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>26% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    will usually annoy each other senseless. None of them will lightly understand their
                     partner’s personality. To ${userFirstName}, ${crushFirstName} will seem too depressed
                      and dark for no apparent reason, and for ${crushFirstName}, this could be an 
                      experience with no purpose or depth. If they do fall crazy in love, they could 
                      connect through their mutual love of change and give each other the exact things 
                      they lack. ${userFirstName} would get deep, emotional satisfaction they have never 
                      felt before and ${crushFirstName} would finally get the chance to rest their 
                      troubled soul, and realize that not everything needs to be taken seriously. 
                      This is a relationship of great lessons and an enormous capacity for personal 
                      growth of both partners. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>92% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    make an incredible couple, probably being the most innocent one of all oppositions 
                    in the zodiac. They don’t often find each other right away, but at some point in life
                     it is almost certain that a Gemini will find their Sagittarius and vice versa. Their
                      relationship has a strong intellectual connection, in which they will gradually 
                      find deep emotions. There is no real prognosis how this will end though, because 
                      the emotions they feel could easily scare them away and their relationship could 
                      end only because of fear. If they decide to give in and find out what they could 
                      share, with ${userFirstName}'s ideas and ${crushFirstName}'s beliefs, the sky is 
                      the limit. Or is it beyond? </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>15% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    are a very strange fit. Although they are both looking for things the other person 
                    has, they don’t seem to recognize them in each other. While ${userFirstName} needs 
                    someone to ground them and give them depth, when they look at ${crushFirstName}, they
                     see someone old, unmovable and boring. ${crushFirstName} needs joy and relaxation 
                     in their life, but ${userFirstName} seems like a ball of uncontrollable, superficial
                      opinions heading nowhere. In truth, they could have a valuable experience being 
                      together, sharing their different lives day after day. They might even find out 
                      that they actually work well together and have the ability to reach any goal that 
                      they think of. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>85% Compatibility</h3><p>${userFirstName} needs a 
                    partner who doesn’t bore them or make them feel inhibited. When you look at things 
                    this way, you could say that there is no better match for them than the fabulous
                     ${crushFirstName}. ${crushFirstName} needs someone to understand their grandiose 
                     ideas and discuss each one with them, and also someone who doesn’t make them feel 
                     inhibited. Who could do this better than ${userFirstName}? However, they could find
                      themselves in a relationship that doesn’t have enough emotion and compassion, and 
                      this is certain to surface as soon as the first disturbing thing happens in the 
                      life of one of these partners. They need to work on their emotional base and their
                       non-verbal understanding if they want their relationship to last. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>10% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    are squaring signs that often don’t have that much in common. They are both usually
                     positive enough to have a superficial enjoyable relationship and go well together
                      at large social gatherings. They could both forget to call each other when they 
                      agreed to, and they can both change their opinions in two seconds, but they simply
                       don’t share the same goals. As a strongly mental and a strongly emotional sign,
                        their lack of understanding can be hurtful for ${crushFirstName} and sometimes for
                         both of them. If they do fall in love and start a romantic relationship, chances
                          are they will not last very long. However, there is a beauty in the creative 
                          side of this relationship and if ${userFirstName} decides to truly listen to 
                          ${crushFirstName}, they could help them use their talent in a constructive way.
                           In most situations ${crushFirstName} will just drain the energy out of 
                           ${userFirstName}, especially if they end up in their fragile, needy mode that
                            some other signs could understand much better than ${userFirstName}. If they 
                            are to succeed in their persistence to be together, they should work together
                             and socialize a lot. The most important thing for both of them in this 
                             relationship is to reach for their emotional cores and give in to true 
                             intimacy, or they will never manage to communicate. </p>`);
                }
            }
            else if(userZodiacSign==="cancer")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>47% Compatibility</h3><p>This relationship can be 
                    painful for both partners and needs a lot of work put into it in order to work. It 
                    requires both of the partners to adapt and make changes in their behavior, while tip
                     toeing around each other most of the time. It is not an easy road, but the rewards 
                     are such inner understanding of passion, full of emotion and the ability to create 
                     something truly unique. If they succeed, they will probably never be satisfied with
                      a different partner. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>91% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     present the gentlest couple of the zodiac. When they fall in love, they will rarely
                      find the reason to separate, because of their shared emotional goals for love, 
                      understanding, family and the feeling of home. As long as both partners don’t 
                      already have too much emotional baggage that makes them unable to give and receive
                       this depth of emotion, they will likely learn to forgive and forget as the flow 
                       of their relationship takes them to what they always desired. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>21% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     are next to each other in the zodiac, and they are likely to be next to each other 
                     in friendship. When it comes to emotional or sexual relationships, there seems to be
                      too many things that set them apart. In order for their relationship to last, they
                       both need to make some adjustments. ${crushFirstName} will hardly ever change 
                       their routine for someone, especially when they find someone’s way of life boring,
                        so the best thing to do here is to give them their freedom. If ${userFirstName}
                         falls in love deeply enough, they will understand what ${crushFirstName} needs, 
                         and won’t hold them back even if they wished for them to be different. 
                         ${crushFirstName} has to open their heart and listen to those few words that
                          ${userFirstName} wants to share. Even though they can speak about many things,
                           when it comes to discussions of their relationship, their views on it are 
                           different. ${crushFirstName} needs to keep it interesting and ${userFirstName}
                            needs to be heard, as much as felt. If they give each other enough freedom 
                            and understanding, they could be like children in love for the first time. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>85% Compatibility</h3><p>Cancer is a sign of genetic 
                    inheritance and it is sometimes difficult to reconcile the genetic predispositions 
                    of two Cancer partners. However, their mellow nature, ability to feel and have enough
                     compassion for each other, makes them great candidates for marriage, children and 
                     the whole picket fence scenario. Their sex life and their shared activities could 
                     suffer a general lack of initiative, energy and movement. Because of this, they 
                     should both try not to end up in a boring everyday routine in which they only eat 
                     and sit in front of a TV as soon as they come home from work. It is important for 
                     them to have enough tender surprises and activities that build their physical 
                     relationship, or they might end up unsatisfied and not really understanding why. 
                     If they are troubled by this possible shortcoming of their relationship, as two 
                     tender individuals, they will manage to make each other feel wonderful, even if 
                     that means breaking up. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>29% Compatibility</h3><p>Although the Moon reflects 
                    the light from the Sun, the sign of Cancer doesn’t really see ${crushFirstName} as 
                    the source of all their joy. Leo is a sign that should spread joy and love with an
                     active approach to each one of their relationships. How is it possible that 
                     ${userFirstName} is immune? Well probably because the Moon circles around the Earth,
                      not the Sun. They are special, that’s for sure. Both of them are strong individuals,
                       each on their own plane. Their lack of understanding and emotional touch can be 
                       explained through the fact that both of them have a mission to spread love to the 
                       less fortunate signs of the zodiac. Not everyone is born with an emotional flow 
                       like ${userFirstName} and a huge, warm heart like ${crushFirstName}. If they kept
                        all this love to themselves, some unfortunate souls would probably search for 
                        them aimlessly, and the world would be a much sadder place. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>77% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     can have a wonderful connection and are usually brought together by sexual 
                     understanding. The main problem of their relationship is in the possible conflict 
                     between emotional ${userFirstName} and reasonable ${crushFirstName}. If they manage
                      to overcome this, accepting each other’s shortcomings and learning to incorporate 
                      some rationality or some emotion into their lives, they could end up in an inspiring
                       relationship that will last for a very long time. In a way, they complement each 
                       other as much as the heart complements the mind. If they share a spark of love, 
                       it would be a shame to miss the opportunity for happiness just because of 
                       someone’s irrational expectations or someone’s closed heart. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>28% Compatibility</h3><p>Probably the biggest 
                    restriction in the relationship between ${userFirstName} and ${crushFirstName}
                     is in things they want from their partner. ${userFirstName} wants someone responsible,
                      to take them by the hand if needed and complement their emotional nature with 
                      practicality. ${crushFirstName} wants someone who is full of life, energized, strong
                       and full of initiative to follow their ideas. They can really disappoint each other
                        if any expectations are set wrongly at the beginning of their relationship. The 
                        best way for them to build a love that is to last, is for both partners to hold 
                        on to their independence whatever happens. If they focus on love and worry about
                         earthly things each on their own, ${userFirstName} could “compromise” on heavenly
                          love, as much as ${crushFirstName} would like to have a family. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>79% Compatibility</h3><p>A relationship between 
                    ${userFirstName} and ${crushFirstName} can go from one extreme to another, and 
                    although ${userFirstName} will try hard to stabilize it, it might be too difficult 
                    if ${crushFirstName} doesn’t have enough respect for their own emotions. When they 
                    find an emotional link, they can go very deep in search of true love, and unite on 
                    a level that is unreachable for other zodiac signs. This can make them speak without
                     words, understand each other’s thoughts with only one shared glance and be 
                     synchronized in their approach to their future together. If their emotions aren’t 
                     shared on a deepest possible level, or ${crushFirstName} refuses to deal with them, 
                     it could be too hard for ${userFirstName} to handle the self-destructive nature of 
                     ${crushFirstName}. Their connection needs to be sincere and pure, in order for both 
                     of them to be ready to give in to this intense emotional contact. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>27% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     are usually signs that aren’t attracted to each other at all. If attraction and love
                      are born between them, they will rarely have a damaging relationship for any one of
                       them, because their signs are ruled by the Moon and beneficent Jupiter. It is safe
                        to assume that they will be good for each other, for as long as their relationship
                         lasts, but it is rare for them to succeed in the long run if they don’t have 
                         strong support from positions in their personal horoscopes. As much as ${userFirstName}
                          can reach the depth of their ${crushFirstName}'s faith, ${crushFirstName} can widen 
                          ${userFirstName}'s horizons and make them much happier in their approach to the 
                          world. If they have feelings for each other, it would be a shame not to act on them
                           and miss the opportunity to peacefully grow.</p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>84% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     are usually bound to relive the love story of someone who lived before their time. 
                     This deeply seeded need to mend what is broken in our family tree is something we 
                     all carry within, but these Sun signs are predestined to handle karmic debts and 
                     residue emotions from their families. They will have to deal with problems first if 
                     they want to be free of the past, and only after they have repaid what needed to be 
                     repaid, will they be able to truly choose one another. In most cases this is a once 
                     in a lifetime love for both partners, and they will probably choose each other without
                      a doubt. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>31% Compatibility</h3><p>We could say that ${userFirstName}
                    and ${crushFirstName} are not your usual happy couple in most cases. Their relationship
                     can be too stressful for ${userFirstName} and the lack of intimacy will most probably
                      tear them apart. However, the link between them can actually be wonderful when 
                      found, and they could open up such interesting new perspectives for one another 
                      if this happens. They both want to learn new things and could travel far if a strong
                       base is made at home, so ${userFirstName} can remain peaceful. For this couple to
                        move in a positive direction, ${crushFirstName} needs to understand how unusual 
                        ${userFirstName} is, and try to experiment on being homey while having fun. 
                        ${userFirstName} will have to take over the main set of responsibilities to hold
                         on to the idea of their home as a base from which they can move wherever they 
                         want. In the end, ${userFirstName} might discover an unbelievable joy of freedom
                          and ${crushFirstName} might develop closeness. If these partners can be silent 
                          together, sipping on their morning coffee, this is in most cases the first step
                           to success. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>72% Compatibility</h3><p>As two Water signs, 
                    ${userFirstName} and ${crushFirstName} connect through emotions, usually as soon as 
                    they lay eyes on each other. This is one of the typical combinations of zodiac signs
                     for love at first sight. Their main challenge is hidden in the changeable nature of 
                     the sign of ${crushFirstName}, not because it is there, but because they might fear 
                     to show it. Their biggest problem lies in the fact that they give priority to 
                     different types of love in their life. If passion and sensual, sexual love isn’t 
                     there, ${crushFirstName} will rarely be satisfied with the love they get from their
                      family, and ${userFirstName} would find a life without a family nest very 
                      depressing. A fine balance needs to be made between excitement and stability, and 
                      they could be one of the most wonderful couples of the zodiac – ${userFirstName}
                       inspired and ${crushFirstName} with a feel of home. </p>`);
                }
            }
            else if(userZodiacSign==="leo")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>83% Compatibility</h3><p>The relationship of ${crushFirstName}
                     and ${userFirstName} is passionate and turbulent, but they don’t seem to mind an 
                     occasional fight and a sharp word. When they fall in love deeply, they are almost 
                     impossible to separate as they stubbornly hold on to the idea of their future 
                     together. Although they are not two of the most romantic believers in love, they 
                     are passionate in their beliefs and when they find love, they will fight for it 
                     until there is literally nothing left of their relationship. For as long as they 
                     love each other and stay faithful and true, they will be tied up in a relationship
                      they need to fight for every day. Their main objective is to find a way to enjoy 
                      the fight and have fun. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>40% Compatibility</h3><p>The relationship of ${crushFirstName}
                     and ${userFirstName} could be aggressively challenging if not for their warm natures
                      ruled by Venus and the Sun. Although they are both signs of fixed quality with 
                      entirely different natures, if they gather enough patience before they enter their
                       relationship, they have a chance to become your archetypal couple of a girl and 
                       a boy. When their masculine and feminine principles are in balance, they can use 
                       them to mend their sexual, intellectual and financial circumstances and really 
                       enjoy each other. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>82% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     can have so much fun that it could make the rest of the zodiac envious. They both 
                     consider their day best spent in laughter, and if they share friends, they could 
                     seem like a perfect couple. Their main challenge is the difference in their approach
                      to change and they both need to make room for small adjustments in their behavior 
                      if they want their relationship to last. ${userFirstName} will need to make room 
                      for more movement and understand what seems to be “flakiness” of the changeable ${crushFirstName}
                       , while ${crushFirstName} will have to understand that ${userFirstName} is in fact keeping them
                        together for however long they are meant to last. Their mutual respect can usually overcome 
                        any boundaries, and they should keep having fun and building their relationship on a solid 
                        foundation of childish joy. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>29% Compatibility</h3><p>Although the Moon reflects the light from 
                    the Sun, the sign of Cancer doesn’t really see ${userFirstName} as the source of all 
                    their joy. Leo is a sign that should spread joy and love with an active approach to 
                    each one of their relationships. How is it possible that ${crushFirstName} is immune?
                     Well probably because the Moon circles around the Earth, not the Sun. They are 
                     special, that’s for sure. Both of them are strong individuals, each on their own 
                     plane. Their lack of understanding and emotional touch can be explained through the
                      fact that both of them have a mission to spread love to the less fortunate signs of
                       the zodiac. Not everyone is born with an emotional flow like ${crushFirstName} and
                        a huge, warm heart like ${userFirstName}. If they kept all this love to 
                        themselves, some unfortunate souls would probably search for them aimlessly, and
                         the world would be a much sadder place. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>78% Compatibility</h3><p>Two Leo partners can do the 
                    impossible and this fact could keep them in a perfectly satisfying relationship for a
                     long time. Their main goal is to find true intimacy and understand each other’s 
                     inner emotional beings. Leo has a habit to exaggerate and make drama out of small,
                      irrelevant things, but this could be a good thing for their relationship because of
                       their social status and the ability to support each other’s theatrical needs. If 
                       they begin a battle for supremacy, it might be a good idea to set the territory 
                       that each of them is in charge for. If one of them is the best at an emotional
                        department, the other one can be the best in the sexual one. If they split their
                         rules this way, it will be much easier for both of them to function and think of
                          each other as worthy of the relationship. What might make a loving relationship
                           between them impossible is the lack of respect. If they catch this disease, it
                            might be best for them to part ways and search for different partners. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>35% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     form a constructive relationship that rarely serves their emotional natures. They 
                     both tend to be too rational and their mental strength will rarely be a good 
                     foundation for a fairytale love they secretly wish for. Both of them need someone 
                     perfect, someone made just for them, and if they just think for a second that they
                      don’t belong together, their search of perfection will prevail. It is rare for 
                      these partners to form a strong emotional or sexual bond, however well they might 
                      get along when it comes to work and communication. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>75% Compatibility</h3><p>If you want to sum up the 
                    relationship between ${userFirstName} and ${crushFirstName}, you have to understand 
                    that their bond involves the beautiful and challenging dignities of Saturn and the 
                    Sun. They have a lot to learn from each other, and the main goal of their relationship
                     is to reach the point of shared respect and responsibility in a perfect balance of 
                     power. It will sometimes be hard for them to overcome the need for competing, trying
                      to determine who is a better, smarter or a more capable person. Even if they don’t,
                       their relationship will be something to enjoy and show off in public. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>29% Compatibility</h3><p>When ${userFirstName} and ${crushFirstName}
                     start dating, they might not know exactly what they are to expect. This is in no way
                      an easy relationship, and both partners can be stubborn and stiff in their opinions,
                       life choices and ways they handle reality. If they want to remain in a loving 
                       relationship, they need to understand each other’s way of expressing emotions and
                        respect each other’s needs however different they might be from those they are 
                        used to. When they find a way to love each other without conditioning, they might
                         realize that they are in search for the same thing – Unity. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>90% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     are a very good fiery combination of signs, and when two people with these Sun signs
                      come together, they inevitably fall in love. This love is warm, passionate and 
                      inspiring, and they will have a chance to create, perform and have fun together 
                      for as long as they feel this way. However, ${crushFirstName} might lose interest 
                      in ${userFirstName} because they tend to get pushed away by their static, fixed 
                      nature. The only way they might get to keep their passion and emotions going, 
                      is if they manage to listen to their softer emotions and remain tender and sensitive
                       for one another. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>27% Compatibility</h3><p>If they meet in the right 
                    moment, ${userFirstName} and ${crushFirstName} might get along very well. The main 
                    problem in their relationship is the set of priorities they might not share, and the
                     passion or determination that both of them have. It is not an easy job, reconciling
                      Saturn with the Sun, but it brings great benefits when it is done. The structure
                       ${userFirstName} could get and the creativity they might build on together could 
                       lift them to exactly what they desired, however their relationship might end. 
                       They differ as much as the Earth and the Fire, but when they share a common goal,
                        they are unstoppable. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>89% Compatibility</h3><p>Signs of Leo and Aquarius 
                    combined represent the ultimate creativity, famous scientific discoveries, the first
                     man in an airplane and the first man on the Moon. Imagine what these partners could
                      do together if they let each other lead the way when the territory of their rule 
                      is in front of them. They both need to learn to let go of the image they have about
                       themselves and about each other, or they won’t get very far stuck in their 
                       unnecessary ego battle. Warm and cold, hearted and smart, nuclear gravitation 
                       and vacuum in space, it cannot be easy to mend their differences or form a stable,
                        loving relationship. The best thing they could do is find a cause they will 
                        support together. This would give them a focus on the outer world and allow them
                         to deepen the inner emotional world of their relationship while fighting 
                         outside of it. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>14% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     seem to be put on this Earth to spread entirely different kinds of love. The 
                     problem isn’t in their element or their quality, as much as it is in their 
                     connection through the fall of Neptune, the ruler of Pisces. If they get attracted 
                     to each other, they will be subjected to the risk of great damage to their beliefs,
                      their inner faith and usually succumb to mutual disrespect because of a simple lack
                       of understanding. The beauty of their relationship could be developed through the 
                       fairytale approach of ${crushFirstName}, if they build the heroic image of ${userFirstName}
                        to the point in which other differences between them fade. </p>`);
                }
            }
            else if(userZodiacSign==="virgo")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>42% Compatibility</h3><p>It’s a good thing that the 
                    relationship between an Aries and a Virgo is never boring. Although in most cases 
                    they are not really meant to last, it can still be a fun experience if none of them
                     takes their potential for a shared future too seriously. In case they take the best 
                     out of their relationship, giving it enough freedom and unpredictability, ${userFirstName}
                      would incorporate some of ${crushFirstName}'s energy, while ${crushFirstName} would 
                      allow ${userFirstName} to teach them how to organize their thoughts and communicate 
                      calmly. This way they might come to the point where their relationship could actually 
                      last, and the outcome depends on their ability to relax and have fun together. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>73% Compatibility</h3><p>In general, ${crushFirstName} is 
                    there to teach ${userFirstName} about love, tenderness and sexuality. ${userFirstName}
                     needs to be flexible enough to value ${crushFirstName} and give them the 
                     intellectual view on things they might idealize. Their relationship could be a match
                      made in heaven, only if they are not too scared of being hurt and too distrustful.
                       If they do give in to each other and fall madly in love, they could be the 
                       combination of a clear heart, represented by ${crushFirstName}, and a clear mind,
                        represented by ${userFirstName}. What more would they need than each other? </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>40% Compatibility</h3><p>The relationship of ${crushFirstName}
                     and ${userFirstName} can change as the wind, while both partners get lost and found
                      on a daily basis. Their mutual love for Mercury is what binds them and what tears 
                      them apart, because they both tend to overthink things instead of following their 
                      hearts. Both of them are mostly in their minds, each one in their own way, and need 
                      to respect each other to the point where no one’s intelligence is judged on a 
                      superficial level. If they do fall in love, they will become a unification of Air 
                      and Earth Mercury – heaven on Earth. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>77% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     can have a wonderful connection and are usually brought together by sexual 
                     understanding. The main problem of their relationship is in the possible conflict
                      between emotional ${crushFirstName} and reasonable ${userFirstName}. If they manage
                       to overcome this, accepting each other’s shortcomings and learning to incorporate
                        some rationality or some emotion into their lives, they could end up in an 
                        inspiring relationship that will last for a very long time. In a way, they 
                        complement each other as much as the heart complements the mind. If they share
                         a spark of love, it would be a shame to miss the opportunity for happiness just
                          because of someone’s irrational expectations or someone’s closed heart. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>35% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     form a constructive relationship that rarely serves their emotional natures. They 
                     both tend to be too rational and their mental strength will rarely be a good 
                     foundation for a fairytale love they secretly wish for. Both of them need someone 
                     perfect, someone made just for them, and if they just think for a second that they 
                     don’t belong together, their search of perfection will prevail. It is rare for these
                      partners to form a strong emotional or sexual bond, however well they might get 
                      along when it comes to work and communication. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>65% Compatibility</h3><p>When Virgo decides to be with
                     another Virgo, we can assume that their relationship is a product of one of two 
                     possible things, the first one being the need for stability and their rational 
                     decision to be with one another, and the second one being the unexplainable force of
                      love at first sight. Whatever the case, both partners are quite rational and belong
                       to the sign of mutable quality, so their emotions can change very fast. Because of
                        their shared tendency for sacrifice, the lack of faith they have in themselves, 
                        and the tendency to rationalize everything with value, they might easily end up 
                        in a relationship where none of the partners is actually in love, or satisfied. 
                        It is imperative for them to act according to their hearts if they want their 
                        love to last. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     can form a very satisfying intellectual bond, for as long as they respect each 
                     other’s feelings. In general, this relationship can sometimes work, and these 
                     partners can synchronize their pace and choose appropriate activities with enough 
                     patience and care. They could have a deep problem with emotional understanding 
                     though, and the thing they will find most difficult to reconcile is their fragile 
                     egos. Virgo, willing to please, will easily take over the responsibilities and 
                     decisions that ${crushFirstName} needs to take on. This will lead to a feeling of 
                     inferiority in ${crushFirstName} and the loss of respect toward ${userFirstName}. 
                     If this issue is left unresolved, their relationship might end because of disrespect
                      they were both unaware of in the beginning.</p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>70% Compatibility</h3><p>That changeable nature of 
                    ${userFirstName} will be settled down by the fixed quality of ${crushFirstName}, who
                     will keep their relationship exciting for a very long time. In general, there is a
                      problem that these partners share when it comes to Venus, and their relationship is
                       often a reflection of these troubles. This can lead to all sorts of emotional
                        blackmail, their tendency to control each other’s lives, and if not this, than 
                        constant criticism that makes them both feel guilty or simply sad. The best thing
                         they can do is decide that they will value each other and be thankful for each 
                         other in this relationship. If they develop a strong sense of gratitude, their 
                         relationship might be extremely deep, exciting and truly appreciated by both 
                         partners. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>32% Compatibility</h3><p>The relationship between a 
                    Virgo and a Sagittarius is not a usual happy ending emotional story. There are many 
                    challenges in their way, the biggest being their emotional lack of understanding and 
                    their possible lack of respect. Still, when they find a way to show emotions and 
                    share them in the same pace and in an understandable way, they could actually have a 
                    lot of fun together. Their communication is often exciting and they both have a lot to
                     say to each other, but their rationality may distract them from an actual search for
                      love. If they discover how well they complement each other, they might be able to 
                      stay together for a long time. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>77% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     belong to the element of Earth and follow each other’s pace perfectly. Even if 
                     everything between them seems too slow for some other zodiac signs, they build 
                     respect, trust and love, on the foundation of mutual analysis and detailed 
                     examination. The search for perfection can be ended in this relationship, for they 
                     give each other enough time, and listen to each other well enough to meet the
                      expectations that need to be met. Both of these partners can be stiff and lose 
                      sight of the importance of the emotional, mellow approach to life, and this 
                      relationship can make them rough and too strict. Still, in most cases, they will 
                      give each other enough time to grow out of this and grow old together. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>${userFirstName} can represent
                    everything that ${crushFirstName} runs from – practical, worried about health and 
                    earthly things, down to Earth, cleaning obsessed maniac. Imagine how incredibly 
                    irresponsible, chaotic and unrealistic ${crushFirstName} looks to them. Their 
                    strongest meeting point is in their rationality and communication, and this can be 
                    used to overcome many problems that their differences result in. Unfortunately, in 
                    most cases they will not have enough chemistry to start a relationship. If they take
                     each other seriously, they might create incredible things together, as their great 
                     minds merge. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>86% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     represent the axis of the exaltation and fall of both Venus and Mercury. This makes 
                     them partners with greatest challenges and the greatest potential for love in the 
                     entire zodiac. They need to find a fine balance of rationality and emotions, each 
                     one individually and together through their relationship. In many cases this is not 
                     a couple that will last very long, as their mutable quality makes them changeable 
                     enough to disregard the entire relationship quickly if they aren’t satisfied. They 
                     need to realize that perfection they seek might not be presented in the form they 
                     expect. If they stay together for long enough to understand the benefits of their 
                     contact, they might discover that the love between them is the only true love they 
                     could find in this lifetime. </p>`);
                }
            }
            else if(userZodiacSign==="libra")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>84% Compatibility</h3><p>However difficult it might 
                    be to reconcile these two natures, remember that this is a primal opposition that 
                    represents partners by signification. ${crushFirstName} and ${userFirstName} are the
                     couple of the zodiac, as much as any other opposing signs, for they are each other’s
                      seventh house, house of relationships. Even more so if we acknowledge the fact 
                      that Libra is the sign of relationships in general. Any problem they might have 
                      with each other is something to be worked on, because it shows what their 
                      personal problem with any relationship is. When they are madly attracted to each 
                      other and fall in love, there is almost nothing that could separate them, no 
                      matter the differences. Wouldn’t we all like to find the middle ground with our 
                       one? They need to work on their bond, that’s a fact, but their relationship is 
                       a promise of a perfect fit of two souls meant to be together. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>42% Compatibility</h3><p>Look out Libras, for Taurus 
                     is here to wake your inner fears and bring them all to surface! ${crushFirstName} 
                     should be careful, too, for their need to feel guilt could blossom with a ${userFirstName}
                     . This relationship is a lesson both of them will never forget, especially if they 
                     manage to build enough understanding and tenderness between them. The only way they could
                      ever be happy would be to embrace what they don’t want to deal with in their own inner 
                      worlds. If they do this, well you can imagine what a Venus complete would be like. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>78% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     are not exactly always a perfect couple, although their signs support each other. 
                     If ${userFirstName} has trouble being alone and doing things by themselves, this 
                     isn’t something ${crushFirstName} will easily understand. Due to their lack of 
                     personal boundaries, ${userFirstName} will often let ${crushFirstName} lead the way
                      until all of their energy is gone, they feel like they should only lie down and 
                      turn their brain off. If they want to work on their relationship and be happy, 
                      ${userFirstName} needs to respect ${crushFirstName} enough to let them be their 
                      teacher, lover and a friend. In return, ${crushFirstName} will have to take care 
                      of ${userFirstName}, respecting their limits and their need for togetherness. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>28% Compatibility</h3><p>Probably the biggest 
                    restriction in the relationship between ${crushFirstName} and ${userFirstName} is in
                     things they want from their partner. ${crushFirstName} wants someone responsible, 
                     to take them by the hand if needed and complement their emotional nature with 
                     practicality. ${userFirstName} wants someone who is full of life, energized, strong
                      and full of initiative to follow their ideas. They can really disappoint each 
                      other if any expectations are set wrongly at the beginning of their relationship.
                       The best way for them to build a love that is to last, is for both partners to 
                       hold on to their independence whatever happens. If they focus on love and worry
                        about earthly things each on their own, ${crushFirstName} could “compromise” on
                         heavenly love, as much as ${userFirstName} would like to have a family. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>75% Compatibility</h3><p>If you want to sum up the 
                    relationship between ${crushFirstName} and ${userFirstName}, you have to understand
                     that their bond involves the beautiful and challenging dignities of Saturn and the
                      Sun. They have a lot to learn from each other, and the main goal of their 
                      relationship is to reach the point of shared respect and responsibility in a 
                      perfect balance of power. It will sometimes be hard for them to overcome the need
                       for competing, trying to determine who is a better, smarter or a more capable 
                       person. Even if they don’t, their relationship will be something to enjoy and 
                       show off in public. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     can form a very satisfying intellectual bond, for as long as they respect each 
                     other’s feelings. In general, this relationship can sometimes work, and these 
                     partners can synchronize their pace and choose appropriate activities with enough 
                     patience and care. They could have a deep problem with emotional understanding 
                     though, and the thing they will find most difficult to reconcile is their fragile 
                     egos. Virgo, willing to please, will easily take over the responsibilities and 
                     decisions that ${userFirstName} needs to take on. This will lead to a feeling of 
                     inferiority in ${userFirstName} and the loss of respect toward ${crushFirstName}. 
                     If this issue is left unresolved, their relationship might end because of 
                     disrespect they were both unaware of in the beginning.</p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>48% Compatibility</h3><p>The sign of Libra is a sign 
                     of relationships and they often have a mission to teach others about relating to 
                     one another. When two Libras start dating, it might be difficult for them to find
                      a purpose of their contact, for they both seem to share a mission and a goal that
                       is connected to other people. If they find a meeting point, combining their 
                       activities and sticking to their shared values, they will have a tendency to 
                       become a perfectly balanced couple. The only thing missing in both of them, 
                       very hard to develop, is the sense of mutual respect with no passive judgment 
                       or expectations. Both of them are susceptible to this problem with their 
                       surroundings, and when together, these problems will easily multiply. If they 
                       let each other be who they are, they might become an inspiration for all of us, 
                       teaching us what a productive relationship really is. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>35% Compatibility</h3><p>The relationship of ${userFirstName}
                     and ${crushFirstName} is in no way easy and light. Both of these partners will have
                      to face their dark sides through this bond, and although this can lead to 
                      incredible and intense emotions that no one else can understand, it might lead them
                       both to a depressive hole they won’t easily get out of. The only way for this 
                       couple to last in a satisfying and gentle relationship, is for both partners to 
                       build a strong individual, independent life, or they will get sucked into the 
                       whirlpool of karmic emotions and obsessive, negative expectations. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>71% Compatibility</h3><p>The relationship of ${userFirstName}
                     and ${crushFirstName} is in most cases a beneficent bond that allows these partners
                      to develop their emotional, inner worlds and build their lives without negative 
                      influences. However, there is an archetypal battle between them, for Saturn exalts
                       in Libra and doesn’t really care for his son, Jupiter, the ruler of Sagittarius. 
                       This could easily lead to a struggle for supremacy and a battle to reach the 
                       ruling position among them. This comes as a continuation of ${userFirstName}'s bruised Sun 
                       and ${crushFirstName} will fit in perfectly with the need to give away every 
                       sense of pride out of some childish convictions. The only way for them to be 
                       happy together, is to respect each other fully and let each other do what they 
                       are meant to do. ${userFirstName} should stick to their relationship and love, 
                       ruled by Venus, while ${crushFirstName} should stick to their convictions and 
                       width, ruled by Jupiter, multiplying the love ${userFirstName} provides. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>34% Compatibility</h3><p>If we want to choose the best
                    word to describe the relationship between ${userFirstName} and ${crushFirstName}, we
                     would have to say – hard. This doesn’t mean they won’t enjoy the trouble of being 
                     together, or stay in a relationship for a very long time, but this is most certainly
                      not a bond that many other signs would engage in. Their biggest challenge is the 
                      lack of respect for emotional value that is usually initiated by ${crushFirstName},
                       but easily continued by ${userFirstName}. If they find a way to share, show 
                       and understand each other’s emotions, everything else will seem like a piece of 
                       cake. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>68% Compatibility</h3><p>There is a strong 
                    understanding between ${userFirstName} and ${crushFirstName} due to their shared 
                    element of Air. Still, it can be quite difficult for their troubled Suns to get 
                    along and they will often have difficulty adjusting to each other’s character and 
                    finding deep respect for one another. The best cure for any problem in their 
                    relationship is usually in time, but with ${crushFirstName}'s need for spontaneity 
                    they often won’t last long enough for time to mend what gets broken. Whatever their
                     story, they will have a lot of exciting things to live through together and if they
                      fall in love, it would be a shame for a couple such as this one, not to give 
                      their relationship a try however it might end. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>29% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     have a meeting point in the beauty of Venus. Still, they perceive it in two 
                     different ways and they will often not respect each other enough to find the 
                     beauty of Venus in one another. They could have real trouble adjusting to their ${crushFirstName}'s
                      speed, and the mutable quality of ${crushFirstName} often won’t help them open up 
                      any faster to build a relationship in the pace that would fit ${userFirstName}. 
                      Both ${userFirstName} and ${crushFirstName} can selflessly be interested in the 
                      satisfaction of their partner, and this should help them stay on the good side 
                      of their relationship whatever happens between them. If they move past the 
                      disrespect and the unrealistic expectations from each other’s personalities, 
                      they might find that they share real love. </p>`);
                }
            }
            else if(userZodiacSign==="scorpio")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>23% Compatibility</h3><p>Think of this combination 
                    of signs through the most aggressive image of Fire and Water element. Fire evaporates
                     Water, just like ${crushFirstName} shatters ${userFirstName}'s feelings. Water 
                     damps down Fire, just like ${userFirstName} wears ${crushFirstName} out. They seem 
                     to bring out the worst in each other and this is nobody’s fault, it is just hard 
                     to reconcile so much focused energy that moves in two different directions. Their 
                     relationship is like the process of nuclear fusion and often just too much to 
                     handle. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>89% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     are both signs of deepest physical pleasure, each in their own way. This must be 
                     the focus of their relationship, for they can’t seem to understand platonic and 
                     imaginative relationships when they get together. There is no such thing as a 
                     platonic experience of romance, when the whole point of romance is to get physical.
                      It is very possible that they will build their sexual life to the point where no 
                      other partner could ever satisfy their needs. This could lead to a possessive 
                      relationship with no way out, although they probably wouldn’t want to get out 
                      even if they could. The entire experience can be too dark for ${crushFirstName},
                       especially if their practical sense is challenged by ${userFirstName}'s character.
                        In case they're both independent and ready to blend with someone else, they 
                        could be the perfect connection between sexual and emotional, the one that we 
                        all wish for. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>26% Compatibility</h3><p>${crushFirstName} and 
                    ${userFirstName} will usually annoy each other senseless. None of them will lightly
                     understand their partner’s personality. To ${crushFirstName}, ${userFirstName} will 
                     seem too depressed and dark for no apparent reason, and for ${userFirstName}, this 
                     could be an experience with no purpose or depth. If they do fall crazy in love, 
                     they could connect through their mutual love of change and give each other the 
                     exact things they lack. ${crushFirstName} would get deep, emotional satisfaction 
                     they have never felt before and ${userFirstName} would finally get the chance to 
                     rest their troubled soul, and realize that not everything needs to be taken 
                     seriously. This is a relationship of great lessons and an enormous capacity for 
                     personal growth of both partners. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>79% Compatibility</h3><p>A relationship between 
                    ${crushFirstName} and ${userFirstName} can go from one extreme to another, and 
                    although ${crushFirstName} will try hard to stabilize it, it might be too difficult
                     if ${userFirstName} doesn’t have enough respect for their own emotions. When they 
                     find an emotional link, they can go very deep in search of true love, and unite on
                      a level that is unreachable for other zodiac signs. This can make them speak 
                      without words, understand each other’s thoughts with only one shared glance and be
                       synchronized in their approach to their future together. If their emotions aren’t
                        shared on a deepest possible level, or ${userFirstName} refuses to deal with 
                        them, it could be too hard for ${crushFirstName} to handle the self-destructive 
                        nature of ${userFirstName}. Their connection needs to be sincere and pure, 
                        in order for both of them to be ready to give in to this intense emotional 
                        contact. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>29% Compatibility</h3><p>When ${crushFirstName} and 
                    ${userFirstName} start dating, they might not know exactly what they are to expect. 
                    This is in no way an easy relationship, and both partners can be stubborn and stiff 
                    in their opinions, life choices and ways they handle reality. If they want to 
                    remain in a loving relationship, they need to understand each other’s way of 
                    expressing emotions and respect each other’s needs however different they might be 
                    from those they are used to. When they find a way to love each other without 
                    conditioning, they might realize that they are in search for the same thing – Unity. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>70% Compatibility</h3><p>That changeable nature of 
                    ${crushFirstName} will be settled down by the fixed quality of ${userFirstName}, who
                     will keep their relationship exciting for a very long time. In general, there is a
                      problem that these partners share when it comes to Venus, and their relationship 
                      is often a reflection of these troubles. This can lead to all sorts of emotional 
                      blackmail, their tendency to control each other’s lives, and if not this, than 
                      constant criticism that makes them both feel guilty or simply sad. The best thing 
                      they can do is decide that they will value each other and be thankful for each 
                      other in this relationship. If they develop a strong sense of gratitude, their 
                      relationship might be extremely deep, exciting and truly appreciated by both 
                      partners. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>35% Compatibility</h3><p>The relationship of ${crushFirstName}
                    and ${userFirstName} is in no way easy and light. Both of these partners will have 
                    to face their dark sides through this bond, and although this can lead to incredible
                     and intense emotions that no one else can understand, it might lead them both to a
                      depressive hole they won’t easily get out of. The only way for this couple to last
                       in a satisfying and gentle relationship, is for both partners to build a strong 
                       individual, independent life, or they will get sucked into the whirlpool of 
                       karmic emotions and obsessive, negative expectations. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>23% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     have this tendency to bring out the worst in each other. Even though they can share
                      the deepest understanding known to the entire zodiac, they can also get too dark
                       and depressed together, sinking into their pool of unresolved emotions. Their 
                       emotional understanding is something worth cherishing, if they are both open for
                        their own feelings and accept their own inner needs. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>67% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                     make a pretty great couple, for as long as they feel the first excitement at the 
                     start of their relationship. While they don’t know each other well and everything 
                     seems new and incredible, ${userFirstName} will see ${crushFirstName} as a ray of 
                     light that suddenly makes their life brighter and better, while ${crushFirstName} 
                     will see that there is so much to learn and enjoy the depth of ${userFirstName}, 
                     followed by emotional attachment. In time, there is a strong chance they will slowly
                      lose interest in one another, especially the mutable sign of ${crushFirstName}
                       for the fixed ${userFirstName}. Even though their relationship might end on bad 
                       terms, it would be a shame not to give in to it and let it fascinate and exalt 
                       both of them for however long. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>71% Compatibility</h3><p>The relationship of ${userFirstName}
                     and ${crushFirstName} can be inspiring for both partners to search for the truth, 
                     dig up under their family tree and deal with any unresolved karma and debt. They 
                     are both deep and don’t take things lightly, and this will help them build a strong
                      foundation for a relationship that can last for a long time. However, this exact
                       thing can easily make their relationship too dark and unemotional, pull them both
                        in a state of sadness and depression, or simply awaken their need to search for 
                        the light with someone else. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>Someone might say that this 
                    is a karmic relationship, that these partners were enemies in one of their previous
                     lives and that they could fight until one of them falls dead. This would be a bit 
                     extreme though. In most cases, ${userFirstName} will show their affection obsessively,
                      but this might actually feel good for ${crushFirstName}. The fact is they are both 
                      in a way outcasts and rebels. While ${userFirstName} represents all of our emotions
                       we don’t want to deal with, ${crushFirstName} represents the way of thinking most
                        of us are not ready for. It is best to look at them as announcers of change, 
                        for this is exactly what they will bring into each other’s lives. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>82% Compatibility</h3><p>When ${userFirstName} and 
                    ${crushFirstName} come together, this relationship will probably give them both new
                     insights on emotional possibilities. They will both easily get carried away into
                      an image of a fairytale love, and this image could keep them together for a very
                       long time, even if they are both not that happy. As two Water signs, they will 
                       rely on their emotional judgments and understand this about each other, creating
                        true intimacy. The challenge here is for the nature of ${userFirstName} not to 
                        obsess and suffocate ${crushFirstName}, and for ${crushFirstName} to stop 
                        running away from negative emotions. </p>`);
                }
            }
            else if(userZodiacSign==="sagittarius")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>87% Compatibility</h3><p>This is definitely a couple
                    with lots of potential. They might have to stand up to their environment and defend
                     their feelings from others, but this won’t shake them too much, for neither of them
                      thinks that much about the opinion of others anyway. If they manage to mend their
                       philosophical differences and respect each other’s different opinions, they could
                        become one of the warmest relationships in the zodiac. Their main relationship 
                        advice would be to always tell the truth to each other and not go crazy about 
                        their healthy differences. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>38% Compatibility</h3><p>With their inner beauty and 
                    the understanding they share in search of the truth to life, these two might seem 
                    like a perfect couple. However, every positive needs a negative to complete it, and 
                    when we really observe, we can notice that often ${crushFirstName} and ${userFirstName}
                     don’t even get attracted to each other. ${crushFirstName} needs earthly pleasures 
                     in their relationships and as a fixed, Earth sign it is the slowest of all signs. 
                     This is not exactly someone who can easily understand the fast, changeable and fiery
                      ${userFirstName}. The best possible scenario for their relationship would be for 
                      them to get to know each other very well and build a friendship without 
                      expectations, for years. In the end, this could result in deep understanding that 
                      would provide them both with enough patience to actually start a relationship that
                       has a future. If not, they can always hold on to beauty in the world. Imagine how
                        wonderful their world of creation could be if they joined their forces of good. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>92% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     make an incredible couple, probably being the most innocent one of all oppositions 
                     in the zodiac. They don’t often find each other right away, but at some point in 
                     life it is almost certain that a Gemini will find their Sagittarius and vice versa.
                      Their relationship has a strong intellectual connection, in which they will gradually
                       find deep emotions. There is no real prognosis how this will end though, because 
                       the emotions they feel could easily scare them away and their relationship could 
                       end only because of fear. If they decide to give in and find out what they could 
                       share, with ${crushFirstName}'s ideas and ${userFirstName}'s beliefs, the sky is 
                       the limit. Or is it beyond? </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>27% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     have signs that are usually not attracted to each other at all. If attraction and 
                     love are born between them, they will rarely have a damaging relationship for any 
                     one of them, because their signs are ruled by the Moon and beneficent Jupiter. It 
                     is safe to assume that they will be good for each other, for as long as their
                      relationship lasts, but it is rare for them to succeed in the long run if they 
                      don’t have strong support from positions in their personal horoscopes. As much as
                       ${crushFirstName} can reach the depth of ${userFirstName}'s faith, ${userFirstName}
                         can widen ${crushFirstName}'s horizons and make them much happier in their 
                         approach to the world. If they have feelings for each other, it would be a 
                         shame not to act on them and miss the opportunity to peacefully grow. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>90% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     are a very good fiery combination of signs, and when two people with these Sun signs
                      come together, they inevitably fall in love. This love is warm, passionate and 
                      inspiring, and they will have a chance to create, perform and have fun together 
                      for as long as they feel this way. However, ${userFirstName} might lose interest 
                      in ${crushFirstName} because they tend to get pushed away by their static, fixed 
                      nature. The only way they might get to keep their passion and emotions going, 
                      is if they manage to listen to their softer emotions and remain tender and 
                      sensitive for one another. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>32% Compatibility</h3><p>The relationship between 
                    ${crushFirstName} and ${userFirstName} is not a usual happy ending emotional story.
                     There are many challenges in their way, the biggest being their emotional lack of 
                     understanding and their possible lack of respect. Still, when they find a way to 
                     show emotions and share them in the same pace and in an understandable way, they 
                     could actually have a lot of fun together. Their communication is often exciting
                      and they both have a lot to say to each other, but their rationality may distract
                       them from an actual search for love. If they discover how well they complement 
                       each other, they might be able to stay together for a long time. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>71% Compatibility</h3><p>The relationship of 
                    ${crushFirstName} and ${userFirstName} is in most cases a beneficent bond that 
                    allows these partners to develop their emotional, inner worlds and build their lives
                     without negative influences. However, there is an archetypal battle between them, 
                     for Saturn exalts in Libra and doesn’t really care for his son, Jupiter, the ruler 
                     of Sagittarius. This could easily lead to a struggle for supremacy and a battle 
                     to reach the ruling position among them. This comes as a continuation of ${crushFirstName}'s
                      bruised Sun and ${userFirstName} will fit in perfectly with the need to give away every 
                      sense of pride out of some childish convictions. The only way for them to be happy together,
                       is to respect each other fully and let each other do what they are meant to do. ${crushFirstName}
                        should stick to their relationship and love, ruled by Venus, while ${userFirstName} should 
                        stick to their convictions and width, ruled by Jupiter, multiplying the love
                         ${crushFirstName} provides. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>67% Compatibility</h3><p>${crushFirstName} and 
                    ${userFirstName} make a pretty great couple, for as long as they feel the first 
                    excitement at the start of their relationship. While they don’t know each other 
                    well and everything seems new and incredible, ${crushFirstName} will see 
                    ${userFirstName} as a ray of light that suddenly makes their life brighter and 
                    better, while ${userFirstName} will see that there is so much to learn and enjoy 
                    the depth of ${crushFirstName}, followed by emotional attachment. In time, there 
                    is a strong chance they will slowly lose interest in one another, especially the 
                    mutable sign of ${userFirstName} for the fixed ${crushFirstName}. Even though their
                     relationship might end on bad terms, it would be a shame not to give in to it and 
                     let it fascinate and exalt both of them for however long. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>74% Compatibility</h3><p>One Sagittarius will easily 
                    fall in love with the other and their passionate relationship can change very fast.
                     As two representatives of a mutable sign, they will adapt easily, but change their
                      opinions and feelings toward each other with a similar ease. This doesn’t always 
                      bring promise of a long-term relationship, for there is no partner to be the glue
                       that holds them together. This doesn’t mean they won’t enjoy each other’s company,
                        find many things to share while they are together, and laugh as children while 
                        being on the same path. If they discover the true happiness of two Jupiter 
                        affected people combined, they might lose interest in everyone else and find 
                        that point of needed balance to keep them together in their travels for as 
                        long as they live. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>58% Compatibility</h3><p>This is not your ideal 
                    relationship, and it will rarely be the one they both choose to stay in for the rest
                     of their lives. Still, their understanding and acceptance of their differences is 
                     refreshing and fun for both partners, and they might have a good time while 
                     together, for however long. We cannot predict too much stability unless 
                     ${crushFirstName} decides to make it, but the smile on ${userFirstName}'s face and 
                     the ability they have to make their partner laugh, can be the pillar of their bond
                      for as long as they both need it. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>83% Compatibility</h3><p>A relationship between 
                    a Sagittarius and an Aquarius partner might seem like a same sex friendship to other
                     people and whatever they might think of this, this is the type of relationship both
                      of these partners might need. They will get together when it is time for both of
                       them to go through a change in their lives or leave a partner they feel 
                       restricted with. Their relationship is often a shiny beacon to everyone around 
                       them because it gives priority to the future and brings hope of a better time. 
                       The main challenge of ${userFirstName} and ${crushFirstName} lies in their 
                       rational natures. Although their minds will have a wonderful relationship, they
                        could have trouble reaching real intimacy and closeness. They both need to slow
                         down and ask themselves how they feel before they end up in a heartless bond 
                         they find solace in as they run away from the world. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>50% Compatibility</h3><p>This is a relationship of 
                    two kindred spirits that often doesn’t last very long. At first, it will be 
                    challenging for them to leave the platonic zone and start building a physical 
                    relationship. Once they get close to each other, their process of learning will 
                    begin and both partners will be fascinated by each other, thinking that their 
                    relationship could never end. They will easily idealize each other, think of their
                     relationship as the perfect love, but this infatuation won’t last very long 
                     because of their changeable natures. The fact is their relationship represents a 
                     moment in time when they have both deserved to smile. For as long as it lasts and 
                     they are happy, it will be cherished by both of them. </p>`);
                }
            }
            else if(userZodiacSign==="capricorn")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>This is not an easy 
                    relationship. None of the partners has any trace of lightness and blissful ignorance.
                     Therefore, their relationship might seem like a competition to ruin the relationship
                      in the best possible way. It is hard to say who will get out of it a winner, for 
                      they will both feel lousy most of the time and be relieved that they finally 
                      separated. If they stubbornly decide they love each other too much to let each 
                      other go, both would probably bang their heads against a wall for years to come. 
                      Their only chance of success is unconditional respect and the wideness of their 
                      views and expectations. They could truly complement each other, but only in a 
                      scenario where they would look for good in one another and highlight each other’s 
                      qualities. Unfortunately, the malefic nature of their rulers rarely allows for 
                      them to be this positive and acceptance oriented. If they got together they should 
                      think about the things they could learn from each other instead of looking for 
                      each other’s shortcomings, and always stay out of each other’s business. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>89% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     can form a relationship so deep that their creative power in the material realm 
                     could seem unreachable for other signs of the zodiac. With the ability to complement
                      each other in a gentle, slow way, they are the most boring couple on the outside, 
                      with most exciting inner activity that stays hidden from the rest of the world. 
                      If ${crushFirstName} motivates ${userFirstName}, and ${userFirstName} shows the 
                      way of accomplishment to ${crushFirstName}, they could work together, raise 
                      children and share a life with more fun than they are both used to, or simply 
                      form an unbreakable bond. When their deep emotions intertwine, they are bound to 
                      each other for eternity. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>15% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     partners are a very strange fit. Although they are both looking for things the 
                     other person has, they don’t seem to recognize them in each other. While ${crushFirstName}
                       needs someone to ground them and give them depth, when they look at ${userFirstName}
                       , they see someone old, unmovable and boring. ${userFirstName} needs joy and 
                       relaxation in their life, but ${crushFirstName} seems like a ball of uncontrollable,
                        superficial opinions heading nowhere. In truth, they could have a valuable 
                        experience being together, sharing their different lives day after day. 
                        They might even find out that they actually work well together and have the 
                        ability to reach any goal that they think of. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>84% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                      are usually bound to relive the love story of someone who lived before their time.
                       This deeply seeded need to mend what is broken in our family tree is something we
                        all carry within, but these Sun signs are predestined to handle karmic debts and
                         residue emotions from their families. They will have to deal with problems first
                          if they want to be free of the past, and only after they have repaid what 
                          needed to be repaid, will they be able to truly choose one another. In most 
                          cases this is a once in a lifetime love for both partners, and they will 
                          probably choose each other without a doubt. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>27% Compatibility</h3><p>If they meet in the right 
                    moment, ${crushFirstName} and ${userFirstName} might get along very well. The main 
                    problem in their relationship is the set of priorities they might not share, and the
                     passion or determination that both of them have. It is not an easy job, reconciling
                      Saturn with the Sun, but it brings great benefits when it is done. The structure 
                      ${crushFirstName} could get and the creativity they might build on together could
                       lift them to exactly what they desired, however their relationship might end. 
                       They differ as much as the Earth and the Fire, but when they share a common goal,
                        they are unstoppable. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>77% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     belong to the element of Earth and follow each other’s pace perfectly. Even if 
                     everything between them seems too slow for some other zodiac signs, they build 
                     respect, trust and love, on the foundation of mutual analysis and detailed 
                     examination. The search for perfection can be ended in this relationship, for they 
                     give each other enough time, and listen to each other well enough to meet the 
                     expectations that need to be met. Both of these partners can be stiff and lose 
                     sight of the importance of the emotional, mellow approach to life, and this 
                     relationship can make them rough and too strict. Still, in most cases, they will 
                     give each other enough time to grow out of this and grow old together. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>34% Compatibility</h3><p>If we want to choose the best
                    word to describe the relationship between ${crushFirstName} and ${userFirstName}, we
                     would have to say – hard. This doesn’t mean they won’t enjoy the trouble of being 
                     together, or stay in a relationship for a very long time, but this is most certainly
                      not a bond that many other signs would engage in. Their biggest challenge is the 
                      lack of respect for emotional value that is usually initiated by ${userFirstName},
                       but easily continued by ${crushFirstName}. If they find a way to share, show and 
                       understand each other’s emotions, everything else will seem like a piece of cake. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>71% Compatibility</h3><p>The relationship of ${crushFirstName}
                     and ${userFirstName} can be inspiring for both partners to search for the truth, 
                     dig up under their family tree and deal with any unresolved karma and debt. They 
                     are both deep and don’t take things lightly, and this will help them build a strong
                      foundation for a relationship that can last for a long time. However, this exact 
                      thing can easily make their relationship too dark and unemotional, pull them both
                       in a state of sadness and depression, or simply awaken their need to search for 
                       the light with someone else. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>58% Compatibility</h3><p>This is not your ideal 
                    relationship, and it will rarely be the one they both choose to stay in for the rest
                     of their lives. Still, their understanding and acceptance of their differences is 
                     refreshing and fun for both partners, and they might have a good time while 
                     together, for however long. We cannot predict too much stability unless 
                     ${userFirstName} decides to make it, but the smile on ${crushFirstName}'s face and 
                     the ability they have to make their partner laugh, can be the pillar of their bond
                      for as long as they both need it. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>62% Compatibility</h3><p>The relationship of two 
                    Capricorn partners isn’t really ideal. One minus might give a plus with the other 
                    minus, but these two turn to whatever is the opposite of functional as soon as 
                    another dominant partner (Capricorn) comes into their life. The game of superiority
                     they will have trouble containing can become the main stream of their relationship,
                      leading them toward an inevitable end. In order to stay together, they need to 
                      point their horns into someone or something else, and make room for emotion they
                       both need in order to find balance. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>37% Compatibility</h3><p>${userFirstName} and ${crushFirstName}
                    might not find each other that interesting to begin with. Both of these sings are 
                    traditionally ruled by Saturn, but their roles in the zodiac are entirely different.
                     Their most challenging point in a relationship is their emotional contact. If they
                      are to stay together, ${userFirstName} will have to separate from the ground, 
                      just a little, and ${crushFirstName} will have to come a bit closer to Earth. 
                      They need to meet in the middle for ${userFirstName} will be able to help ${crushFirstName}
                       materialize their ideas, and ${crushFirstName} to be able to help ${userFirstName} make 
                       the needed change in their life and turn to something new. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>92% Compatibility</h3><p>A relationship between ${userFirstName}
                    and ${crushFirstName} tells a story about possibilities of inspiration. If someone 
                    like ${userFirstName} can be pulled into a crazy love story, exciting and 
                    unpredictable, this must be done by ${crushFirstName}. In return, ${userFirstName} 
                    will offer ${crushFirstName} stability, peace and some rest from their usual 
                    emotional tornadoes. There is a fine way in which ${userFirstName} can help ${crushFirstName}
                     be more realistic and practical, while feeling more cheerful and optimistic themselves.  </p>`);
                }
            }
            else if(userZodiacSign==="aquarius")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>71% Compatibility</h3><p>This is a couple that lacks 
                    tenderness. They are not two brutes who let their relationship fade as soon as their
                     passion does, but the distant examining look of ${userFirstName} can take out the 
                     emotion out of it. ${crushFirstName} needs to be relaxed by their significant other,
                      so they can melt down and show their true, warm emotional nature. In this 
                      relationship, they would have a distant partner that basically supports their 
                      primal, instinctive nature. Although it is nice to think that the point of each 
                      relationship is for partners to accept each other as they are, in this case that 
                      would take away every chance for ${crushFirstName} to grow through togetherness 
                      and learn about their emotional nature. This is something they will never be 
                      satisfied with. Still, every relationship with an Aquarius can surprise us as much
                       as any individual Aquarius could. With them as a partner, there is always room 
                       for an enlightening scenario that leaves all things to free will. In case they 
                       decide to share their lives together, they should have a screaming room they 
                       could individually visit once in a while. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>22% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     are people from two different worlds. Still, there is a strange similarity and 
                     connection between their rulers and although very challenging, this is a 
                     relationship where both partners could fall in love with each other, over and over
                      again, every single day. They are ruled by Venus and Uranus, both planets rotating
                       in a direction opposite to the direction of other planets. They are two outcasts,
                        different and standing out together, they understand that East can be where West
                         is, and vice versa. They understand diversity, change of direction and the 
                         excitement of love. However, they will rarely get to the point to understand 
                         each other because of the ${crushFirstName}'s’s excessive need for peace and 
                         ${userFirstName}’s excessive need for excitement. What a strange pair these 
                         signs are. With such an obvious opportunity for electric love, they go around
                          it and search for something else. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>85% Compatibility</h3><p>${crushFirstName} needs a 
                     partner who doesn’t bore them or make them feel inhibited. When you look at things
                      this way, you could say that there is no better match for them than the fabulous 
                      ${userFirstName}. ${userFirstName} needs someone to understand their grandiose 
                      ideas and discuss each one with them, and also someone who doesn’t make them feel 
                      inhibited. Who could do this better than ${crushFirstName}? However, they could 
                      find themselves in a relationship that doesn’t have enough emotion and compassion,
                       and this is certain to surface as soon as the first disturbing thing happens in 
                       the life of one of these partners. They need to work on their emotional base and
                        their non-verbal understanding if they want their relationship to last. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>31% Compatibility</h3><p>We could say that ${crushFirstName}
                     and ${userFirstName} are not your usual happy couple in most cases. Their 
                     relationship can be too stressful for ${crushFirstName} and the lack of intimacy 
                     will most probably tear them apart. However, the link between them can actually 
                     be wonderful when found, and they could open up such interesting new perspectives 
                     for one another if this happens. They both want to learn new things and could 
                     travel far if a strong base is made at home, so Cancer can remain peaceful. For 
                     this couple to move in a positive direction, ${userFirstName} needs to understand 
                     how unusual ${crushFirstName} is, and try to experiment on being homey while having
                      fun. ${crushFirstName} will have to take over the main set of responsibilities to 
                      hold on to the idea of their home as a base from which they can move wherever they
                       want. In the end, ${crushFirstName} might discover an unbelievable joy of freedom
                        and ${userFirstName} might develop closeness. If these partners can be silent 
                        together, sipping on their morning coffee, this is in most cases the first step
                         to success. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>89% Compatibility</h3><p>Signs of ${crushFirstName} and
                     ${userFirstName} combined represent the ultimate creativity, famous scientific 
                     discoveries, the first man in an airplane and the first man on the Moon. Imagine 
                     what these partners could do together if they let each other lead the way when the 
                     territory of their rule is in front of them. They both need to learn to let go of 
                     the image they have about themselves and about each other, or they won’t get very 
                     far stuck in their unnecessary ego battle. Warm and cold, hearted and smart, 
                     nuclear gravitation and vacuum in space, it cannot be easy to mend their 
                     differences or form a stable, loving relationship. The best thing they could do 
                     is find a cause they will support together. This would give them a focus on the 
                     outer world and allow them to deepen the inner emotional world of their 
                     relationship while fighting outside of it. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>${crushFirstName} can represent 
                    everything that ${userFirstName} runs from – practical, worried about health and 
                    earthly things, down to Earth, cleaning obsessed maniac. Imagine how incredibly 
                    irresponsible, chaotic and unrealistic ${userFirstName} looks to them. Their 
                    strongest meeting point is in their rationality and communication, and this can be 
                    used to overcome many problems that their differences result in. Unfortunately, in 
                    most cases they will not have enough chemistry to start a relationship. If they take
                     each other seriously, they might create incredible things together, as their great 
                     minds merge. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>71% Compatibility</h3><p>There is a strong 
                    understanding between ${crushFirstName} and ${userFirstName} due to their shared 
                    element of Air. Still, it can be quite difficult for their troubled Suns to get 
                    along and they will often have difficulty adjusting to each other’s character and 
                    finding deep respect for one another. The best cure for any problem in their 
                    relationship is usually in time, but with ${userFirstName}'s need for spontaneity 
                    they often won’t last long enough for time to mend what gets broken. Whatever their
                     story, they will have a lot of exciting things to live through together and if they
                      fall in love, it would be a shame for a couple such as this one, not to give their
                       relationship a try however it might end. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>30% Compatibility</h3><p>Someone might say that this
                    is a karmic relationship, that these partners were enemies in one of their previous
                     lives and that they could fight until one of them falls dead. This would be a bit
                      extreme though. In most cases, ${crushFirstName} will show their affection 
                      obsessively, but this might actually feel good for ${userFirstName}. The fact is 
                      they are both in a way outcasts and rebels. While ${crushFirstName} represents all
                       of our emotions we don’t want to deal with, ${userFirstName} represents the way 
                       of thinking most of us are not ready for. It is best to look at them as 
                       announcers of change, for this is exactly what they will bring into each other’s
                        lives. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>83% Compatibility</h3><p>A relationship between 
                    a Sagittarius and an Aquarius partner might seem like a same sex friendship to other
                     people and whatever they might think of this, this is the type of relationship both
                      of these partners might need. They will get together when it is time for both of 
                      them to go through a change in their lives or leave a partner they feel restricted
                       with. Their relationship is often a shiny beacon to everyone around them because 
                       it gives priority to the future and brings hope of a better time. The main 
                       challenge of ${crushFirstName} and ${userFirstName} lies in their rational natures.
                        Although their minds will have a wonderful relationship, they could have trouble
                         reaching real intimacy and closeness. They both need to slow down and ask 
                         themselves how they feel before they end up in a heartless bond they find 
                         solace in as they run away from the world. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>37% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     might not find each other that interesting to begin with. Both of these sings are 
                     traditionally ruled by Saturn, but their roles in the zodiac are entirely different.
                      Their most challenging point in a relationship is their emotional contact. If they
                       are to stay together, ${crushFirstName} will have to separate from the ground, 
                       just a little, and ${userFirstName} will have to come a bit closer to Earth. 
                       They need to meet in the middle for ${crushFirstName} will be able to help 
                       ${userFirstName} materialize their ideas, and ${userFirstName} to be able to help
                        ${crushFirstName} make the needed change in their life and turn to something new. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>74% Compatibility</h3><p>It can be strange to 
                    imagine an Aquarius in love with another Aquarius. When you study Astrology, one of
                     the first things you will learn is that Aquarius is the sign of divorces, breakups
                      and setting free from regimes and relationships. As a sign that carries opposition
                       within, they are often not easy to be with for any sign of the zodiac, but this 
                       is exactly something both of them could understand in each other. If they truly 
                       respect each other, there is a great chance they will learn to understand other 
                       things in each other’s lives too. As crazy as it may sound, these two partners 
                       have a great chance of staying together because they will know each other better
                        than anyone else could. However, they are rarely that attracted to each other, 
                        and even when they are, it is very difficult for them to form a deep emotional 
                        bond. When they do, well… the sky isn’t the limit. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>41% Compatibility</h3><p>As all neighboring signs, 
                    ${userFirstName} and ${crushFirstName} don’t necessarily have the best understanding
                     of each other’s personalities. Once they find the emotional balance and the one, 
                     core truth to each other, they will have no problem keeping their fairytale alive, 
                     day after day. </p>`);
                }
            }
            else if(userZodiacSign==="pisces")
            {
                if(crushZodiacSign==="aries")
                {
                    $("#loveCalcOutput").html(`<h3>33% Compatibility</h3><p>This is a relationship 
                    disturbed mostly by the lack of trust and the ability of both parties to open up to
                     their partner. Aries is ruled by Mars, the planet that rules our first chakra, 
                     responsible for our ability to set good boundaries. Pisces is ruled by Neptune, in 
                     charge of our entire aura and our permeability for outside stimuli. Since they are
                      both responsible for our border with the outside world, it is hard to say which 
                      partner should loosen up and make it possible for them to come close. Their only 
                      chance of a happy ending is if ${crushFirstName} dives in and ${userFirstName} 
                      wakes up. </p>`);
                }
                else if(crushZodiacSign==="taurus")
                {
                    $("#loveCalcOutput").html(`<h3>93% Compatibility</h3><p>This is a relationship based
                    on love and full of it while it lasts. They both crave romance and beauty in their
                     lives, and will do anything that is needed to keep the beauty going between them.
                      ${crushFirstName} will give ${userFirstName} a chance to connect to the real world,
                       showing them how to ground their creativity, while ${userFirstName} will lift up
                        ${crushFirstName} and make them a bit softer and more flexible. They seem to be
                         on a mission of convincing them that true love exists. When their relationship 
                         is over, they will both know it instantly and very often a conversation about 
                         a breakup would be redundant. If they savor their trust and nurture the beauty
                          of love they share, their relationship can last and be as inspiring as a dream
                           coming true. </p>`);
                }
                else if(crushZodiacSign==="gemini")
                {
                    $("#loveCalcOutput").html(`<h3>10% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     are squaring signs that often don’t have that much in common. They are both usually
                      positive enough to have a superficial enjoyable relationship and go well together 
                      at large social gatherings. They could both forget to call each other when they 
                      agreed to, and they can both change their opinions in two seconds, but they simply
                       don’t share the same goals. As a strongly mental and a strongly emotional sign, 
                       their lack of understanding can be hurtful for Pisces and sometimes for both of 
                       them. If they do fall in love and start a romantic relationship, chances are they
                        will not last very long. However, there is a beauty in the creative side of this
                         relationship and if ${crushFirstName} decides to truly listen to ${userFirstName},
                          they could help them use their talent in a constructive way. In most situations
                           ${userFirstName} will just drain the energy out of ${crushFirstName}, 
                           especially if they end up in their fragile, needy mode that some other signs 
                           could understand much better than ${crushFirstName}. If they are to succeed
                            in their persistence to be together, they should work together and socialize
                             a lot. The most important thing for both of them in this relationship is to
                              reach for their emotional cores and give in to true intimacy, or they will
                               never manage to communicate. </p>`);
                }
                else if(crushZodiacSign==="cancer")
                {
                    $("#loveCalcOutput").html(`<h3>72% Compatibility</h3><p>As two Water signs, ${crushFirstName}
                     and ${userFirstName} connect through emotions, usually as soon as they lay eyes on
                      each other. This is one of the typical combinations of zodiac signs for love at 
                      first sight. Their main challenge is hidden in the changeable nature of the sign 
                      of Pisces, not because it is there, but because they might fear to show it. 
                      Their biggest problem lies in the fact that they give priority to different types
                       of love in their life. If passion and sensual, sexual love isn’t there, ${userFirstName}
                         will rarely be satisfied with the love they get from their family, and ${crushFirstName}
                           would find a life without a family nest very depressing. A fine balance needs to be 
                           made between excitement and stability, and they could be one of the most wonderful 
                           couples of the zodiac – ${crushFirstName} inspired and ${userFirstName} with a feel of home. </p>`);
                }
                else if(crushZodiacSign==="leo")
                {
                    $("#loveCalcOutput").html(`<h3>14% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     seem to be put on this Earth to spread entirely different kinds of love. The 
                     problem isn’t in their element or their quality, as much as it is in their 
                     connection through the fall of Neptune, the ruler of Pisces. If they get attracted
                      to each other, they will be subjected to the risk of great damage to their beliefs,
                       their inner faith and usually succumb to mutual disrespect because of a simple 
                       lack of understanding. The beauty of their relationship could be developed 
                       through the fairytale approach of ${userFirstName}, if they build the heroic 
                       image of ${crushFirstName} to the point in which other differences between them 
                       fade. </p>`);
                }
                else if(crushZodiacSign==="virgo")
                {
                    $("#loveCalcOutput").html(`<h3>86% Compatibility</h3><p>Virgo and Pisces represent the axis 
                     of the exaltation and fall of both Venus and Mercury. This makes them partners with
                      greatest challenges and the greatest potential for love in the entire zodiac. They
                       need to find a fine balance of rationality and emotions, each one individually 
                       and together through their relationship. In many cases this is not a couple 
                       that will last very long, as their mutable quality makes them changeable enough 
                       to disregard the entire relationship quickly if they aren’t satisfied. They need
                        to realize that perfection they seek might not be presented in the form they 
                        expect. If they stay together for long enough to understand the benefits of 
                        their contact, they might discover that the love between them is the only true
                         love they could find in this lifetime. </p>`);
                }
                else if(crushZodiacSign==="libra")
                {
                    $("#loveCalcOutput").html(`<h3>29% Compatibility</h3><p>${crushFirstName} and ${userFirstName}
                     have a meeting point in the beauty of Venus. Still, they perceive it in two 
                     different ways and they will often not respect each other enough to find the 
                     beauty of Venus in one another. They could have real trouble adjusting to their
                      partner’s speed, and the mutable quality of ${userFirstName} often won’t help 
                      them open up any faster to build a relationship in the pace that would fit ${crushFirstName}.
                        Both ${crushFirstName} and ${userFirstName} can selflessly be interested in the 
                        satisfaction of their partner, and this should help them stay on the good side of their
                         relationship whatever happens between them. If they move past the disrespect and the 
                         unrealistic expectations from each other’s personalities, they might find that they 
                         share real love. </p>`);
                }
                else if(crushZodiacSign==="scorpio")
                {
                    $("#loveCalcOutput").html(`<h3>82% Compatibility</h3><p>When ${crushFirstName} and ${userFirstName} 
                     come together, this relationship will probably give them both new insights on 
                     emotional possibilities. They will both easily get carried away into an image of 
                     a fairytale love, and this image could keep them together for a very long time,
                      even if they are both not that happy. As two Water signs, they will rely on their
                       emotional judgments and understand this about each other, creating true intimacy.
                        The challenge here is for the nature of ${crushFirstName} not to obsess and 
                        suffocate their changeable partner, and for ${userFirstName} to stop running 
                        away from negative emotions. </p>`);
                }
                else if(crushZodiacSign==="sagittarius")
                {
                    $("#loveCalcOutput").html(`<h3>50% Compatibility</h3><p>This is a relationship of 
                    two kindred spirits that often doesn’t last very long. At first, it will be 
                    challenging for them to leave the platonic zone and start building a physical 
                    relationship. Once they get close to each other, their process of learning will
                     begin and both partners will be fascinated by each other, thinking that their 
                     relationship could never end. They will easily idealize each other, think of 
                     their relationship as the perfect love, but this infatuation won’t last very long 
                     because of their changeable natures. The fact is their relationship represents a 
                     moment in time when they have both deserved to smile. For as long as it lasts and
                      they are happy, it will be cherished by both of them. </p>`);
                }
                else if(crushZodiacSign==="capricorn")
                {
                    $("#loveCalcOutput").html(`<h3>92% Compatibility</h3><p>A relationship between 
                    ${crushFirstName} and ${userFirstName} tells a story about possibilities of 
                    inspiration. If someone like ${crushFirstName} can be pulled into a crazy love 
                    story, exciting and unpredictable, this must be done by ${userFirstName}. In return,
                     ${crushFirstName} will offer ${userFirstName} stability, peace and some rest from
                      their usual emotional tornadoes. There is a fine way in which ${crushFirstName} 
                      can help ${userFirstName} be more realistic and practical, while feeling more 
                      cheerful and optimistic themselves. </p>`);
                }
                else if(crushZodiacSign==="aquarius")
                {
                    $("#loveCalcOutput").html(`<h3>41% Compatibility</h3><p>As all neighboring signs, 
                    Aquarius and Pisces don’t necessarily have the best understanding of each other’s 
                    personalities. Once they find the emotional balance and the one, core truth to each
                     other, they will have no problem keeping their fairytale alive, day after day. </p>`);
                }
                else if(crushZodiacSign==="pisces")
                {
                    $("#loveCalcOutput").html(`<h3>67% Compatibility</h3><p>Two Pisces partners will 
                    have trouble trusting each other. Their changeable natures will shift their 
                    relationship all the time, and only if they share enough love, they might be 
                    able to handle the changes and stay together. In most cases, they will not fall 
                    in love, because of their inner need to inspire their partner and help them grow.
                     They don’t need this from each other, because they already inspire themselves. 
                     When romantic love happens between them, they might have an actual fairytale story,
                      the one with unicorns, rainbows, and an everlasting love. </p>`);
                }
            }
        }
        //create variable to hold the random number
        var randomNumber;

        //create a function to get random number
        function getRandomNumber()
        {
            //pick random number 0-19
            return Math.floor(Math.random() * 20);
        }

        function getBoyName(event)
        {
            event.preventDefault();

            //create array to store all of the baby names
            var babyBoyNames = ["Sebastian", "Jack", "Owen", "Samuel", "Matthew", "Joseph", "Levi",
                "Mateo", "David", "John", "Wyatt", "Carter", "Julian", "Luke", "Grayson", "Isaac",
                "Jayden", "Layne", "Roy", "Holden"];

            //call the function and store it in variable created earlier
            randomNumber = getRandomNumber();

            //get the random name and output it in the designated spot in the html
            var returnBoyName = babyBoyNames[randomNumber];
            $("#randomBoyName").text(returnBoyName);
        }

        function getGirlName(event)
        {
            event.preventDefault();

            //store the baby girl names
            var babyGirlNames = ["Aria","Scarlett","Penelope","Layla","Chloe","Madison","Grace","Nora",
            "Zoey","Hazel","Ellie","Violet","Lillian","Zoe","Emilia","Everly","Aubrey","Faith","Brooklyn","Madelyn"];

            //get random number from funciton
            randomNumber = getRandomNumber();

            //get random name using random number as an index and output it
            var returnGirlName = babyGirlNames[randomNumber];
            $("#randomGirlName").text(returnGirlName);

        }






    }
);
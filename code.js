$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        //when an image is clicked run the function zodiacInfo
        $("img").click(zodiacInfo);


        //any other functions (calculate trip, roll die, etc.)
        function zodiacInfo()
        {
            //get the sign that was clicked
            var imageClicked = $(this);
            var imageSign = imageClicked.attr("value");


            //show info

            if(imageSign === "aries")
            {
                //hide all images and labels except for the one that was clicked
                $("#taurus").hide();
                $("#gemini").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();

                //ouput summary for that zodiac sign
                $("#output").html(`<h2>Aries (March 21-April 20)</h2><br>Strengths: Courageous, determined, confident, enthusiastic, optimistic,
                 honest, passionate <br> Weaknesses: Impatient, moody, short-tempered, impulsive, 
                 aggressive <br> Aries likes: Comfortable clothes, taking on leadership roles, 
                 physical challenges, individual sports <br> Aries dislikes: Inactivity, delays, 
                 work that does not use one's talents <br> Most Compatible Signs: Gemini, Leo, 
                 Sagittarius, and Aquarius <br> Least Compatible Signs: Cancer and Capricorn <br> 
                 <p>Aries are very active and organized making them unstoppable when it comes to completing
                  tasks. When they are faced with a challenge, they may get impatient, and aggressive 
                  and may even misplace anger towards other people. However, Aries are naturally brave 
                  and aren’t afraid of taking risks. When they fall in love, they will express their 
                  feelings to their love without even giving it a second thought. They shower their loved
                   one with affection and maybe even too much of it without even realizing if they are 
                   getting enough in return. Aries can be very passionate, energetic, and always one down
                    for an adventure. When it comes to friends, they will have no problem, seeing how they
                     thrive in communication, directness, and honesty. Some of their connections they make
                      throughout their life may be cut short due to dishonesty or unclear intentions. 
                      However, if the friendship has the same amount of direct honesty, energy and braveness
                       It may be due for a long-term friendship. Aries tends to be independent and ambitious
                        and they often figure out what their path is in life at a young age. Due to this 
                        they may start separating from their family early on and if they weren’t given 
                        enough love and patience from their parents, their intimate bonds later in life may
                         suffer. When it comes to the future and their career it is quite bright due to 
                         their ambition and creativity. Aries is a natural born leader and would prefer to
                          be in charge rather than take orders. They may enjoy a chosen path as a manager, 
                          policemen, soldier, or any other career that has great responsibility and 
                          authority. They live in the present and aren’t focused on the future which can 
                          make them irrational and hasty when it comes to spending money on a good time. 
                          However, with their career they will always find a way to compensate financially 
                          for the money spent.</p> `)
            }
            else if(imageSign === "taurus")
            {
                $("#aries").hide();
                $("#gemini").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Taurus (April 21-May 20) </h2><br>Strengths: Reliable, patient, practical, devoted, responsible, stable<br> 
                Weaknesses: Stubborn, possessive, uncompromising <br>
                Taurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands 
                <br>Taurus dislikes: Sudden changes, complications, insecurity of any kind, synthetic fabrics 
                <br>Most Compatible: Cancer, Virgo, Capricorn and Pisces 
                <br>Least Compatible: Leo and Aquarius <br>
                <p>Taurus is one with love and beauty. They’re sensual and tactile, considering touch and 
                taste the most important of all senses. This is one of the most reliable signs of the zodiac
                 due to their stable and conservative personality. They stick to their choices and have 
                 the ability to see things from a grounded, practical and realistic perspective. They are 
                 not a fan of sudden changes or criticism and tend to be dependable on other people at 
                 times. When a certain amount of intimacy is built with a loved one, they may become a bit
                  needy and need to make sure they keep their emotions in check. They will rarely choose
                   a partner who does not fulfill their basic expectations and will often show and receive
                    attention and love through gifts and material things. Taurus is always loyal and
                     willing to lend a hand even though at times they may have a guard up to the outer
                      world before they build the needed trust. Family and home is very important to them.
                       They love spending time with people who love them and always enjoy family routines
                        and will be present in all events and gatherings. They may enjoy hosting house
                         parties for family and friends and don’t mind the work and stress they have to go
                          through as long as everyone is having fun and happy. As an employee, Taurus is
                           hardworking and patient. They use their job to fulfil the pleasure of material
                            rewards which gives them a sense of value and achievement.</p> `)
            }
            else if(imageSign === "gemini")
            {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Gemini (May 21-June 20) </h2><br>Strengths: Gentle, affectionate, curious, adaptable, ability to 
                learn quickly and exchange ideas <br> Weaknesses: Nervous, inconsistent, indecisive <br>
                Gemini likes: Music, books, magazines, chats with nearly anyone, short trips around the town <br>
                Gemini dislikes: Being alone, being confined, repetition and routine <br>
                Most Compatible: Aries, Leo, Libra and Aquarius <br>
                Least Compatible: Virgo and Pisces <br>
                <p>Gemini are believed to have two different sides to them in one person. They can be 
                sociable, communicative, and always ready for a good time. However, with a quick change
                 they may get serious, thoughtful, and even restless. Gemini often feel like something 
                 is missing to them and they fill this void with always starting new friendships and 
                 getting to know mentors or colleagues. When it comes to relationships the right person 
                 is one that has excitement, variety, passion, and good communication. However, Gemini 
                 may change up on those around them and leave those who love them behind. If their partner
                  can follow their pace and is prepared to grow the love in the relationship throughout 
                  time, then they are destined for greatness. Gemini love spending time with friends and 
                  family and always loves to chat. Family Is very important to them and unlike their 
                  intimate relationships, they have a calm bond with those they live with. They will 
                  always be able to fulfill the responsibilities their family has put upon them. Gemini 
                  have a constant need of intellectual stimulation therefore the best job for them is one
                   that would challenge their brain. Their open mind can make them a great artist or writer.
                    They are skillful, inventive, and can be very smart. The best careers they can choose
                     are those of traders, inventors, writers, preachers and lawyers. Any career that gives
                      them the opportunity to communicate freely while keeping them busy at all times, is
                       an excellent choice.</p> `)
            }
            else if(imageSign === "cancer") {
                $("#aries").hide();
                $("#taurus").hide();
                $("#gemini").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Cancer (June 21-July 22) </h2><br>Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic,
                 persuasive <br> Weaknesses: Moody, pessimistic, suspicious, manipulative, insecure <br>
                Cancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, 
                a good meal with friends <br> Cancer dislikes: Strangers, any criticism of Mom, 
                revealing of personal life <br> Most Compatible: Taurus, Virgo, Scorpio and Pisces <br>
                Least Compatible: Aries and Libra <br>
                <p>Cancer can be quite difficult to create a connection with because of their sentimental,
                 emotional, and sensitive personality. They are very sympathetic and can get quite attached
                  to the people they keep close. As children, they haven’t built up their coping and 
                  defensive mechanisms for the outer world and must be approached with care and 
                  understanding. Without giving them enough patience or love, they may experience mood 
                  swings later on in life or even become selfish, manipulative and have self-pity. However,
                   they are quick to help others but just as quick to avoid conflict. When it comes to 
                   romantic partners, they choose a person that is able to understand them through 
                   non-verbal cues, silent contact, or a shared daily routine. Their affection towards 
                   their partner won’t last long if their partner is flaky or unreliable. When it comes to 
                   friendships, they will gladly connect with new people but can be very sensitive of people
                    that are not a part of their “social circle”. Cancer is the sign of family and these 
                    individuals care about family bonds more than any other sign of the zodiac. Since they
                     are quite sentimental, they tend to preserve family memories more than most. When a 
                     job needs to get done you can always count on them to get it done and finish it 
                     successfully. They work better alone than when surrounded by people. They will have 
                     great careers as nurses, housekeepers, gardeners, politicians, and decorators. 
                     Something that is great importance to them besides family is security and money. 
                     They must always feel financially secure and that is the real reason why they are
                      so motivated and hardworking in their career.</p>  `)
            }
            else if(imageSign === "leo") {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#gemini").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Leo (July 23-August 22) </h2><br>Strengths: Creative, passionate, generous, warm-hearted, cheerful, 
                humorous <br> Weaknesses: Arrogant, stubborn, self-centered, lazy, inflexible <br>
                Leo likes: Theater, taking holidays, being admired, expensive things, bright colors, 
                fun with friends <br> Leo dislikes: Being ignored, facing difficult reality, not being 
                treated like a king or queen <br> Most Compatible: Gemini, Aries, and Sagittarius<br>
                Least Compatible: Taurus and Scorpio <br>
                <p>Leo tends to be a dramatic, creative, self-confident, attractive, dominant, and 
                extremely difficult to resist kind. They are able to achieve anything they commit to and 
                put their mind to. Leo often has many friends because of their generous and loyal 
                personality. Their healthy sense of humor, warm-heart, and good time seeking attitude 
                makes making friends even easier. They are able to use their mind to solve any problem and
                 will step up and take initiative to resolving complicated situations. Leo are in search 
                 for self-awareness and in constant growth of ego. However, this search of self-identity 
                 can cause them to unconsciously forget about the needs of those around them. When in love,
                  they are fun, loyal, respectful, and very generous towards their loved one. They will 
                  take the role of a leader in any relationship. Leo were born with a need to help others 
                  and they will do it even if it takes time and energy out of their own life. They are 
                  strong and reliable and has the ability to appeal to almost everyone. They enjoy hosting
                   celebrations and different events with people that bring out the best in them. Although,
                    family isn’t the first thing a Leo thinks about when they wake up seeing how they are 
                    very independent and focused on themselves. Still, a Leo will do anything to protect 
                    their loved ones. They are ambitious, creative and optimistic and once they dedicate 
                    to their work, they will do everything just right. The best possible situation they can
                     find themselves in is to be their own bosses or manage others with as little control 
                     from their superiors as possible. Jobs that allow open expression of artistic talent, 
                     such as acting and entertainment, are ideal for a Leo. Management, education and 
                     politics are also a good fit, as well as anything that puts them in a leadership 
                     position which naturally suits them. Leos love to be surrounded by modern and trendy 
                     things, and although money comes easy to them, they spend it less responsibly than 
                     some other signs of the zodiac. </p>`)
            }
            else if(imageSign === "virgo")
            {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#gemini").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Virgo (August 23-September 22) </h2><br>Strengths: Loyal, analytical, kind, hardworking, practical <br> Weaknesses:
                Shyness, worry, overly critical of self and others, all work and no play <br> Virgo likes: 
                Animals, healthy food, books, nature, cleanliness <br> Virgo dislikes: Rudeness, asking 
                for help, taking center stage <br> Most Compatible: Taurus, Cancer, Scorpio and Capricorn<br> 
                Least Compatible: Gemini and Sagittarius<br>
                <p>Virgos are always paying attention to the smallest details and their deep sense of 
                humanity makes them one of the most careful signs of the zodiac. This is a sign often 
                misunderstood, not because they lack the ability to express, but because they won’t accept
                 their feelings as valid, true, or even relevant when opposed to reason. When it comes to 
                 relationships, their partner needs to give them all the love they need to start feeling 
                 safe and open up enough to show their soft, vulnerable heart. A Virgo will prefer a stable
                  relationship than having fun, casual lovers. Virgos are excellent advisors, always 
                  knowing how to solve a problem. This can make them helpful and extremely useful to have
                   around, but also brings out their need to search the problem in everything and everyone
                    around them. Virgos are very dedicated to their family and attentive to elderly and 
                    sick people. They understand tradition and the importance of responsibility, proud of 
                    their upbringing and everything that made their mind be as dominant as it is. Virgos 
                    are practical, analytical and hard-working, always knowing exactly where to look for 
                    the core of any problem. They may shine at jobs that require good organization, dealing
                     with paperwork, problem solving and working with their minds and their hands. When 
                     they focus, perfection is to be expected from their work, for no other sign has such 
                     an eye for details as Virgo. </p>`)
            }
            else if(imageSign === "libra")
            {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#gemini").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Libra (September 23-October 22) </h2><br>Strengths: Cooperative, diplomatic, gracious, fair-minded, social <br>
                Weaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity <br>
                Libra likes: Harmony, gentleness, sharing with others, the outdoors <br> Libra dislikes: 
                Violence, injustice, loudmouths, conformity <br> Most Compatible: Gemini, Leo, 
                Sagittarius and Aquarius <br> Least Compatible: Cancer and Capricorn <br>
                <p>People born under the sign of Libra are peaceful, fair, and they hate being alone; 
                partnership is very important for them. These individuals are fascinated by balance and 
                symmetry, they are in a constant chase for justice and equality. This is someone ready 
                to do nearly anything to avoid conflict, keeping the peace whenever possible. these people
                 great lovers but also fond of expensive, material things. Their lives need to be enriched
                  by music, art, and beautiful places they get a chance to visit. Once they start a 
                  romantic relationship, maintaining peace and harmony becomes the most important thing
                   and their primary goal. Their charming personality and their dedication to each 
                   relationship makes their compatibility with others satisfying. each Libra is in search
                    of a partner who has the ability to set clear boundaries, as if expecting to be 
                    protected by them but without their pride being endangered in the process. They search
                     for deep, meaningful relationship and although they don’t have trouble relating 
                     with people they aren’t really close to, the only true satisfaction in their love 
                     life comes from complete surrender of body and soul. In friendships, Libras sometimes
                      raise their expectation bars too high, and choose friendships that make them feel 
                      superior to the person standing in front of them. Their nature makes them indecisive
                       which is why they might show a lack of. Still, this won’t make them any less invested
                        in their relationships when someone else takes the baton and shows interest in 
                        them. Tactful and calm, they can communicate through any problem if they want to, 
                        and will often help others understand the other side of their personal conflicts 
                        and trouble with other people. In constant search for harmony these individuals 
                        have a tendency to agree with their parents and siblings only to avoid conflict, 
                        being the one to pull back when a challenge comes their way. For each Libra, the 
                        key to a happy life is in a fine balance, meaning they will not commit to work 
                        without setting apart enough time for their private life and their loved ones, 
                        and if they do, they will feel like they need to set free from it. They can be 
                        loved leaders even though they sometimes lack the initiative needed to organize 
                        people who work for them, and will work hard to deserve privileges that come their
                         way. In search for truth and justice, they are good lawyers and judges. As soon 
                         as they start questioning their financial choices, chances are they won’t even 
                         spend any money at all, simply because it was hard to make a decision of any 
                         kind. They balance between saving and spending pretty well and even though they 
                         enjoy fashion and fine clothes, they rarely let their desires for spending get 
                         the best of them. </p>`)
            }
            else if(imageSign === "scorpio")
            {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#gemini").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Scorpio (October 23-November 22) </h2><br>Strengths: Resourceful, brave, passionate, stubborn, a true friend <br>
                Weaknesses: Distrusting, jealous, secretive, violent<br> Scorpio likes: Truth, facts, 
                being right, longtime friends, teasing, a grand passion <br> Scorpio dislikes: Dishonesty,
                 revealing secrets, passive people <br> Most Compatible: Pisces, Cancer, Capricorn and 
                 Virgo <br> Least Compatible: Leo and Aquarius <br>
                 <p>Scorpios are passionate and assertive people. They are determined and decisive and 
                 will research until they find out the truth. Scorpio is a great leader, always aware of 
                 the situation. They are known by their calm and cool behavior, and by their mysterious 
                 appearance. Scorpios hate dishonesty and they can be very jealous and suspicious, so they
                  need to learn how to adapt more easily to different human behaviors. Scorpios are brave 
                  and therefore they have a lot of friends. They’re extremely passionate and intimacy is 
                  very important to them. They want intelligent and honest partners. Once Scorpios fall in
                   love, they are very dedicated and faithful. However, they enter into a relationship 
                   very carefully, because sometimes they need a lot of time to build trust and respect 
                   for partners. They are quick-witted and intelligent, so they would feel better to be 
                   in the company of witty and fun loving people. They are full of surprises and will give
                    you everything you need, but if you let them down once, there's no return. Scorpios 
                    are very emotional, when they are in pain, it is simply impossible to make them feel 
                    better. They are very dedicated and they take good care of their family. Scorpios are
                     fantastic in management, solving and creating. When a Scorpio sets a goal, there is 
                     no giving up. Scorpios are great in solving tasks that require a scientific and 
                     thorough approach. Their ability to focus with determination makes them very capable 
                     managers. They never mix business with friendship. Jobs such as a scientist, 
                     physician, researcher, sailor, detective, cop, business manager and psychologist are
                      appropriate for this powerful zodiac sign. Money means security and a sense of 
                      control for them, which means that they are good at saving money and make decisions
                       carefully before investing in something. </p>`)
            }
            else if(imageSign === "sagittarius") {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#gemini").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Sagittarius (November 23-December 21) </h2><br>Strengths: Generous, idealistic, great sense of humor<br> Weaknesses: 
                Promises more than can deliver, very impatient, will say anything no matter how 
                undiplomatic <br> Sagittarius likes: Freedom, travel, philosophy, being outdoors <br>
                Sagittarius dislikes: Clingy people, being constrained, off-the-wall theories, details<br> 
                Most Compatible: Aries, Leo, Libra and Aquarius<br> Least Compatible: Virgo and Pisces<br>
                <p>Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac
                 signs. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. They 
                 are able to transform their thoughts into concrete actions and their enthusiasm has no 
                 bounds. Therefore, people born under the Sagittarius sign possess a great sense of humor 
                 and they will do anything to achieve their goals. Sagittarius are very playful and 
                 humorous, which means that they will enjoy having fun with their partners. Partners who 
                 are equally open, will certainly suit the passionate, expressive Sagittarius who is 
                 willing to try almost anything. When they are truly in love, they’re very loyal, faithful
                  and dedicated. They want their partners to be intellectual, sensitive and expressive. 
                  Sagittarius is very fun and always surrounded by friends. They are generous and not one 
                  of those who lecture. When it comes to family, Sagittarius is dedicated and willing to 
                  do almost anything. When Sagittarius visualize something in their minds, they will do 
                  everything they can to achieve this. They always know what to say in a given situation 
                  and they are great salespeople. Jobs such as a travel agent, photographer, researcher, 
                  artist, ambassador, importer and exporter suit this free-spirited person. The fun-loving
                   Sagittarius enjoys making and spending money. Considered to be the happiest sign of the
                    zodiac, Sagittarius does not care much where it will earn said money. They take risks 
                    and are very optimistic. They believe that the universe will provide everything they 
                    need. </p>`)
            }
            else if(imageSign === "capricorn")
            {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#gemini").hide();
                $("#aquarius").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Capricorn (December 22-January 19) </h2><br>Strengths: Responsible, disciplined, self-control, good managers <br>
                Weaknesses: Know-it-all, unforgiving, condescending, expecting the worst <br>
                Capricorn likes: Family, tradition, music, understated status, quality craftsmanship<br> 
                Capricorn dislikes: Almost everything at some point <br> Most Compatible: Taurus, Virgo,
                 Scorpio and Pisces <br> Least Compatible: Aries and Libra <br>
                 <p>Capricorn is a sign that represents time and responsibility. They are masters of 
                 self-control and have the ability to lead the way, make solid and realistic plans, and 
                 manage many people who work for them at any time. They will learn from their mistakes and
                  get to the top based solely on their experience and expertise. They have a hard time 
                  accepting differences of other people that are too far from their character, and out of
                   fear might try to impose their traditional values aggressively. Its influence makes 
                   these people practical and responsible, but also cold, distant and unforgiving, prone 
                   to the feeling of guilt and turned to the past. They need to learn to forgive in order 
                   to make their own life lighter and more positive. It is not easy to win over the 
                   attention and the heart of a Capricorn, but once their walls break and their heart melts
                    they stay committed for a lifetime. Shown sensitivity comes through acts rather than 
                    words, and years are often needed for them to open enough to chat about their actual 
                    emotional problems. Turned to their personal goals, whatever they might be, Capricorns
                     can lack compassion and emotion when relating to their loved ones. They aren’t 
                     willing to compromise much, and seems to have the need to create a problem only to 
                     resolve it or feel bad that it was never resolved before. Capricorn is intelligent, 
                     stable and reliable, and this makes its representatives loyal and extremely good 
                     friends. They need to be surrounded by people who don’t ask too many nosey questions, 
                     know where boundaries are set, but also warm, open-hearted and loyal enough to follow
                      their lead. They will not collect too many friends in this lifetime, but turn to 
                      those who make them feel at peace, intelligent and honest at all times. This is a 
                      sign with full understanding for family traditions. As parents they tend to be 
                      strict but fair, readily taking on responsibilities that come with a child. </p>`)

            }
            else if(imageSign === "aquarius")
            {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#gemini").hide();
                $("#pisces").hide();
                $("label").hide();


                $("#output").html(`<h2>Aquarius (January 20-February 19) </h2><br>Strengths: Progressive, original, independent, humanitarian<br>
                Weaknesses: Runs from emotional expression, temperamental, uncompromising, aloof <br>
                Aquarius likes: Fun with friends, helping others, fighting for causes, intellectual 
                conversation, a good listener <br>  Aquarius dislikes: Limitations, broken promises, 
                being lonely, dull or boring situations, people who disagree with them <br>Most Compatible:
                 Aries, Gemini, Libra and Sagittarius <br> Least Compatible: Taurus and Scorpio <br>
                 <p>Aquarius are shy and quiet, but on the other hand they can be eccentric and energetic.
                  However, in both cases, they are deep thinkers and highly intellectual people who love 
                  helping others. They have a deep need to have some time alone and away from everything,
                   in order to restore power. They are capable of perceiving the future and they know 
                   exactly what they want to be doing five or ten years from now. Aquarius are known as 
                   thinkers, progressives and humanists. They feel good in a group or a community, so 
                   they constantly strive to be surrounded by other people. Aquarius have a reputation 
                   for being cold and insensitive, but this is just their defense mechanism against 
                   premature intimacy. They need to learn to trust others and express their emotions in a
                    healthy way. There's nothing that can attract an Aquarius more than an interesting 
                    conversation with a person. Openness, communication, imagination and willingness to 
                    risk are the qualities that fit well in the perspective of life of this zodiac sign. 
                    When in love, they are loyal, committed and not at all possessive. They give 
                    independence to their partners and consider them as equals. Although Aquarius are 
                    communicative, they need time to get close to people. Considering that they are 
                    highly sensitive people, closeness to them means vulnerability. Aquarius will do 
                    anything for a loved one to the point of self-sacrifice if necessary. Their friends 
                    should possess these three qualities: creativity, intellect and integrity. When it 
                    comes to family, their expectations are nothing less. Aquarius is a visionary type 
                    who likes to engage in activities that aim to make humanity better. When it comes to
                     money, this zodiac sign has a talent to maintain a balance between spending and 
                     saving money. Careers such as acting, writing, teaching, photography or piloting, 
                     are suitable for this sign. The best environment for them is one that gives them the
                      freedom to solve the problem without strict guidelines. Aquarius is an 
                      unconventional type and if given the opportunity to express their talent, can 
                      achieve remarkable success. </p>`)
            }
            else if(imageSign === "pisces")
            {
                $("#aries").hide();
                $("#taurus").hide();
                $("#cancer").hide();
                $("#leo").hide();
                $("#virgo").hide();
                $("#libra").hide();
                $("#scorpio").hide();
                $("#sagittarius").hide();
                $("#capricorn").hide();
                $("#aquarius").hide();
                $("#gemini").hide();
                $("label").hide();


                $("#output").html(`<h2>Pisces (February 20-March 20) </h2><br>StrengthsStrengths: Compassionate, artistic, intuitive, gentle, wise, musical<br> 
                Weaknesses: Fearful, overly trusting, sad, desire to escape reality, can be a victim or 
                a martyr <br> Pisces likes: Being alone, sleeping, music, romance, visual media, 
                swimming, spiritual themes <br> Pisces dislikes: Know-it-all, being criticized, the past 
                coming back to haunt, cruelty of any kind <br> Most Compatible: Taurus, Cancer, Scorpio 
                and Capricorn <br> Least Compatible: Gemini and Sagittarius <br>
                <p>Pisces are very friendly, so they often find themselves surrounded by very different 
                people. Pisces are selfless, they are always willing to help others, without hoping to get
                 anything back. They are generous, compassionate and extremely faithful and caring. Pisces
                  are never judgmental and always forgiving. They are also known to be most tolerant of 
                  all the zodiac signs. They are very loyal, gentle and unconditionally generous to their
                   partners. Short-term relationships and adventures are not peculiar to this zodiac sign.
                    Pisces can be the best friends that may exist. In fact, they often put the needs of 
                    their friends in front of their needs. They are loyal, devoted, compassionate and 
                    whenever there is some problem in the family or among friends, they will do their 
                    best to resolve it. Deeply intuitive, Pisces can sense if something is wrong, even 
                    before it happens. Pisces are expressive and they will not hesitate to express their
                     feelings to the people around them. They expect others to be open to them as they 
                     are. Communication with loved ones is very important for them. Pisces feel best in 
                     a position where their creative skills can be used, even better if it's for charity.
                      Occupations that fit Pisces would be an attorney, architect, veterinarian, 
                      musician, social worker and game designer. Inspired by the need to make changes 
                      in the lives of others, they are willing to help even if that means to go beyond 
                      the boundaries. This zodiac sign is compassionate, hard-working, dedicated and 
                      reliable. Pisces can be great at solving problems. For the most part, Pisces don’t
                       give money too much thought. They are usually more focused on their dreams and 
                       goals, but they will try to make enough money to achieve their goals. </p>`)
            }
        }
    }
);
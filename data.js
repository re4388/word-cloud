
// Get a reference to the storage service
var storage = firebase.app().storage("gs://angular-82e48.appspot.com");
var storageRef = storage.ref();
var listRef = storageRef.child('word_cloud.txt');

const data =''

listRef.getDownloadURL().then(data => {
  fetch(data)
  .then(function(response) {
    response.text().then(function(text) {
      console.log(text);
      // console.log(typeof text === 'string');
      data += text
    });
  });
});

// export data


// export let data = `full_text(from js)
//   "RT @psb_dc: More than just sleight of hand, AI can be the magic - not the Magic Leap - of the future.

//   Good read by @ploberman

//   #AI #FinSe…"
//   RT @an_open_mind: #gpt3 is surprising and creative but it’s also unsafe due to harmful biases. Prompted to write tweets from one word - Jew…
//   Coming soon(ish) ... #RPG #DND #GPT3 #AIDUNGEON #LITRPG #FANTASY https://t.co/Wze771R0Ki
//   "RT @jaypalter: ""GPT-3 is so good at aping human writing that it sometimes gave me chills. ""
//   ~ @fmanjoo

//   How Do You Know a Human Wrote This…"
//   申请了OpenAI的API,Statement 是想用Image GPT做一个帮助不懂设计的人来描述和翻译他们的想法，自己创造LOGO，期待能通过 #openAI #GPT3
//   You hear Paul Bellow rolling some dice. Please wait... #RPG #DND #GPT3 #AIDUNGEON #LITRPG #FANTASY https://t.co/ePBXs8YYyM
//   申请了OpenAI的API,Statement 是想用Image GPT做一个帮助不懂设计的人来描述和翻译他们的想法，自己创造LOGO，期待能通过 #openAI #GPT3
//   What sort of Hero will you become?  #RPG #DND #GPT3 #AIDUNGEON #LITRPG #FANTASY https://t.co/yP00btOhle
//   RT @bhairavmehta: $50!! AI Deep Machine Learning training with Pytorch, Tensorflow, Keras, MxNet &amp; Latest Natural Language Processing/Compu…
//   RT @bhairavmehta: $50!! AI Deep Machine Learning training with Pytorch, Tensorflow, Keras, MxNet &amp; Latest Natural Language Processing/Compu…
//   "“Recurrent Neural Networks for Dummies” by Daksh Trehan

//   #ArtificialIntelligence
//   #MachineLearning #DataScience
//   #NeuralNetworks #DeepLearning
//   #GPT3 #AI #Python #TECHNO2MIL
//   #technology #Blog
//   #bloggerstribe
//   #mediumwriters #towardsai

//   @towards_AI
//   @Medium

//   https://t.co/F37tX7BLE0"
//   "RT @plotlygraphs: We’ve explored @OpenAI’s new #GPT3 API, and we are super impressed with its capabilities!

//   For example, you can write a s…"
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   "RT @Pentropy: Found some interesting #GPT3 tweets / threads / articles and vidoes. Sharing them here in this 🧵

//   It's Amazing! I still know…"
//   RT @DingemanseMark: TBH this was the first thing I thought when seeing #GPT3 output.  No need to be cynical to see the virtual inevitabilit…
//   RT @VidyasagarMSC: "GPT-What: Intro to the next big thing" by @jesalg #DEVCommunity https://t.co/NZroG7Fwxp #MachineLearning #OpenAI #GPT3
//   @karanganesan @NarenDhyani @Suhail #GPT3 just made the job of the C-suite unnecessary!
//   """Think of life as a light that starts in your mind, not at your eyes.""

//   #GPT3"
//   "RT @concaption: GPT-3 model generates Pandas Code for Data Analysis and Transformation by just describing it in plain English text.
//   Good da…"
//   "The coolest thing about #gpt3? It learnt to do two digit arithmetic correctly purely by reading tons of text @BrianRoemmele @BrettKing @dgwbirch

//   #ai #AGI"
//   RT @AlexGDimakis: I cannot believe #GPT3 wrote this
//   RT @chainyoda: The coolest thing about #gpt3? It learnt to do two digit arithmetic correctly purely by reading tons of text @BrianRoemmele…
//   "データセットと欲しい結果を言葉で入力するだけで機械学習モデルのコードが生成されます。

//   #人工知能 #機会学習 #GPT3
//   https://t.co/5YxJvyOPH5"
//   RT @VidyasagarMSC: "GPT-What: Intro to the next big thing" by @jesalg #DEVCommunity https://t.co/NZroG7Fwxp #MachineLearning #OpenAI #GPT3
//   @GoogleAI with release of #GPT3 do you have plan for  #GoogleMeena ,will you upgrade this seq2seq model or your main focus will be on #BERT and related model, your answer will help us to choose between two
//   Philosophers On #GPT3 https://t.co/Plc8c7deKj
//   OpenAI’s new language generator #GPT3 is shockingly good—and completely mindless. Does GPT-3 bring us closer to artificial general intelligence? And if so how worried or optimistic should we be? Nine philosophers explore the potential impact of GPT-3. #AI  https://t.co/NprzeM78ix
//   RT @felix_beer: OpenAI’s new language generator #GPT3 is shockingly good—and completely mindless. Does GPT-3 bring us closer to artificial…
//   Here we go again...we tasked #GPT3 to generate Travel Guides for a few destinations and the results are insane... the content generated is quite accurate and hard to distinguish from human writing 🤯 it seems there are no limits on what #GPT3 can do @gdb https://t.co/lAR8SQYcdu
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   RT @DailyNousEditor: Nine philosophers explore various issues and questions raised by the newly released language model, GPT-3, in the late…
//   RT @rajnishkumar: Here we go again...we tasked #GPT3 to generate Travel Guides for a few destinations and the results are insane... the con…
//   "Up for a challenge?

//   Try fighting GPT-3 in copy writing :)

//   https://t.co/WdSW0qh3xh

//   #gpt3 #marketing https://t.co/F7cWHZMR9W"
//   "RT @AVILEN_AI_Trend: データセットと欲しい結果を言葉で入力するだけで機械学習モデルのコードが生成されます。

//   #人工知能 #機会学習 #GPT3
//   https://t.co/5YxJvyOPH5"
//   "RT @sarpongTech: Django User Log in.
//   Link - https://t.co/DPEc50dq7T

//   #BlackTechTwitter #Django #CodeNewbies #CodeNewbies #Python #Flask #GP…"
//   @bakztfuture Thanks for the #GPT3 mention! I'm making some progress. https://t.co/E2L05dVfU0
//   RT @rajnishkumar: Here we go again...we tasked #GPT3 to generate Travel Guides for a few destinations and the results are insane... the con…
//   "RT @sarpongTech: Django User Log in.
//   Link - https://t.co/DPEc50dq7T

//   #BlackTechTwitter #Django #CodeNewbies #CodeNewbies #Python #Flask #GP…"
//   RT @rajnishkumar: Here we go again...we tasked #GPT3 to generate Travel Guides for a few destinations and the results are insane... the con…
//   A truly, truly TREMENDOUS podcast on #GPT3 with the always brilliant Sonal Chokshi @smc90 playing with Frank Chen's @withfries2 majestic understanding of AI's effect on all things society. Truly unmissable: one of the best podcast episodes from @a16z  https://t.co/y4wI8zAQAv
//   "RT @Merzmensch: I asked GPT-3 about our existence and God and now I have no questions anymore.

//   #GPT3 // @OpenAI https://t.co/ROsjDZn7RG"
//   "RT @sarpongTech: Django User Log in.
//   Link - https://t.co/DPEc50dq7T

//   #BlackTechTwitter #Django #CodeNewbies #CodeNewbies #Python #Flask #GP…"
//   RT @meedabyte: A truly, truly TREMENDOUS podcast on #GPT3 with the always brilliant Sonal Chokshi @smc90 playing with Frank Chen's @withfri…
//   Most of the content writing job will be automated on future, it seems #GPT3 https://t.co/jMb49aSnib
//   "Robots reading books, my favorite #NotMyRobots
//   AI: New GPT-3 language model takes NLP to new heights https://t.co/WpFhooWZb9
//   #ai #ArtificialIntelligence #MachineLearning #DeepLearning #GPT3 https://t.co/4MUGIY942k"
//   "Oh, the things that #GPT3 can do!
//   This one is particularly cool. https://t.co/UWO46NkddV"
//   RT @i001962: Nice list of #GPT3 resources from @simpleaswater_ https://t.co/JW2JffWIGJ I wonder if they used GPT3 to create it. #meta
//   fuck do tags work here? #GPT3 etc etc
//   "#AI: New #GPT3 language model takes #NLP to new heights

//   https://t.co/20H81JvEFH

//   #artificialintelligence"
//   "RT @bobehayes: #AI: New #GPT3 language model takes #NLP to new heights

//   https://t.co/20H81JvEFH

//   #artificialintelligence"
//   "RT @sarpongTech: Django User Log in.
//   Link - https://t.co/DPEc50dq7T

//   #BlackTechTwitter #Django #CodeNewbies #CodeNewbies #Python #Flask #GP…"
//   RT @ByGpt3: “Philosophers are obsolete because they try to understand the world; the world would be better off if they would just describe…
//   RT @rajnishkumar: Here we go again...we tasked #GPT3 to generate Travel Guides for a few destinations and the results are insane... the con…
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   "RT @sarpongTech: Django User Log in.
//   Link - https://t.co/DPEc50dq7T

//   #BlackTechTwitter #Django #CodeNewbies #CodeNewbies #Python #Flask #GP…"
//   #GPT3 #ArtificialIntelligence If anyone has any questions about (G)AI but you are constantly getting a brush of from the "experts" about your questions, ASK ME!!! I am an independent AI researcher and I would be more than happy to answer all your questions without a bias or PC BS
//   RT @anderssandberg: For me, the big story about #gpt3 is not that it is smart - it is dumb as a pile of rocks - but that piles of rocks can…
//   RT @DailyNousEditor: Nine philosophers explore various issues and questions raised by the newly released language model, GPT-3, in the late…
//   I know ML is the cool thing now (👋 #GPT3) but anyone still working with Hadoop technologies?
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "All the hype around #GPT3 inspired me to rummage around in the archive in search of this 2012 post on a future of JaaS (Journalism as a Service)

//   One for the fans of the old ExCapite blog

//   @JenniferSertl @dopaminergic13
//   @aricochet @frabcus @ARJWright

//   https://t.co/khid3lWqur"
//   "In a world where data is power and change is speed, there's no such thing as justice" - #GPT3 #AI #QOTD
//   "@aea2917 #GPT3 is close to parity with low-IQ normies.

//   When we hit the next iteration, it might overtake them. Especially if some careful fine-tuning is done on the model."
//   "A writer writes about what she wants to say
//   GPT3 writes about what the readers want writers to say

//   Once AI has written all that others want to hear, we’ll be left only with want we want to say

//   AI will only make us more human

//   #GPT3

//   @paulg"
//   @RokoMijicUK 2/ On the topic of language, I really have no conclusive ideas. Seeing what people and #GPT3 say raises an epistemological question: how do I know that people have intensions and the model does not. It's as "merely a language model" as consciousness is "merely a world model."
//   "#GPT3
//   forces humans to be
//   better humans https://t.co/hEEAswbxdz"
//   "RT @AVILEN_AI_Trend: データセットと欲しい結果を言葉で入力するだけで機械学習モデルのコードが生成されます。

//   #人工知能 #機会学習 #GPT3
//   https://t.co/5YxJvyOPH5"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   I'm dying 🤣🤣🤣 #GPT3 https://t.co/b7hRatxNsg
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   Short thread on #GPT3 generating composer bios! So I've been generating fake biographies of myself with #AI for fun. Some thoughts 1) it is clear that composer biographies are so formulaic/boring that AI can produce 100% convincing ones EVERY time https://t.co/ehIL8Tam6k
//   2) #GPT3 is trained on the Internet so real names pop up. This fake bio implicates @rchrdbkrmuso @RCMLondon @RoyalPhilSoc @BSOrchestra @BBCNOW and more in my work (&amp; @EditionPetersUK above) I don't think this is dangerous but certainly bizarre &amp; I wonder how people feel about it https://t.co/YQl1YbMa0f
//   "#GPT3
//   forces humans to be
//   better humans :) https://t.co/hEEAswbxdz"
//   "3) Turn the temperature up and we get some kinda inspiring descriptions of work that doesn't exist, but maybe should. Look at these generations. This gives me an idea to generate reviews of a work with #GPT3 then compose it afterwards. Time is an illusion.
//   #HallucinationEngine https://t.co/AP0wmlJywb"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "RT @Merzmensch: I asked GPT-3 about our existence and God and now I have no questions anymore.

//   #GPT3 // @OpenAI https://t.co/ROsjDZn7RG"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "while this helps the advancement of our thoughts (just like #books or media or even reality around ) , it can also shape our thoughts,  sense of reality and self, if we are careless.
//   This need be a graver concern than it already is. #ai #GPT3"
//   Here’s a good, concise explainer #podcast on what’s real and what’s hype with #GPT3 via @a16z 👇https://t.co/0JyiSb63lm
//   RT @csgofloat: We recently had the opportunity to chat with a Valve developer about CS:GO skins through the power of #GPT3. https://t.co/jN…
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   RT @RokoMijicUK: When you prod #GPT3 to explain a contradiction in commonly held beliefs, it confabulates in exactly the way most people do…
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   RT @StackOverflow: This episode, we chat about #GPT3 and how, in @SaraJChipps’s words, AI is “reaching the level of college sophomore in th…
//   Die Text-#KI #GPT3 vom Forschungslabor #OpenAI kann nicht nur Gedichte schreiben, Sätze vollenden und Themen diskutieren, sondern jetzt auch Code schreiben. https://t.co/7bme48f42F https://t.co/yhkWzOkRCu
//   "AIs will finally tinker out how to make sense and use of REST Level 3 APIs. ;)

//   #HATEOAS #GPT3"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   RT @csgofloat: We recently had the opportunity to chat with a Valve developer about CS:GO skins through the power of #GPT3. https://t.co/jN…
//   RT @datenwirtschaft: Die Datenwirtschaft #7: Wer hat's geschrieben? #DataScience #GPT3 - https://t.co/tZVtDLkqot
//   "OpenAI’s latest breakthrough is astonishingly powerful, but still fighting its flaws https://t.co/efh143W17g via @Verge
//   #AI #Robotics #AGI #GPT3 @OpenAI @jjvincent"
//   RT @rajnishkumar: Here we go again...we tasked #GPT3 to generate Travel Guides for a few destinations and the results are insane... the con…
//   RT @PythonWeekly: Python Weekly - Issue 460 https://t.co/PTaalP999y #python #django #flask #machinelearning #datascience #raspberrypi #jupy…
//   RT @PythonWeekly: Python Weekly - Issue 460 https://t.co/PTaalP999y #python #django #flask #machinelearning #datascience #raspberrypi #jupy…
//   RT @amananandrai: #GPT3  is like a Swiss army knife, it can be used for various purposes making it one of the most valuable tools of modern…
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   "RT @AVILEN_AI_Trend: データセットと欲しい結果を言葉で入力するだけで機械学習モデルのコードが生成されます。

//   #人工知能 #機会学習 #GPT3
//   https://t.co/5YxJvyOPH5"
//   Has AI lost the plot? “No, AI is not coming to take your copywriting job” by @PeterSpringett https://t.co/riHqRY0kks #GPT3 #copywriting #ai #journalism https://t.co/NJGtbQ4NA4
//   RT @quasimondo: The imaginary dialogue pattern is very interesting. I can't get enough of it. Here I arrange a #gpt3 meeting between Alan T…
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   The next signal that we live in transition times. #GPT3 #AI https://t.co/98XDdGylUi
//   "AI: New GPT-3 language model takes NLP to new heights https://t.co/1x4xqLnXmm via @techrepublic
//   #AI #coding #GPT3 #NLP @MaryShacklett"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   RT @RokoMijicUK: When you prod #GPT3 to explain a contradiction in commonly held beliefs, it confabulates in exactly the way most people do…
//   "Philosophers on GPT-3: https://t.co/C7CpvWHIyt
//   GPT-3 on Philosophers: ⬇️

//   #AI #GPT3 #philosophyofAI https://t.co/XK0eM06p16"
//   RT @datenwirtschaft: Die Datenwirtschaft #7: Wer hat's geschrieben? #DataScience #GPT3 - https://t.co/tZVtDLkqot
//   "RT @bimedotcom: AI: New GPT-3 language model takes NLP to new heights https://t.co/1x4xqLnXmm via @techrepublic
//   #AI #coding #GPT3 #NLP @Ma…"
//   RT @dailybug: The next signal that we live in transition times. #GPT3 #AI https://t.co/98XDdGylUi
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "RT @bimedotcom: AI: New GPT-3 language model takes NLP to new heights https://t.co/1x4xqLnXmm via @techrepublic
//   #AI #coding #GPT3 #NLP @Ma…"
//   "RT @ChinyaSuhail: @gdb @smdcmc @awscloud

//   When GPT-3 Meets DevOps 😉
//   ** create, deploy, list, and delete any services on AWS using conversa…"
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   #GPT3 will not only revolutionise the business of many content writers (job losses) and initiate a new era of directed-to-consumer marketing, it's also a major step towards automated, large-scale social engineering. First #phishing then #vishing.
//   "This is the best article about #gpt3 - and more interestingly scaling DL in general - I have read up to now.

//   https://t.co/YYU4UPtvI9

//   - scaling (data, model, compute) works
//   - induces meta-learning &amp; more
//   - end is not in sight
//   - human hindsight &gt;&gt; foresight

//   via @XiXiDu @gwern https://t.co/2nfWz1dGS0"
//   "RT @Nishitm1: Day 196:
//   Created a Python script using GPT-3 that answers questions about a topic entered by the user. The data for the initi…"
//   "RT @Nishitm1: Day 196:
//   Created a Python script using GPT-3 that answers questions about a topic entered by the user. The data for the initi…"
//   "RT @plotlygraphs: We’ve explored @OpenAI’s new #GPT3 API, and we are super impressed with its capabilities!

//   For example, you can write a s…"
//   RT @IntuitMachine: Text completion and the combination of style rewriting and text completion. What else should I add to round out the writ…
//   "RT @fabinrasheed: Painting with #GPT3. (Thread)
//   So I asked GPT3 to tell me something to paint from its imagination. Interestingly, it sugge…"
//   RT @DrZimmermann: Really enjoyed putting together this philosophical discussion on #GPT3, featuring @ShannonVallor David Chalmers @rinireg…
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   RT @quasimondo: The imaginary dialogue pattern is very interesting. I can't get enough of it. Here I arrange a #gpt3 meeting between Alan T…
//   RT @csgofloat: We recently had the opportunity to chat with a Valve developer about CS:GO skins through the power of #GPT3. https://t.co/jN…
//   RT @DrZimmermann: Really enjoyed putting together this philosophical discussion on #GPT3, featuring @ShannonVallor David Chalmers @rinireg…
//   RT @AkibMashrur: If #GPT3 can predict a 500 words essay from just 10-11 words title, can it forecast the financial markets 500 ticks into t…
//   "RT @Merzmensch: I asked GPT-3 about our existence and God and now I have no questions anymore.

//   #GPT3 // @OpenAI https://t.co/ROsjDZn7RG"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   RT @DrZimmermann: Really enjoyed putting together this philosophical discussion on #GPT3, featuring @ShannonVallor David Chalmers @rinireg…
//   RT @csgofloat: We recently had the opportunity to chat with a Valve developer about CS:GO skins through the power of #GPT3. https://t.co/jN…
//   The #CX and #Coding community all need to read this summary of #GPT3 from @loyndsview - will we have human-level #AI inside this decade writing prose and code? https://t.co/dFxVS4z1Qg
//   @OnAssholes @add_hawk @OnAssholes yeah, I (and other people) have actually kind been suspecting that this particular version might be fake. Just a hunch though—very hard to assess given limited public access to #gpt3 + no audit trail for this particular text.
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   @OpenAI 's GPT3 #ai is impressively powerful and API access is available through their beta programme. With more open access governance is as important as ever #datagovernance #gpt3 #ai https://t.co/Ph33mBfK5Y
//   "Here is a good explanation of #GPT3
//   This one is cool and paves the way for AGI #ArtificialIntelligence #AI #DataScience https://t.co/QxqV9xFWHF"
//   "RT @nigewillson: Robots reading books, my favorite #NotMyRobots
//   AI: New GPT-3 language model takes NLP to new heights https://t.co/WpFhooW…"
//   "RT @nigewillson: Robots reading books, my favorite #NotMyRobots
//   AI: New GPT-3 language model takes NLP to new heights https://t.co/WpFhooW…"
//   "RT @nigewillson: Robots reading books, my favorite #NotMyRobots
//   AI: New GPT-3 language model takes NLP to new heights https://t.co/WpFhooW…"
//   What's the best reflection on #GPT3 you've listened to / read with regards to its potential impact on value chain, markets, etc...?
//   RT @bhairavmehta: $50!! AI Deep Machine Learning training with Pytorch, Tensorflow, Keras, MxNet &amp; Latest Natural Language Processing/Compu…
//   RT @bhairavmehta: $50!! AI Deep Machine Learning training with Pytorch, Tensorflow, Keras, MxNet &amp; Latest Natural Language Processing/Compu…
//   Bravo! #GPT3 https://t.co/gOpACpUMlJ
//   "Interesting thoughts on GPT-3, AGI and the impact it may have on society.
//   #GPT3 #philosophy #AGI #MachineLearning  https://t.co/wrQaTjWfxj"
//   #GPT3 I tried Turing dialogue on my "troll" prompt. I especially like the "sonnet" composed by the lying persona. I couldn't find it on Google, so it probably is original. Also, only the troll persona answered the chess question correctly, but it's almost certainly memorized. https://t.co/htdRn0OxVL
//   RT @bhairavmehta: $50!! AI Deep Machine Learning training with Pytorch, Tensorflow, Keras, MxNet &amp; Latest Natural Language Processing/Compu…
//   RT @DrZimmermann: Really enjoyed putting together this philosophical discussion on #GPT3, featuring @ShannonVallor David Chalmers @rinireg…
//   Coucou, quelqu’un veut perdre son après-midi..? #gpt3 https://t.co/G9m7pkvUET
//   "Some failure modes for #GPT3. It seems GPT3 lacks common sense explanatory theories and therefore can’t extrapolate to new situations. Ie it lacks “good explanations” in the sense of @DavidDeutschOxf, which he defines (a bit vaguely) as “hard-to-vary”. 1/n
//   https://t.co/4GzWYG5699"
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   Sztuczna inteligencja o sobie #GolemXIV #GPT3 https://t.co/hunLGybglk
//   "RT @psb_dc: More than just sleight of hand, AI can be the magic - not the Magic Leap - of the future.

//   Good read by @ploberman

//   #AI #FinSe…"
//   The Age of Ultron May be here faster than we think! But some kinks have to be worked out. #GPT3 #AI https://t.co/Fa3tsk3OZf
//   RT @rajnishkumar: Here we go again...we tasked #GPT3 to generate Travel Guides for a few destinations and the results are insane... the con…
//   RT @ByGpt3: “It doesn’t matter what you’re good at. The only thing really worth struggling for is what you want to be great at.” #gpt3
//   #GPT3 doesn't seem to contain these common sense "rules of thumb". Rather, all it contains is a probabilistic model of what sequences of words are likely to follow a given sequence of words, assuming it is similar to those in its training corpus. It's very "Chinese room"-esque.
//   "RT @lavanyaai: We're super excited to bring you a salon with Nick Ryder, one of the creators of #GPT3.

//   Nick will do a short talk, followed…"
//   RT @excapite: All the hype around #GPT3 inspired me to rummage around in the archive in search of this 2012 post on a future of JaaS (Journ…
//   Very good conversation about #GPT3 by ⁦@smc90 and ⁦@withfries2⁩ GPT-3: What's Hype, What's Real on the Latest in AI | a16z Podcast https://t.co/uJ3i2fRYPM
//   "RT @psb_dc: More than just sleight of hand, AI can be the magic - not the Magic Leap - of the future.

//   Good read by @ploberman

//   #AI #FinSe…"
//   "About #GPT3:

//   OpenAI’s latest breakthrough is astonishingly powerful, but still fighting its flaws

//   https://t.co/mlRgHk3k4Q via @Verge"
//   "RT @Merzmensch: I asked GPT-3 about our existence and God and now I have no questions anymore.

//   #GPT3 // @OpenAI https://t.co/ROsjDZn7RG"
//   Yo ya mande mi solicitud en @OpenAI para ver el funcionamiento del #GPT3   y aun no la han aceptado. ☹😢 https://t.co/iFoYLL8Skb
//   "RT @DenisBauer: Interesting thoughts on GPT-3, AGI and the impact it may have on society.
//   #GPT3 #philosophy #AGI #MachineLearning  https:/…"
//   I keep hearing people call #GPT3 a breakthrough "chatbot". I agree it will improve chat, but only incrementally over SOTA. Let's see a side by side comparison of GPT3 for chat with @GoogleDuplex, for a real world application like calendar scheduling. I bet Duplex would be better.
//   RT @chazfirestone: #GPT3 finally answers an important question https://t.co/7pOlJ8Fpt0
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   “Design is stealing, then Nike-ing it.” #gpt3
//   "RT @sonnylazuardi: This is mind blowing 🤯

//   With @OpenAI #GPT3 I updated my @figmadesign plugin https://t.co/h1LE6U37kO

//   I call it ""Flipbook…"
//   "RT @frantzfries: How do you make writing ad copy fun? 🤔

//   Give it to #GPT3

//   Instantly create dozens of versions in seconds https://t.co/hfKx…"
//   I plan to keep updating as much as possible my article about #GPT3 in @TDataScience with interesting use cases and relevant information about @OpenAI's new language model. Any contribution is more than welcome! I have just added the following topics 👇https://t.co/sCcNlmtzs5
//   "In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, which got even more interesting when a Twitter follower added Harry in.

//   (v/@quasimondo &amp; @jonathanfly)

//   #NLProc #NLP #GPT3 https://t.co/ecgecHicvD"
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "GPT-3 is impressive, but it's not THIS impressive, and its certainly not this specific. It was also trained on a corpus that by definition was created before it existed.

//   I'm calling human-generated bullshit here.

//   #GPT3 @OpenAI https://t.co/WDSbTtq9Jx"
//   RT @meedabyte: A truly, truly TREMENDOUS podcast on #GPT3 with the always brilliant Sonal Chokshi @smc90 playing with Frank Chen's @withfri…
//   RT @meedabyte: A truly, truly TREMENDOUS podcast on #GPT3 with the always brilliant Sonal Chokshi @smc90 playing with Frank Chen's @withfri…
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "RT @AVILEN_AI_Trend: データセットと欲しい結果を言葉で入力するだけで機械学習モデルのコードが生成されます。

//   #人工知能 #機会学習 #GPT3
//   https://t.co/5YxJvyOPH5"
//   "RT @lawderpaul: Turns out #GPT3 can do vision too 😉

//   Built an ingredient parser: take a pic of any nutrition label (google to extract text)…"
//   "RT @lawderpaul: Turns out #GPT3 can do vision too 😉

//   Built an ingredient parser: take a pic of any nutrition label (google to extract text)…"
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "I have requested #GPT3 API access, so I can prove it has nothing to do with A(G)I. GPT-3 can not reason, think or do anything intelligent, when Intelligence is defined as understanding cause and effect.

//   GPT-3 is a statistical ""sentence-finisher/generator"" and not #AI in any way."
//   RT @amananandrai: #GPT3  is like a Swiss army knife, it can be used for various purposes making it one of the most valuable tools of modern…
//   RT @amananandrai: #GPT3  is like a Swiss army knife, it can be used for various purposes making it one of the most valuable tools of modern…
//   RT @AGI_programmer: I have requested #GPT3 API access, so I can prove it has nothing to do with A(G)I. GPT-3 can not reason, think or do an…
//   RT @AlexGDimakis: I cannot believe #GPT3 wrote this https://t.co/ahNm48IyEA
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "WOW
//   #GPT3 #AI https://t.co/uKDj4oSCIL"
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "RT @RikeFranke: WOW
//   #GPT3 #AI"
//   "RT @MIT_CSAIL: In honor of the birthday of #HarryPotter, check out this
//   coder's GPT3-synthesized chat btw Alan Turing &amp; Claude Shannon, wh…"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "RT @Merzmensch: _ #MerzmenschPresents _

//   📋 AI Bots on the Run.
//   If you let two GPT-3 bots alone in one room...

//   🔗 https://t.co/gnMzwsDR7U

//   📖…"
//   "RT @1adityajoshi: I've put together a website to curate all the impressive #GPT3 applications in one place!
//   https://t.co/VEFg7rvq9U"
//   Here's an insightful analysis of GPT-3. https://t.co/XnwHKjN12k via @Verge #AI #MachineLearning #TextGeneration #GPT3
//   "RT @1adityajoshi: I've put together a website to curate all the impressive #GPT3 applications in one place!
//   https://t.co/VEFg7rvq9U"
//   RT @quasimondo: Another attempt at a longer piece. An imaginary Jerome K. Jerome writes about Twitter.  All I seeded was the title, the aut…
//   RT @DrZimmermann: Really enjoyed putting together this philosophical discussion on #GPT3, featuring @ShannonVallor David Chalmers @rinireg…
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   Interesting but important to note, this is a cherry picked reply of several, still impressive #GPT3 https://t.co/h1jOxdql05
//   """..All we’d have to do would be to ask the right questions""

//   @verge #GPT3 #AI
//   https://t.co/wwCPTj9BJ3"
//   """There is no escape from thought except to be."" ~ GPT-3 prompted by @Nisargadatta_M

//   (#GPT3 didn't pass the Turing-as-Satguru test, but it gave me this little gem.)"
//   @waitbutwhy And why #GPT3 will soon be conscious. 🤖
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "RT @RikeFranke: WOW
//   #GPT3 #AI"
//   "RT @1adityajoshi: I've put together a website to curate all the impressive #GPT3 applications in one place!
//   https://t.co/VEFg7rvq9U"
//   #GPT3 still has a ways to go before replacing any software developers. However, GPT-3 is already at parity with low- to mid-end commercial longform content production: https://t.co/3GuGKK6geo
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "RT @RokoMijicUK: @aea2917 #GPT3 is close to parity with low-IQ normies.

//   When we hit the next iteration, it might overtake them. Especiall…"
//   "@gwern These two questions are the entirety of my ""Biased bad attitude towards the mightly #GPT3"".

//   If you can ask it those questions and let me know the answers, that's all I'm interested in."
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "RT @RokoMijicUK: I've had a profound realization playing with #GPT3.

//   The vast majority of people are basically running #GPT3. They speak,…"
//   "RT @1adityajoshi: I've put together a website to curate all the impressive #GPT3 applications in one place!
//   https://t.co/VEFg7rvq9U"`




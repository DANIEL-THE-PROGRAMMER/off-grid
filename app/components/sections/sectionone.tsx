
import Image from "next/image";
import { ImageParallax } from "../imageparallax";
import { TextWrapper } from "../textwrapper";

export const SectionOne = () => {
    return (
      <div className="updown bg-black p-[120px] pb-[500px] min-h-[100vh]">
        <div className="flex items-end ">
          <div className="flex flex-col p-[108px] pr-[10px] grow min-h-[200px] bg-[#CEFA05] uppercase">
            <div className="bg-black py-[10px]">
              <h3 className="font-supr text-[57.839px] text-center">
                <TextWrapper fg={`#fff`}>Alex Dickinson</TextWrapper>
              </h3>
            </div>
            <span className="flex flex-col font-supr text-[57.839px]  text-right italic">
              <TextWrapper fg={`black`}>message from our</TextWrapper>
              <TextWrapper fg={`black`}>Founder and Head </TextWrapper>
              <TextWrapper fg={`black`}>of Development, </TextWrapper>
            </span>
          </div>
          <div className="w-[50%] h-[90vh] bg-[#CEFA05] flex justify-center  shrink-0">
            <div className="h-full relative w-[92%] overflow-hidden">
              <ImageParallax>
                <Image src="/assets/image 50.png" alt="" fill sizes="100vw" />
              </ImageParallax>
            </div>
          </div>
        </div>
        <div className="mt-[71px]">
          
          <p className="flex whitespace-pre-lin font-semibold text-[20px] font-lato leading-[32.8px]">
            {WrittenText}
          </p>
          <span className="text-[28px] font-bold leading-[45.92px] mt-[33px] inline-block">
            <TextWrapper fg={`#CEFA05`}>Read less..</TextWrapper>
            
          </span>
        </div>
      </div>
    );
}

const WrittenText = `Hey business owner,

Being a Tradie is hard enough.
Trust me I get it.

I’ve heard it all from family, friends and now even clients.
It’s a war out there.

When you first signed up to be a tradie, did you ever comprehend all the day to day tasks you’d have to manage.
Schedules, Ordering, Admin, Management, Marketing and the long list of chores that bring you nothing but headaches and do so little for the money needle.
Probably not....

So for the past few years you’ve played the juggling act, just getting through the day by the grit of your teeth.
Don’t worry, any sane person would feel the same, especially when you’re limited to your own time and resources.

But it’s 2021 now and things are a little different, smart phones, smart TV’s and pretty soon we’ll be driving smart cars.

So, it’s about time you invest in a SMART-SYSTEM

I’m talking about automation (to get your time back)

Artificial Intelligence (because well.....computers are smarter than we are) & a 24/7 marketplace that never fatigues (because for the first time ever we have access to one......THE INTERNET. 

I’m guessing you’ve been online for a while.

Trying to find the latest trends or hacks to solve all your problems.

Or you’ve looked through 20 different agencies that are all offering the same damn thing.

‘With over 10 years of experience’

‘The most affordable prices’

Or the best of all

‘We guarantee an increase in your website traffic’ Well, guess what...

All that means nothing unless strangers end up knocking at your door, requesting to book your services. 

People are not coming to your website, hoping the history of your business can solve their problems. They 

WANT a SOLUTION and they WANT it NOW

That’s what makes us different.

We only care about the results and we won’t stop until we achieve them.

If you want to work with a team that actually prioritises return on investment and treats your business like their own. Then book a complimentary strategy session.

It’ll be the best opportunity for us to meet each other and undergo a thorough inspection on the following:
- Current website,
- Social media channels
- Email lists
- Long term goals
- Current business position

From this I will be able to offer the most practical suggestions moving forward &.....only if you’re READY.

We’ll get to work. 
(remember this, as we’ll advise you ourselves if we think the business is ready for growth. It’s nothing personal, it’s just we don’t want businesses pissing money up the wall, when they don’t have their ducks in order)

I forgot to mention,
There's no lock in contracts...because who the hell wants to be held hostage? NOT ME... `;
import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Minimalist Entrepreneur</title>
        <link rel="icon" href="/pink object.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta name="twitter:title" content="The Minimalist Entrepreneur" />
        <meta name="twitter:description" content="A four-week cohort-based course" />
        <meta name="twitter:image" content="https://sahillavingia.com/title.png" />
      </Head>

      <a className="tiny-title" href="/">
        &larr;
      </a>

      <main class="course">
        <img src="/title.png" style={{maxWidth: "400px", width: "100%"}} />
        <img src="/yellow object.png" width="1200" style={{ position: "absolute", top: "-700px", left: "-700px", zIndex: "-1" }} />
        <img src="/pink object.png" width="120" style={{ position: "absolute", top: "1062px", right: "-300px", zIndex: "1" }} />
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "1300px",
          transform: "rotate(-57deg)",
          position: "absolute",
          top: "198px",
          left: "470px",
          zIndex: "-1"
        }}></div>
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "550px",
          position: "absolute",
          top: "653px",
          left: "170px",
          zIndex: "-1"
        }}></div>
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "130px",
          transform: "rotate(90deg)",
          position: "absolute",
          top: "1138px",
          left: "170px",
          zIndex: "-1",
          marginBottom: "60px"
        }}></div>

        <p>A four-week cohort-based course for founders who want to learn to do more with less.</p>

        <p>We'll cover my approach to starting a business from scratch, as well as scaling it to your definition of success. Plus, once you get there, how to own it such that it doesn't own you.</p>

        <h2 style={{marginTop: "700px"}}>Curriculum</h2>

        <p>
          <strong>The Minimalist Entrepreneur</strong>
          <br />
          Eight attributes define our archetypal founder: profitability, community, process, discovery, transparency, growth, culture, and purpose.
        </p>
        <p>
          <strong>Community first</strong>
          <br />
          One of the best places to start your business is by picking a community. But which community, and how should you think about building for them? Plus, how to spot problems worth solving.
        </p>
        <p>
          <strong>Build a manual valuable process</strong>
          <br />
          A framework to convert ideas into products that solve problems for your customers, and how to scale your solution over time.
        </p>
        <p>
          <strong>Selling to your first 100 customers</strong>
          <br />
          How to teach your way to product-market fit, and have fun doing it.
        </p>
        <p>
          <strong>Market by being you</strong>
          <br />
          Not by spending money on ads or making headlines. Instead, we'll cover how to turn total strangers into fans, and how to set up your fans to turn themselves into customers. For free.
        </p>
        <p>
          <strong>Grow yourself and your business sustainably</strong>
          <br />
          Once you're scaling, it's your job not to mess things up. Here we focus on the fundamentals of business and psychology to avoid unforced errors.
        </p>
        <p>
          <strong>Build the house you want to live in</strong>
          <br />
          How to think through your values and finding the best people for you.
        </p>
        <p>
          <strong>Where do we go from here?</strong>
          <br />
          Exploring the "dizzying anxiety of freedom" that owning a minimalist business gets you.
        </p>

        <p>After taking this course, you'll deeply understand how I think about starting and scaling businesses–and how not to. I promise that while you won't always agree, you will be pushed to evolve your thinking–and if you haven't, to start.</p>

        <h2>Cohort-based courses</h2>
        <p>Besides my co-instructor Julie Mosow, I am working with a <a href="https://bit.ly/wk-gb">new startup</a> by AltMBA co-founder Wes Kao and Udemy co-founder Gagan Biyani to make this course happen.</p>
        <p>
          <strong>Learn with a cohort of peers</strong>
          <br />
          This course is designed to facilitate peer learning and interaction through Zoom breakout groups, an active online community, and group projects.
        </p>

        <p>
          <strong>Active learning, not passive lecture watching</strong>
          <br />
          I won’t just talk at you. I will engage via live Q&amp;A, so this feels more like an interactive seminar than a massive lecture hall.
        </p>

        <p>
          <strong>Accountability and feedback</strong>
          <br />
          You’re an entrepreneur. You can figure things out when you have to, but sometimes it’s helpful to have feedback and accountability to increase your chances of success.
        </p>

        <p>
          <strong>Guest lecturers</strong>
          <br />
          There'll be guests who will come in and provide different perspectives on how to be a Minimalist Entrepreneur.
        </p>

        <h2 class="bold">Frequently-asked questions</h2>

        <p>
          <strong>Who are you?</strong>
          <br />
          I am the founder and CEO of Gumroad. I run a $12 million/year rolling venture fund, and I write and paint in my free time.
        </p>
        <p>
          <strong>Who is this course for?</strong>
          <br />
          This course is for people who want to build meaningful, sustainable businesses, are willing to put in the hard work and time to make that happen, and who are willing to help others succeed as well. This course isn’t a solo journey.
        </p>
        <p>
          <strong>What's the time commitment like?</strong>
          <br />
          The more you put in, the more you'll get out. I recommend at least a couple hours a week dedicated to this course content and optional assignments.
        </p>

        <p>The first cohort of 150 students sold out in a few hours! Please join the waitlist to secure your spot in the next one, in June.</p>

        <a href="https://gum.co/tme-waitlist?price=0&wanted=true" style={{background: "#d4287f", color: "white", padding: "15px 25px", borderRadius: "99px", fontSize: 18, textDecoration: "none", margin: "60px 0 0", display: "inline-block", fontFamily: "Menlo, Courier, monospace"}}>Join the waitlist</a>

        <script src="https://gumroad.com/js/gumroad.js"></script>
      </main>
    </Layout>
  )
}

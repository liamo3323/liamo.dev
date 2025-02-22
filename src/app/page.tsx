"use client";
import React from "react";
import RawHtmlComponent from '@components/RawHtmlComponent'
import Script from "next/script";

const rawHtml = `

<body id="page-top">
<!-- Navigation-->
<nav
  class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
  id="sideNav"
>
  <a class="navbar-brand js-scroll-trigger" href="#page-top">
    <span class="d-block d-lg-none">Liam Kieran O&apos;Driscoll</span>
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarResponsive"
    aria-controls="navbarResponsive"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#experience"
          >Experience</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#education"
          >Education</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#interests"
          >Interests</a
        >
      </li>
    </ul>
  </div>
</nav>

<!-- Page Content-->

<div class="container-fluid p-0">
  <!-- About-->
  <section class="resume-section" id="about">
    <div class="resume-section-content">
      <h1 class="mb-0">
        Liam Kieran
        <span class="text-primary">O&apos;Driscoll</span>
      </h1>
      <div class="subheading mb-5">
        Woking · Uk ·
        <a href="mailto:liam3323@gmail.com">liam3323@gmail.com</a>
      </div>
      <p class="lead mb-5">
        I am a computer science graduate with hands-on experience in
        software development, machine learning, and problem-solving with a
        passion for innovative technology solutions
      </p>
      <div class="social-icons">
        <a
          class="social-icon"
          href="https://www.linkedin.com/in/liam-o-driscoll-21a0a1225"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a class="social-icon" href="https://github.com/liamo3323"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
  </section>
  <hr class="m-0" />

  <!-- Experience-->

  <section class="resume-section" id="experience">
    <div class="resume-section-content">
      <h2 class="mb-5">Experience</h2>

      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">University of Surrey: Faculty of Engineering and Physical Sciences</h3>
          <div class="subheading mb-3">| Research Software Developer</div>
          <ul>
            <li>
              <p>
                Liaise with project members and contribute to discussions within an interdisciplinary team of 6 investigators across the 3 faculties of the University
              </p>
            </li>
            <li>
              <p>
                Obtain a deep understanding of quantitative and qualitative real-world data representing human emotions and situations
                <li>
                  <p>
                    Develop software for making predictions out of real-world data and actionable recommendations out of a causal map
                  </p>
                </li>
                <li>
                  <p>
                    Take meeting minutes keeping track of meetings with internal staff and potential external collaborators
                  </p>
                </li>
                <li>
                  <p>
                    Develop a Reinforcement Learning environment reflective of a causal map from a real-world data.
                  </p>
                </li>
                <li>
                  <p>
                    Train agents to determine high traffic nodes that are crucial to carer’s mental and physical well-being
                  </p>
                </li>
                <li>
                    <p>
                        Analyze and applied longitudinal data to enrich information within the nodes of the environment
                    </p>
                  </li>
                </li>
                <li>
                    <p>             
                        Apply real-world data to Large Language Models to produce a risk assessment score
                    </p>
                  </li>
                </li>
                <li>
                    <p>
                        Apply different LLM models to determine an individual’s ability to continue caring for their patient
                    </p>
                  </li>
                </li>
                <li>
                    <p>
                        Develop tools to automate the task of summarizing conversations to be used as input to prompt LLM models
                    </p>
                  </li>
              </p>
            </li>
          </ul>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary"
            >July 2023 - Present | UK</span
          >
        </div>
      </div>

      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
              
        <div class="flex-grow-1">
          <h3 class="mb-0">Industrial Placement at Thales Group</h3>
          <div class="subheading mb-3">| AI Research Intern</div>
          <ul>
            <li>
              <p>
                Engaged in daily team meetings, collaborating with
                teammates, giving progress updates and suggestions to the
                future direction of projects.
              </p>
            </li>
            <li>
              <p>
                Attained theoretical and practical skills in Reinforcement
                learning
                <li>
                  <p>
                    Acquired proficiency in designing environments for
                    training Reinforcement Learning agents using physics
                    libraries in Python.
                  </p>
                </li>
                <li>
                  <p>
                    Successfully deployed, fine-tuned hyperparameters, and
                    conducted evaluations of Reinforcement Learning agents
                    using stable baselines.
                  </p>
                </li>
                <li>
                  <p>
                    Developed educational materials and academic write-ups
                    on the Reinforcement Learning project.
                  </p>
                </li>
                <li>
                  <p>
                    Developed interpersonal relationships with team members
                    and colleagues in a professional setting.
                  </p>
                </li>
              </p>
            </li>
          </ul>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary"
            >September 2022 - September 2023 | UK</span
          >
        </div>
      </div>

      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">
            Surrey Anime and Manga Society Signatory Committee
          </h3>
          <div class="subheading mb-3">| Treasurer</div>
          <ul>
            <li>
              <p>
                Two time Society of the year Winner (2022 & 2023) and one
                time Alan Sutherland Award Winner (2023)
              </p>
            </li>
            <li>
              <p>
                Liaisoned with committee members to organise two events per
                week for the largest society at the university of Surrey.
              </p>
            </li>
            <li>
              <p>
                Managed the flow of funds and the societys personal manga
                library collection, as well as organising charity bake sales
                and contacting charities.
                <li>
                  <p>
                    Successfully raised £3,500 in funds for Surrey Marrow,
                    Islamic Relief, Cancer Research UK and Shooting Stars
                    Children’s Hospices.
                  </p>
                </li>
                <li>
                  <p>
                    As well as organised, assigned and distributed work
                    equally between committee members.
                  </p>
                </li>
                <li>
                  <p>
                    erved as Well-being Champion for the society, actively
                    supporting students, signposting them to appropriate
                    services.
                  </p>
                </li>
              </p>
            </li>
          </ul>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">April 2021 – April 2023 | UK</span>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">
            HK Public Affairs and Social Services Society Committee
          </h3>
          <div class="subheading mb-3">| Public Announcement Officer</div>

          <ul>
            <li>
              <p>
                Led the subcommittee team to participate in public speaking
                forums, prepare the team for debates and adjudicate debates
                with other universities.
              </p>
            </li>
            <li>
              <p>
                Wrote up bi-monthly news bits for social media posts, as
                well as wrote up most of the formal documents for the
                students union.
              </p>
            </li>
          </ul>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">April 2021 - Present | UK</span>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">Computer Science Course Rep</h3>
          <div class="subheading mb-3">| First year + Second year</div>

          <ul>
            <li>
              <p>
                Worked with other computer science course representatives
                conveying concerns with the course to module leaders and
                lecturers.
              </p>
            </li>
            <li>
              <p>
                Discussed with lecturers to find solutions benefiting both
                student university experience, in turn to improve the
                quality of the degree for future students.
              </p>
            </li>
          </ul>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">| 2020 – Present | UK</span>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">INTERNSHIP AT DAYTON INDUSTRIES</h3>
          <div class="subheading mb-3">| Intern</div>

          <ul>
            <li>
              <p>
                Experience with BLE technology interacting with a smartwatch
                heartbeat sensor using JavaScript.
              </p>
            </li>
            <li>
              <p>
                Field testing energy efficiency, sensitivity, and
                effectiveness of different smart watch IR sensors from a
                final product and early design perspective.
              </p>
            </li>
            <li>
              <p>
                GUI design for different smart watch faces as well as GUI
                layout for mobile app companion integration.
              </p>
            </li>
          </ul>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">2019 June – August | HK </span>
        </div>
      </div>

    </div>
  </section>
  <hr class="m-0" />

  <!-- Education-->

  <section class="resume-section" id="education">
    <div class="resume-section-content">
      <h2 class="mb-5">Education</h2>
      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">University of Surrey</h3>
          <div class="subheading mb-3">BSc. Hons</div>
          <div>Computer Science with a year in placement</div>
          <p>First Year: 79%</p>
          <p>Second Year: 77%</p>
          <p>Final Year: First-Class Honours</p>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">September 2020 - September 2024 | UK</span>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between">
        <div class="flex-grow-1">
          <h3 class="mb-0">German Swiss International School</h3>
          <div class="subheading mb-3">Primary and Secondary School</div>
          <p>
            IB Grade: 7-5 (38/45 Total) | HL - Computer Science,
            Anthropology, Economics SL - German B, Math, English
            Literature<br />
            10 IGCSEs Grades from: A*-B : Math (A), Computer Science (A),
            Physics (A)
          </p>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">Sept 2008-2020 | HK</span>
        </div>
      </div>
    </div>
  </section>
  <hr class="m-0" />

  <!-- Skills-->

  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">Skills</h2>
      <div class="subheading mb-3">Programming Languages & Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
        <li class="list-inline-item"><i class="fab fa-php"></i></li>
        <li class="list-inline-item"><i class="fab fa-java"></i></li>
        <li class="list-inline-item"><i class="fab fa-python"></i></li>
      </ul>
      <div class="subheading mb-3">Projects & Modules</div>
      <ul class="fa-ul mb-0">
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Final Year Project: "Applying Reinforcement Learning in Pokémon
          Red to explore complex multi-reward environments"
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Computer Security: Implementations of various cryptography
          algorithms in Python and Elixir
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Artifical Intelligence: Supervised Machine Learning of CNN Image
          Recognition of Kidney cells
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Parallel Computing: Solving programming challenges using nvidia
          cuda cores
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Software Engineering: Web Application using Vue and Nuxt framework
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Computer Networking: Implementing a custom made Peer-to-Peer
          network protocol in Python
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Data Structures and Algorithms
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Advanced Algorithms
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Distributed Systems: Implementation of Paxos in Elixir with Leader
          Election and Best Effort Broadcast
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Operating Systems: Implementing a non-Contiguous Memory System in
          Java
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Computer Logic: Making hangman game within ARM Assembly
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Information Security Management
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Information Retrieval
        </li>

        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Foundations of Computing
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Web Application Development
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Web and Database Systems
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Programming Fundamentals
        </li>
      </ul>
    </div>
  </section>
  <hr class="m-0" />

  <!-- Interests-->

  <section class="resume-section" id="interests">
    <div class="resume-section-content">
      <h2 class="mb-5">Interests</h2>
      <p>
        When im not lurking in the shadows of my desktop at home, I enjoy
        investing most of my time into my hobbies and passion projects. When
        there is a special occasion coming up, I like to bake cakes and
        pasteries, such as carrot cake and tiramisu. If I am not in the
        kitchen baking or cooking I could be tinkering away with one of my
        custom PC builds or one of my many custom mechanical keyboards,
        testing out different sound profiles or switch types. My passion for
        keyboard goes so far that I sometimes work on a digital art design
        for a personalized deskmat or work on designing a PCB
      </p>
      <p class="mb-1">
        When I feel adventurous and want to be active, I would walk to the
        sports park and spend my afternoon rock climbing at the in door
        climbing gym. However, I do miss the days when I was part of the
        ball hockey and field hockey team in primary and secondary school.
        When I do have more free time over summer or winter breaks I do also
        brush on my taekwondo skills. <br />
      </p>
    </div>
  </section>
  <hr class="m-0" />
</div>
<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
</body>
`;

export default function Page() {
  return (
    <div>
              <div className = "padded-body">
        <main className="min-h-screen bg-gray-100">
        <RawHtmlComponent htmlContent={rawHtml} />
        </main>

        <Script
          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        </div>
      
    </div>
  );
};
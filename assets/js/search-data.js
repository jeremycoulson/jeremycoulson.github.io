// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "A few highlighted research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-group",
          title: "group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-our-paper-data-enabled-predictive-control-in-the-shallows-of-the-deepc-was-the-winner-of-the-ecc-2019-best-student-paper-award",
          title: 'Our paper Data-Enabled Predictive Control: In the Shallows of the DeePC was the...',
          description: "",
          section: "News",},{id: "news-our-papers-regularized-and-distributionally-robust-data-enabled-predictive-control-and-data-enabled-predictive-control-for-grid-connected-power-converters-were-accepted-to-cdc-2019",
          title: 'Our papers Regularized and Distributionally Robust Data-Enabled Predictive Control and Data-Enabled Predictive Control...',
          description: "",
          section: "News",},{id: "news-i-am-offering-a-masters-project-joint-with-the-robotics-systems-lab-of-eth-on-data-enabled-predictive-control-of-robotic-systems",
          title: 'I am offering a Masters project joint with the Robotics Systems Lab of...',
          description: "",
          section: "News",},{id: "news-check-out-our-new-preprint-on-distributionally-robust-chance-constrained-data-enabled-predictive-control",
          title: 'Check out our new preprint on Distributionally Robust Chance Constrained Data-enabled Predictive Control....',
          description: "",
          section: "News",},{id: "news-i-will-be-giving-a-talk-on-data-driven-control-at-peking-university-s-control-seminar",
          title: 'I will be giving a talk on data-driven control at Peking University’s control...',
          description: "",
          section: "News",},{id: "news-i-will-be-giving-a-talk-at-the-virtual-workshop-learning-sparse-models-theory-and-applications-from-system-identification-to-neural-networks",
          title: 'I will be giving a talk at the virtual workshop “Learning sparse models:...',
          description: "",
          section: "News",},{id: "news-i-will-be-giving-a-talk-for-the-robust-optimization-webinar",
          title: 'I will be giving a talk for the “Robust Optimization Webinar”.',
          description: "",
          section: "News",},{id: "news-talk-at-the-siam-conference-on-control-and-its-applications",
          title: 'Talk at the SIAM Conference on Control and its Applications.',
          description: "",
          section: "News",},{id: "news-invited-seminar-at-purdue-university",
          title: 'Invited seminar at Purdue University.',
          description: "",
          section: "News",},{id: "news-invited-seminar-at-the-university-of-british-columbia",
          title: 'Invited seminar at the University of British Columbia.',
          description: "",
          section: "News",},{id: "news-invited-seminar-at-kassel-university",
          title: 'Invited seminar at Kassel University.',
          description: "",
          section: "News",},{id: "news-invited-seminar-at-the-university-of-wisconsin-madison",
          title: 'Invited seminar at the University of Wisconsin-Madison.',
          description: "",
          section: "News",},{id: "news-top-3-finalist-for-the-kite-teaching-award-for-our-course-where-students-learn-how-to-fly-a-drone-autonomously",
          title: 'Top 3 finalist for the KITE teaching award for our course where students...',
          description: "",
          section: "News",},{id: "news-i-ve-accepted-a-position-as-a-tenure-track-assistant-professor-at-university-of-wisconsin-madison-starting-in-2023",
          title: 'I’ve accepted a position as a tenure track assistant professor at University of...',
          description: "",
          section: "News",},{id: "news-i-ve-been-awarded-the-best-young-author-journal-paper-award-ieee-control-systems-society-swiss-chapter-for-our-paper-on-distributionally-robust-chance-constrained-data-enabled-predictive-control",
          title: 'I’ve been awarded the Best Young Author Journal Paper Award (IEEE Control Systems...',
          description: "",
          section: "News",},{id: "news-talk-at-mtns-international-symposium-on-mathematical-theory-of-networks-and-systems",
          title: 'Talk at MTNS (International Symposium on Mathematical Theory of Networks and Systems).',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-phd-thesis-on-data-enabled-predictive-control",
          title: 'I successfully defended my PhD thesis on Data-enabled Predictive Control!',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-join-the-university-of-wisconsin-madison-as-an-assistant-professor",
          title: 'I am excited to join the University of Wisconsin–Madison as an Assistant Professor!...',
          description: "",
          section: "News",},{id: "news-two-talks-at-acc-in-san-diego",
          title: 'Two talks at ACC in San Diego.',
          description: "",
          section: "News",},{id: "news-invited-seminar-talk-at-ucla",
          title: 'Invited seminar talk at UCLA.',
          description: "",
          section: "News",},{id: "news-i-was-interviewed-for-the-phds-in-control-column-of-the-ieee-control-systems-magazine",
          title: 'I was interviewed for the “PhDs in Control” column of the IEEE Control...',
          description: "",
          section: "News",},{id: "news-talk-at-the-pre-conference-workshop-data-driven-predictive-control-whence-and-whither-at-ifac-world-congress-in-japan",
          title: 'Talk at the pre-conference workshop “Data-driven Predictive Control: Whence and Whither?” at IFAC...',
          description: "",
          section: "News",},{id: "news-i-am-honoured-to-have-received-the-eth-medal-for-my-phd-thesis",
          title: 'I am honoured to have received the ETH Medal for my PhD thesis....',
          description: "",
          section: "News",},{id: "news-we-hosted-a-workshop-on-data-driven-control-at-the-cdc-in-milan-you-can-find-the-slides-here",
          title: 'We hosted a workshop on data-driven control at the CDC in Milan. You...',
          description: "",
          section: "News",},{id: "news-i-am-honoured-to-have-received-the-gerald-holdridge-teaching-excellence-award",
          title: 'I am honoured to have received the Gerald Holdridge Teaching Excellence Award.',
          description: "",
          section: "News",},{id: "news-received-the-nsf-career-award",
          title: 'Received the NSF CAREER Award.',
          description: "",
          section: "News",},{id: "projects-adaptive-data-driven-control",
          title: 'Adaptive Data-Driven Control',
          description: "Real-time adaptation of data-driven controllers using streaming data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adaptive_data_driven.html";
            },},{id: "projects-data-enabled-predictive-control-deepc",
          title: 'Data-Enabled Predictive Control (DeePC)',
          description: "Using raw data directly for predictive control of complex systems, bypassing the need for explicit parametric models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deepc.html";
            },},{id: "projects-robust-data-driven-control",
          title: 'Robust Data-Driven Control',
          description: "Designing uncertainty models and robust control methods directly to make data-driven control reliable.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robust_data_driven.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%72%65%6D%79.%63%6F%75%6C%73%6F%6E@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JpiVHJ0AAAAJ", "_blank");
        },
      },];

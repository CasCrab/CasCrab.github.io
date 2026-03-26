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
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-vnegnn-bindingsite-10ev",
        
          title: "VNEGNN Bindingsite - 10EV",
        
        description: "Isoform 4 of Glutamate receptor ionotropic, NMDA 1 from Homo sapiens. PDB 10EV is titled &quot;OX1-Matured in complex with GluN1-GluN2B, full refinement.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10ev/";
          
        },
      },{id: "post-vnegnn-bindingsite-10en",
        
          title: "VNEGNN Bindingsite - 10EN",
        
        description: "Isoform 4 of Glutamate receptor ionotropic, NMDA 1 from Homo sapiens. PDB 10EN is titled &quot;SK3D-Matured in complex with GluN1-GluN2B, full refinement.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10en/";
          
        },
      },{id: "post-vnegnn-bindingsite-10qr",
        
          title: "VNEGNN Bindingsite - 10QR",
        
        description: "Transitional endoplasmic reticulum ATPase from Homo sapiens. PDB 10QR is titled &quot;Structure of human VCP/p97 hexamer bound to ADP (DMSO control).&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10qr/";
          
        },
      },{id: "post-vnegnn-bindingsite-13zq",
        
          title: "VNEGNN Bindingsite - 13ZQ",
        
        description: "3Dpol RNA Dependent RNA Polymerase from enterovirus D68. PDB 13ZQ is titled &quot;PanDDA analysis group deposition -- Crystal Structure of Enterovirus D68 3Dpol in complex with Z509756472.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-13zq/";
          
        },
      },{id: "post-vnegnn-bindingsite-10qq",
        
          title: "VNEGNN Bindingsite - 10QQ",
        
        description: "Transitional endoplasmic reticulum ATPase from Homo sapiens. PDB 10QQ is titled &quot;Structure of human VCP/p97 dodecamer bound to ADP (DMSO control).&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10qq/";
          
        },
      },{id: "post-vnegnn-bindingsite-10or",
        
          title: "VNEGNN Bindingsite - 10OR",
        
        description: "Envelope glycoprotein 1 from Sudan ebolavirus. PDB 10OR is titled &quot;Cryo-EM structure of Sudan Ebolavirus GP bound by three neutralizing antibodies 316L, 523S and 294S.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10or/";
          
        },
      },{id: "post-vnegnn-bindingsite-10gw",
        
          title: "VNEGNN Bindingsite - 10GW",
        
        description: "6-phosphogluconate dehydrogenase from Gluconobacter oxydans. PDB 10GW is titled &quot;Crystal structure of tetrameric 6-phosphogluconate dehydrogenase from Gluconobacter oxydans in complex with 6-phosphogluconate.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10gw/";
          
        },
      },{id: "post-vnegnn-bindingsite-10op",
        
          title: "VNEGNN Bindingsite - 10OP",
        
        description: "Envelope glycoprotein 1 from Sudan ebolavirus. PDB 10OP is titled &quot;Cryo-EM structure of Sudan Ebolavirus GP bound by three neutralizing antibodies 545S, 523S and 294S.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10op/";
          
        },
      },{id: "post-vnegnn-bindingsite-10dj",
        
          title: "VNEGNN Bindingsite - 10DJ",
        
        description: "Tyrosine-protein kinase Fyn from Homo sapiens. PDB 10DJ is titled &quot;Fyn Kinase Domain-Saracatinib Complex Structure.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10dj/";
          
        },
      },{id: "post-vnegnn-bindingsite-10ij",
        
          title: "VNEGNN Bindingsite - 10IJ",
        
        description: "Microtubule-associated protein tau from Homo sapiens. PDB 10IJ is titled &quot;S305I Frontotemporal Lobar Degeneration (FTLD) type I tau filament.&quot;",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vnegnn-bindingsite-10ij/";
          
        },
      },{id: "post-the-mitochondria-cleanup-switch-with-a-therapy-gap",
        
          title: "The Mitochondria Cleanup Switch With a Therapy Gap",
        
        description: "PINK1 is central to mitochondrial cleanup in Parkinson biology, but direct targeting remains limited.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/pink1/";
          
        },
      },{id: "post-a-parkinson-protein-with-many-partners-but-no-drug",
        
          title: "A Parkinson Protein With Many Partners but No Drug",
        
        description: "PARK7 sits in a dense Parkinson stress network, yet direct therapies remain limited.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/park7/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

// ----------------------
// Data Setup
// ----------------------

// Physics Chapters (use full URLs in your implementation)
const physicsChapters = [
  { name: "1 U & D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F28%2F48ec8156-745f-4c18-a0fc-848243898ff6-ruler.png&w=256&q=75" },
  { name: "2 Vectors", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F28%2Ff9a838d7-9298-42cf-8f98-09ed0f87e050-cartesian-axes.png&w=256&q=75" },
  { name: "3 Kinematics-1D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F12%2F06%2F94550f5c-fe9d-477b-9078-e26405ceb744-physics.png&w=256&q=75" },
  { name: "4 Kinematics-2D", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F12%2F06%2Fe91cd274-23cf-43b2-8b9f-f648ac2d829a-luggage.png&w=256&q=75" },
  { name: "5 NLM", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F25%2F180be2ff-2f85-4306-8087-ad33ba67daef-gravitation.png&w=256&q=75" },
  { name: "6 Friction", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2F56528863-beb4-4576-aad0-9990e6d5bc1f-forcepng&w=256&q=75" },
  { name: "7 Circular motion", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2F907088a9-a2f9-4626-ab01-321b03180eee-london-eye.png&w=256&q=75" },
  { name: "8 WPE", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F26%2Ff3817113-c7f8-455c-930c-9b1270d4139c-long-throw.png&w=256&q=75" },
  { name: "8 WPE", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F26%2Ff3817113-c7f8-455c-930c-9b1270d4139c-long-throw.png&w=256&q=75" },
  { name: "9 Center of Mass", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2F8e1b2c3f-3dde-4935-a0de-7eddd1c45002-spring.png&w=256&q=75" },
  { name: "10 Rotational Mech.", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F27%2F98da09d5-8783-4b6b-8335-caa360a0a69a-rotation.png&w=256&q=75" },
  { name: "11 Gravitation", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2F745ec381-8015-43bb-9927-16955ed644cf-handpng&w=256&q=75" },
  { name: "12 SHM", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F26%2F2563111e-330b-4929-978f-0dde2dbd9e7f-physics.png&w=256&q=75" },
  { name: "13 Calorimetry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F23%2Ff51d5fe7-a810-4ec6-ab4d-49f97c9a15dc-Calorimetry.png&w=256&q=75" },
  { name: "14 Elasticity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2F4d6c7375-63a0-41e1-8d60-4504e85272bf-elasticity.png&w=256&q=75" },
  { name: "15 Thermal Exp.", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F25%2F183d098e-19bf-47db-b7b7-9461968386b1-heat-system.png&w=256&q=75" },
  { name: "16 Heat transfer", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2Fd62b2f55-b668-4923-8469-a3e1cc7b9f9d-hot-foodpng&w=256&q=75" },
  { name: "17 KTG", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F25%2Fc6027c21-b487-43de-b9c3-af7a6530f445-Kinetic-Theory-of-Gases-icon.png&w=256&q=75" },
  { name: "18 Thermodynamics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F25%2F9993b112-ee22-421a-a599-87db0be8ea43-thermodynamics.png&w=256&q=75" },
  { name: "19 Wave on string", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F28%2F1b89a743-fdb5-4ccc-a96d-b2bcd5faa449-physics-1.png&w=256&q=75" },
  { name: "20 Sound waves", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F26%2Fca1711d6-ccce-4790-a59c-3389c8b40246-voice.png&w=256&q=75" },
  { name: "21 Fluid Mechanics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2Fd4e05373-b256-4aea-a067-02bd0830f86f-fluid-mechanicspng&w=256&q=75" },
  { name: "22 Electrostatic", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2Fb9c12fbc-7b55-4cc2-b8e1-bf54a90282ed-magnetic-fields.png&w=256&q=75" },
  { name: "23 Current Electricity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2Fee0ca076-0426-4173-ac72-e6b7073a9962-electric-current.png&w=256&q=75" },
  { name: "24 Capacitance", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F21%2F343623f2-7e6b-4463-8c9f-3db0c96fd450-capacitor.png&w=256&q=75" },
  { name: "25 MEC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F25%2F7e5f0ee2-56e2-4755-88f2-026b6f995708-Magnetic.png&w=256&q=75" },
  { name: "26 Magnetism", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F25%2F45a4b0e0-837f-4778-90c9-1f8c3abf4832-magnetic-1.png&w=256&q=75" },
  { name: "27 EMI", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2Fb99ab7fd-cc78-4594-a7a5-89c203d93ab8-Electromagnetic%20Induction%20(EMI).png&w=256&q=75" },
  { name: "28 AC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F21%2F9a3a3f62-57d8-44ea-94de-4ea9a5a995d1-circuit.png&w=256&q=75" },
  { name: "29 Atomic Structure", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F21%2F5c111f1e-455b-41d4-9ee2-c8e422c96f3f-atom.png&w=256&q=75" },
  { name: "30 Dual Nature", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F21%2F8b2f11df-d2ea-4bb8-9944-b19dcfd47659-radiation.png&w=256&q=75" },
  { name: "31 X-Ray", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fa57fa7d1-76eb-4305-a748-a4fceb3910be-x-rays.png&w=256&q=75" },
  { name: "32 Nuclear physics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F25%2F7b743bff-d68f-4fd0-91da-10d1a6924db3-nuclear-bomb.png&w=256&q=75" },
  { name: "33 Radioactivity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F26%2F151cd310-fe7f-4b65-9030-4da80632a526-atom.png&w=256&q=75" },
  { name: "34 Ray Optics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F26%2Fff8f25bb-e70e-45c3-be6a-19e6ea4aa930-prism.png&w=256&q=75" },
  { name: "35 EM Waves", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2F24a317f6-ea30-43f4-8399-8f72bf0549f1-electromagnetic.png&w=256&q=75" },
  { name: "36 Wave Optics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F28%2Ff9315ea1-47f6-4b33-ba56-e5939874fb77-optic.png&w=256&q=75" },
  { name: "37 Errors", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F24%2F09a1dfca-9db4-4f46-a3d0-332a36b28970-graphic-designpng&w=256&q=75" },
  { name: "38 Semiconductor", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F11%2F26%2Fa4703f24-5bc7-4ffe-8a03-73848b8bad8c-ram.png&w=256&q=75" }
  ];

// Chemistry Chapters
const chemistryChapters = [
  { name: "Atomic Structure", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fd72fd58c-5959-4751-be07-6e70901e2c45-atom.png&w=256&q=75" },
  { name: "Periodic Table", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F491bca25-f27d-4ff8-9bc0-1e7ff05d83bf-periodic-table%20(1).png&w=256&q=75" },
  { name: "Chemical Bonding", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F192a8747-434e-4dd0-9ae6-13b07bdd8741-chemical-bond.png&w=256&q=75" },
  { name: "Mole Concept", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F802433c9-42d8-431a-9a12-8a987579c07a-mass.png&w=256&q=75" },
  { name: "States of Matter", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fae26f46f-49a3-4916-b818-e4aa5cef2c11-state-of-matter.png&w=256&q=75" },
  { name: "Thermodynamics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F522bb59c-2160-4c0e-9a73-87078c55db6b-thermodynamic.png&w=256&q=75" },
  { name: "Thermochemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fc50e0f92-b4cc-4324-bbb2-27fc8fe1ad78-thermodynamics.png&w=256&q=75" },
  { name: "Chemical Equilibrium", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fac598c7a-f725-464f-a7a7-84bdfe69f835-exchange.png&w=256&q=75" },
  { name: "Ionic Equilibrium", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fb641a92f-15c6-413b-b062-d224c72dd238-ph-meter.png&w=256&q=75" },
  { name: "Redox Reaction", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F26%2F81d04eee-ae5f-4f75-8d02-a56e699fa9dd-electron.png&w=256&q=75" },
  { name: "IUPAC", img: "https://via.placeholder.com/80?text=IUPAC" },
  { name: "GOC", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F40302438-e193-4787-8c1b-aebd86c9624b-potassium-sorbate.png&w=256&q=75" },
  { name: "Isomerism", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F75d185dd-62ba-4426-bf46-080c4acb637c-chemistry%20(5).png&w=256&q=75" },
  { name: "Hydrocarbons", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F9e55a0c1-1662-4c73-bb32-a494b0902e8f-molecule%20(3).png&w=256&q=75" },
  { name: "Environmental Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F1c1de591-5a64-4278-ab08-94c44b6045f9-pollution.png&w=256&q=75" },
  { name: "Hydrogen", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fa9c49487-a374-4792-b638-6a044c541cf5-hydrogen.png&w=256&q=75" },
  { name: "s-Block Elements", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Febdbefff-5402-4718-99cd-5b65147f12da-hydrogen%20(1).png&w=256&q=75" },
  { name: "p-Block Elements", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F6cdb00a1-0c06-4fbf-8173-03c1eb28c5cc-aluminum.png&w=256&q=75" },
  { name: "The Solid State", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F8d6d7b15-2a95-41a7-bff8-dcbbf95ce177-solid.png&w=256&q=75" },
  { name: "Liquid Solution", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fef065765-5bf9-486b-a9e2-5dfc2517f15e-glass.png&w=256&q=75" },
  { name: "Chemical Kinetics", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F35fc9fbe-bf2e-4cce-b11c-344095320e57-catalyst.png&w=256&q=75" },
  { name: "Nuclear Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F30adb9a5-c84a-4c50-bdde-01d53b60c7fe-nuclear-energy.png&w=256&q=75" },
  { name: "Radioactivity", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F43ba68ee-ada7-4b45-a76f-188fcb46ee70-radiation.png&w=256&q=75" },
  { name: "Electro Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fc257a0ae-f785-49ea-aad6-972e8c59f851-electrophoresis.png&w=256&q=75" },
  { name: "Surface Chemistry", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F49e28bef-831f-4607-af53-7afb2071a048-rust.png&w=256&q=75" },
  { name: "Coordination Compounds", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fdfadfe13-cca7-45ff-bbe9-e9517e4af975-molecule%20(1).png&w=256&q=75" },
  { name: "Metallurgy", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fd76270d8-81f5-4355-ade5-f0a1c7174ec0-metallurgy.png&w=256&q=75" },
  { name: "d & f Block", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F97c2e36e-54db-417b-bb26-ef5b80e3ca43-scandium.png&w=256&q=75" },
  { name: "Optical Isomerism", img: "https://via.placeholder.com/80?text=Optical+Isomerism" },
  { name: "Halogen Derivative", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fbfc98cea-529e-4c39-8e6c-516e75d28c46-adrenaline.png&w=256&q=75" },
  { name: "Alcohol, Phenol, Ether", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fbfc98cea-529e-4c39-8e6c-516e75d28c46-adrenaline.png&w=256&q=75" },
  { name: "Aldehydes, Ketones", img: "https://via.placeholder.com/80?text=Aldehydes+Ketones" },
  { name: "Oxidation Reduction", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F028a610b-7002-43fa-b68e-3034223ccf63-rust.png&w=256&q=75" },
  { name: "Carboxylic Acids & Amines", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fb2cd0f42-4d81-439a-8a37-6f0a5074bf84-molecule.png&w=256&q=75" },
  { name: "Biomolecules", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fbe43669e-9e57-417d-873f-c224075a0e80-compound.png&w=256&q=75" },
  { name: "Polymers", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F054fec2e-c4c6-4117-8260-0642866aee01-nanotechnology.png&w=256&q=75" },
  { name: "Chem. In Everyday Life", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Fffe66da8-94ca-4735-b6f5-64777776c069-dental-hygiene.png&w=256&q=75" },
  { name: "p-Block(15-18)", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2Facb94606-5288-4c4a-b478-069f35940b83-phosphorus.png&w=256&q=75" },
  { name: "Salt Analysis", img: "https://app.esaral.com/_next/image?url=https%3A%2F%2Fmyesaralbucket.s3.amazonaws.com%2FeSaral%2Fimages%2F2024%2F10%2F17%2F03723774-3a20-4862-a10f-8d648d0615a2-research.png&w=256&q=75" }
];




// Biology chapters array (Class XI + Class XII)
const biologyChapters = [
  // Class XI
  { name: "1. The Living World", img: "https://via.placeholder.com/80?text=Living+World" },
  { name: "2. Biological Classification", img: "https://via.placeholder.com/80?text=Biological+Classification" },
  { name: "3. Plant Kingdom", img: "https://via.placeholder.com/80?text=Plant+Kingdom" },
  { name: "4. Animal Kingdom", img: "https://via.placeholder.com/80?text=Animal+Kingdom" },
  { name: "5. Morphology of Flowering Plants", img: "https://via.placeholder.com/80?text=Morphology+of+Flowering+Plants" },
  { name: "6. Anatomy of Flowering Plants", img: "https://via.placeholder.com/80?text=Anatomy+of+Flowering+Plants" },
  { name: "7. Structural Organization in Animals", img: "https://via.placeholder.com/80?text=Structural+Organization+in+Animals" },
  { name: "8. Cell: The Unit of Life", img: "https://via.placeholder.com/80?text=Cell+Unit+of+Life" },
  { name: "9. Biomolecules", img: "https://via.placeholder.com/80?text=Biomolecules" },
  { name: "10. Cell Cycle and Cell Division", img: "https://via.placeholder.com/80?text=Cell+Cycle+%26+Division" },
  { name: "11. Photosynthesis in Higher Plants", img: "https://via.placeholder.com/80?text=Photosynthesis" },
  { name: "12. Respiration in Plants", img: "https://via.placeholder.com/80?text=Respiration+in+Plants" },
  { name: "13. Plant Growth and Development", img: "https://via.placeholder.com/80?text=Plant+Growth" },
  { name: "14. Breathing and Exchange of Gases", img: "https://via.placeholder.com/80?text=Breathing+%26+Exchange" },
  { name: "15. Body Fluids and Circulation", img: "https://via.placeholder.com/80?text=Body+Fluids+%26+Circulation" },
  { name: "16. Excretory Products and their Elimination", img: "https://via.placeholder.com/80?text=Excretory+Products" },
  { name: "17. Locomotion and Movement", img: "https://via.placeholder.com/80?text=Locomotion+%26+Movement" },
  { name: "18. Neural Control and Coordination", img: "https://via.placeholder.com/80?text=Neural+Control" },
  { name: "19. Chemical Coordination and Integration", img: "https://via.placeholder.com/80?text=Chemical+Coordination" },

  // Class XII
  { name: "1. Reproduction in Organism", img: "https://via.placeholder.com/80?text=Reproduction+in+Organism" },
  { name: "2. Sexual Reproduction in Flowering Plants", img: "https://via.placeholder.com/80?text=Sexual+Reproduction+in+Plants" },
  { name: "3. Human Reproduction", img: "https://via.placeholder.com/80?text=Human+Reproduction" },
  { name: "4. Reproductive Health", img: "https://via.placeholder.com/80?text=Reproductive+Health" },
  { name: "5. Principles of Inheritance and Variation", img: "https://via.placeholder.com/80?text=Inheritance+%26+Variation" },
  { name: "6. Molecular Basis of Inheritance", img: "https://via.placeholder.com/80?text=Molecular+Basis+of+Inheritance" },
  { name: "7. Evolution", img: "https://via.placeholder.com/80?text=Evolution" },
  { name: "8. Human Health and Diseases", img: "https://via.placeholder.com/80?text=Human+Health+%26+Diseases" },
  { name: "9. Strategies for Enhancement in Food Production", img: "https://via.placeholder.com/80?text=Food+Production" },
  { name: "10. Microbes in Human Welfare", img: "https://via.placeholder.com/80?text=Microbes+in+Welfare" },
  { name: "11. Biotechnology- Principles and Processes", img: "https://via.placeholder.com/80?text=Biotech+Principles" },
  { name: "12. Biotechnology and its Application", img: "https://via.placeholder.com/80?text=Biotech+Applications" },
  { name: "13. Organism and Population", img: "https://via.placeholder.com/80?text=Organism+%26+Population" },
  { name: "14. Ecosystem", img: "https://via.placeholder.com/80?text=Ecosystem" },
  { name: "15. Biodiversity and its Conservation", img: "https://via.placeholder.com/80?text=Biodiversity+Conservation" },
  { name: "16. Environmental Issues", img: "https://via.placeholder.com/80?text=Environmental+Issues" }
];



















// Subjects Data: Physics, Chemistry, Biology
const subjectsData = {
  "Physics": { 
    img: "https://imgs.search.brave.com/nV4aDWAjU_Ssb6Y4Skpdh5SsqbVba1y50oQlchwZp9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjgw/NDEyODc0L3Bob3Rv/L2F0b21pYy1tb2xl/Y3VsZS1vbi1ibGFj/a2JvYXJkLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz10OG5j/UVdUc1lHS3pleExi/OTI5bFY5SGlON2p2/QXhqZ1puVUh1bGNr/QkE4PQ", 
    chapters: physicsChapters 
  },
  "Chemistry": { 
    img: "https://static.vecteezy.com/system/resources/thumbnails/000/224/358/small_2x/chemistry-icons-vector.jpg", 
    chapters: chemistryChapters 
  },
  "Biology": { 
    img: "https://img.freepik.com/free-vector/science-biology-scribbles_23-2147501586.jpg", 
    chapters: biologyChapters 
  }
};

// ----------------------
// Subtopics for NEET (6 tasks)
// ----------------------
const subtopics = [
  { key: "ncert", label: "NCERT", type: "checkbox" },
  { key: "referenceBook", label: "Reference Book", type: "checkbox" },
  { key: "modules", label: "Coaching Modules", type: "checkbox" },
  { key: "pyqs", label: "PYQ's", type: "checkbox" },
  { key: "assertionReason", label: "Assertion & Reasoning", type: "checkbox" },
  { key: "handwrittenNotes", label: "Handwritten Notes", type: "checkbox" }
];

// Default data for a chapter: all subtopics unchecked
const defaultChapterData = {};
subtopics.forEach(task => {
  defaultChapterData[task.key] = false;
});

// Local Storage Key
const STORAGE_KEY = "neetStudyData";

// Colors for subtopic backgrounds
const subtopicColors = ["var(--subtopic-color-1)", "var(--subtopic-color-2)", "var(--subtopic-color-3)"];

// ----------------------
// DOM Elements
// ----------------------
const subjectsView = document.getElementById("subjects-view");
const subjectsContainer = document.getElementById("subjects-container");
const chaptersView = document.getElementById("chapters-view");
const chaptersContainer = document.getElementById("chapters-container");
const subjectTitleElem = document.getElementById("subject-title");
const chapterDetailView = document.getElementById("chapter-detail-view");
const chapterTitleElem = document.getElementById("chapter-title");
const chapterImageElem = document.getElementById("chapter-image");
const progressFillElem = document.getElementById("progress-fill");
const progressPercentElem = document.getElementById("progress-percent");
const subtopicsContainer = document.getElementById("subtopics-container");

const backToSubjectsBtn = document.getElementById("back-to-subjects");
const backToChaptersBtn = document.getElementById("back-to-chapters");
const resetSubjectBtn = document.getElementById("reset-subject");
const markAllCompleteBtn = document.getElementById("mark-all-complete");
const resetChapterBtn = document.getElementById("reset-chapter");

let currentSubject = "";
let currentChapter = "";

// ----------------------
// Data Initialization
// ----------------------
function initializeData() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const initData = {};
    for (let subject in subjectsData) {
      initData[subject] = {};
      subjectsData[subject].chapters.forEach(ch => {
        initData[subject][ch.name] = { ...defaultChapterData };
      });
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
  }
}

function getData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function updateData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ----------------------
// Utility: Calculate Progress
// ----------------------
function calculateProgress(chapterData) {
  let total = subtopics.length;
  let completed = 0;
  subtopics.forEach(task => {
    if (chapterData[task.key] === true) {
      completed++;
    }
  });
  return Math.round((completed / total) * 100);
}

// ----------------------
// Rendering Functions
// ----------------------

// Render Subjects
function renderSubjects() {
  console.log("Rendering subjects...");
  subjectsContainer.innerHTML = "";
  for (let subject in subjectsData) {
    const subjectObj = subjectsData[subject];
    const card = document.createElement("div");
    card.classList.add("card");
    if (subject === "Physics") card.classList.add("subject-physics");
    else if (subject === "Chemistry") card.classList.add("subject-chemistry");
    else if (subject === "Biology") card.classList.add("subject-biology");

    card.innerHTML = `
      <img src="${subjectObj.img}" alt="${subject}">
      <h3>${subject}</h3>
    `;
    card.addEventListener("click", () => {
      currentSubject = subject;
      subjectTitleElem.textContent = subject;
      renderChapters(subject);
      subjectsView.classList.add("hidden");
      chaptersView.classList.remove("hidden");
    });
    subjectsContainer.appendChild(card);
  }
  console.log("Subjects rendered", subjectsContainer.children);
}

// Render Chapters
function renderChapters(subject) {
  chaptersContainer.innerHTML = "";
  const data = getData();
  subjectsData[subject].chapters.forEach(ch => {
    const chapterData = data[subject][ch.name];
    const progress = calculateProgress(chapterData);
    const card = document.createElement("div");
    card.classList.add("card", "chapter-card");
    if (subject === "Physics") card.classList.add("subject-physics");
    else if (subject === "Chemistry") card.classList.add("subject-chemistry");
    else if (subject === "Biology") card.classList.add("subject-biology");

    card.innerHTML = `
      <img src="${ch.img}" alt="${ch.name}">
      <div>
        <h3>${ch.name}</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      currentChapter = ch.name;
      renderChapterDetail(subject, ch.name);
      chaptersView.classList.add("hidden");
      chapterDetailView.classList.remove("hidden");
    });
    chaptersContainer.appendChild(card);
  });
}

// Render Chapter Detail
function renderChapterDetail(subject, chapterName) {
  chapterTitleElem.textContent = chapterName;
  const chObj = subjectsData[subject].chapters.find(x => x.name === chapterName);
  chapterImageElem.src = chObj ? chObj.img.replace("80", "100") : "https://via.placeholder.com/100?text=No+Image";
  
  const data = getData();
  const chapterData = data[subject][chapterName];
  const progress = calculateProgress(chapterData);
  progressFillElem.style.width = `${progress}%`;
  progressPercentElem.textContent = `${progress}%`;

  subtopicsContainer.innerHTML = "";
  subtopics.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("subtopic");
    let color = (index % 3 === 0) ? "var(--subtopic-color-1)" :
                (index % 3 === 1) ? "var(--subtopic-color-2)" : "var(--subtopic-color-3)";
    div.style.backgroundColor = color;

    const label = document.createElement("label");
    label.textContent = task.label;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = chapterData[task.key];
    input.addEventListener("click", e => e.stopPropagation());
    input.addEventListener("change", () => {
      chapterData[task.key] = input.checked;
      saveChapterData(subject, chapterName, chapterData);
    });
    div.addEventListener("click", () => {
      input.checked = !input.checked;
      chapterData[task.key] = input.checked;
      saveChapterData(subject, chapterName, chapterData);
    });

    div.appendChild(label);
    div.appendChild(input);
    subtopicsContainer.appendChild(div);
  });
}

// ----------------------
// Data Saving Function
// ----------------------
function saveChapterData(subject, chapterName, chapterData) {
  let data = getData();
  data[subject][chapterName] = chapterData;
  updateData(data);
  const progress = calculateProgress(chapterData);
  progressFillElem.style.width = `${progress}%`;
  progressPercentElem.textContent = `${progress}%`;
  renderChapters(subject);
}

// ----------------------
// Mark All Complete
// ----------------------
function markAllComplete(subject, chapterName) {
  let data = getData();
  let chapterData = data[subject][chapterName];
  subtopics.forEach(task => {
    chapterData[task.key] = true;
  });
  updateData(data);
  renderChapterDetail(subject, chapterName);
  renderChapters(subject);
}

// ----------------------
// Reset Chapter & Subject
// ----------------------
function resetChapter(subject, chapterName) {
  let data = getData();
  data[subject][chapterName] = { ...defaultChapterData };
  updateData(data);
  renderChapterDetail(subject, chapterName);
  renderChapters(subject);
}

function resetSubject(subject) {
  let data = getData();
  subjectsData[subject].chapters.forEach(ch => {
    data[subject][ch.name] = { ...defaultChapterData };
  });
  updateData(data);
  renderChapters(subject);
}

// ----------------------
// Event Listeners
// ----------------------
backToSubjectsBtn.addEventListener("click", () => {
  chaptersView.classList.add("hidden");
  document.getElementById("subjects-view").classList.remove("hidden");
});

backToChaptersBtn.addEventListener("click", () => {
  chapterDetailView.classList.add("hidden");
  chaptersView.classList.remove("hidden");
});

resetSubjectBtn.addEventListener("click", () => {
  if (currentSubject && confirm("Reset all progress for this subject?")) {
    resetSubject(currentSubject);
  }
});

markAllCompleteBtn.addEventListener("click", () => {
  if (currentSubject && currentChapter) {
    markAllComplete(currentSubject, currentChapter);
  }
});

resetChapterBtn.addEventListener("click", () => {
  if (currentSubject && currentChapter && confirm("Reset this chapter?")) {
    resetChapter(currentSubject, currentChapter);
  }
});

// ----------------------
// Data Initialization & Versioning
// ----------------------
const CURRENT_VERSION = '1.0';

function initializeData() {
  const storedVersion = localStorage.getItem("neetStudyVersion");
  if (storedVersion !== CURRENT_VERSION) {
    localStorage.clear();
    localStorage.setItem("neetStudyVersion", CURRENT_VERSION);
  }
  if (!localStorage.getItem(STORAGE_KEY)) {
    const initData = {};
    for (let subject in subjectsData) {
      initData[subject] = {};
      subjectsData[subject].chapters.forEach(ch => {
        initData[subject][ch.name] = { ...defaultChapterData };
      });
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
  }
}

// ----------------------
// Initialization on DOMContentLoaded
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  initializeData();
  renderSubjects();
});

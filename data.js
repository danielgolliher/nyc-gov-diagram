// Enriched node data. Verified May 2026.
// Greenbook URLs use the canonical a856-gbol endpoint; greenbook.nyc.gov redirects there.
window.NYC_GOV_DATA = {

  // ============ FOUNDATIONAL LEGAL ============
  "us-constitution": {
    name: "U.S. Constitution",
    silo: "legal",
    subhead: "Federal supreme law — and silent on cities",
    description: "The U.S. Constitution does not mention cities or local governments. Under the Tenth Amendment, all authority over local government is reserved to the states, which is why cities are legally 'creatures of the state' (Dillon's Rule, 1868). NYC's powers therefore flow from NYS, not directly from the federal Constitution.",
    keyFacts: [
      "Dillon's Rule formalized by Judge John F. Dillon (Iowa) in 1868",
      "~40 states apply Dillon's Rule; the rest use constitutional home rule",
      "NY is a home-rule state — see NYS Constitution Article IX"
    ],
    source: { label: "Home rule in the U.S. (Wikipedia)", url: "https://en.wikipedia.org/wiki/Home_rule_in_the_United_States" }
  },
  "nys-constitution": {
    name: "NYS Constitution — Article IX",
    silo: "legal",
    subhead: "Home rule for local governments",
    description: "Article IX of the New York State Constitution — the 'Home Rule' article, adopted 1963 — both grants local governments affirmative power over their own property, affairs, and government, and restricts the Legislature from interfering with local affairs by 'special law' except on home rule request or via general law. Contains a Bill of Rights for Local Governments (§ 1).",
    keyFacts: [
      "Current Article IX adopted in 1963",
      "First extended constitutional home rule to all NY cities, towns, villages, and counties outside NYC",
      "Implemented by the Municipal Home Rule Law"
    ],
    source: { label: "NYS Constitution Art. IX (Justia)", url: "https://law.justia.com/constitution/new-york/article-ix/" }
  },
  "nyc-charter": {
    name: "NYC Charter",
    silo: "legal",
    subhead: "City's constitution",
    description: "The NYC Charter is the city's foundational governing document — it defines the structure, powers, and procedures of every elected office, the Council, the budget process, the agencies, the Community Boards, and ULURP.",
    keyFacts: [
      "First Greater New York Charter adopted 1897 (effective 1898 at consolidation)",
      "Current 'short-form' Charter approved by referendum 1936 (effective 1938)",
      "Major revisions: 1961, 1975, 1989 (post Board of Estimate v. Morris)",
      "Charter Revision Commissions in 2010, 2018, 2019, 2024 (most recent amendments adopted Nov 2024)"
    ],
    source: { label: "NYC Charter (NYC.gov)", url: "https://www.nyc.gov/site/charter/index.page" }
  },
  "admin-code": {
    name: "Administrative Code of the City of New York",
    silo: "legal",
    subhead: "Codified city statutes",
    description: "The Admin Code is the codified body of local laws enacted by the Council and signed by the Mayor. If the Charter is the city's constitution, the Admin Code is its statute book. A local law has status equivalent to a state statute (within home-rule limits) and supersedes earlier ordinances.",
    keyFacts: [
      "~37 titles organized by subject (Public Safety, Transportation, Buildings, etc.)",
      "Maintained alongside the Charter and RCNY by American Legal Publishing under contract with the Law Department"
    ],
    source: { label: "Administrative Code (American Legal Publishing)", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCadmin/0-0-0-1" }
  },
  "rcny": {
    name: "Rules of the City of New York (RCNY)",
    silo: "legal",
    subhead: "Agency regulations — NYC's CFR",
    description: "The RCNY is the compilation of rules and regulations issued by city agencies. ~6,000 rules across 71 titles — one per agency. New rules go through the City Administrative Procedure Act (CAPA) process: notice, public hearing, adoption.",
    keyFacts: [
      "Issued under CAPA — NYC Charter §1041 et seq.",
      "Compiled by the Corporation Counsel under Charter §1045",
      "~100+ rule changes per year"
    ],
    source: { label: "Rules of the City of New York", url: "https://rules.cityofnewyork.us/" }
  },

  // ============ CHARTER OFFICES ============
  "mayor": {
    name: "Mayor of New York City",
    silo: "doing",
    subhead: "Chief executive — Zohran Mamdani (sworn Jan 1, 2026)",
    description: "Chief executive under NYC's 'strong mayor–council' system. Appoints (and may remove) deputy mayors, agency heads, Corporation Counsel, OMB Director, and most members of City boards and commissions. Submits the Preliminary, Executive, and Adopted budgets; signs or vetoes Council legislation (Council can override by two-thirds). Powers governed by Charter Chapter 1.",
    keyFacts: [
      "4-year term, two-term limit",
      "Current: Mayor Zohran Mamdani (sworn in Jan. 1, 2026) — first Muslim, first South Asian, youngest mayor in over a century",
      "Heads ~80 mayoral agencies and offices",
      "Proposes Executive Budget by April 26 each year"
    ],
    source: { label: "NYC Charter Chapter 1", url: "https://nyccharter.readthedocs.io/c01/" }
  },
  "comptroller": {
    name: "NYC Comptroller",
    silo: "doing",
    subhead: "Chief financial officer — Mark D. Levine",
    description: "Independently elected Chief Financial Officer of the City. Audits all agencies; registers contracts (no city contract can be paid without Comptroller registration); manages the city's five pension funds and trust funds; settles claims; issues bonds; publishes the Annual Comprehensive Financial Report.",
    keyFacts: [
      "4-year term, salary $209,050",
      "Current: Mark D. Levine, 52nd Comptroller (elected Nov 4, 2025; serves through Dec 31, 2029)",
      "Predecessor: Brad Lander",
      "Manages ~$280B+ across the city's five pension funds"
    ],
    source: { label: "Greenbook: Comptroller", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2860" }
  },
  "public-advocate": {
    name: "Public Advocate",
    silo: "doing",
    subhead: "Citywide ombudsman — Jumaane D. Williams",
    description: "Independently elected citywide ombudsman who represents consumers of city services, investigates complaints, and recommends reforms. Ex officio member of all Council committees (non-voting), chairs the Commission on Public Information and Communication, and is first in line of succession to the Mayor.",
    keyFacts: [
      "Office created by the 1989 Charter revision (replaced President of the City Council)",
      "Current: Jumaane D. Williams (re-elected Nov 4, 2025; in office since 2019)",
      "First in line of succession to Mayor"
    ],
    source: { label: "Greenbook: Public Advocate", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2895" }
  },

  // ============ CITY COUNCIL ============
  "city-council": {
    name: "New York City Council",
    silo: "doing",
    subhead: "Legislative branch — 51 members, Speaker Julie Menin",
    description: "Unicameral legislative body of NYC. Drafts and passes local laws (compiled in the Administrative Code), adopts the budget jointly with the Mayor, conducts oversight of agencies, and decides land use under ULURP. Can override mayoral vetoes by two-thirds vote.",
    keyFacts: [
      "51 members from single-member districts of ~160,000 residents each",
      "4-year terms (occasional 2-year terms after redistricting); 2-term limit",
      "Current Speaker: Julie Menin (Manhattan, UES), unanimously elected Jan 7, 2026 — first Jewish Speaker; succeeded Adrienne Adams",
      "40 committees and subcommittees in the 2026 term (diagram shows 35 — count grew under Menin)",
      "Two enactments: local laws (binding) and resolutions (non-binding)"
    ],
    source: { label: "Greenbook: City Council", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2884" }
  },

  // ============ AGENCIES (parent box) ============
  "agencies": {
    name: "NYC Agencies",
    silo: "doing",
    subhead: "Mayoral agencies + authorities/PBCs",
    description: "Most NYC agencies report up to the Mayor through Deputy Mayors. A separate class of operating entities — public authorities and public benefit corporations — perform city-related functions but report to other bodies (state, federal, or independent boards), most importantly the MTA (state) and PANYNJ (bi-state).",
    keyFacts: [
      "~80+ mayoral agencies and offices",
      "Major functions outside the Mayor's control: MTA, PANYNJ, libraries (independent nonprofits)"
    ],
    source: { label: "NYC Greenbook", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/" }
  },

  // ============ MAYORAL AGENCIES ============
  "dohmh": {
    name: "Department of Health and Mental Hygiene (DOHMH)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "NYC's public health agency. Created in 2001 by merging the Department of Health with the Department of Mental Health, Mental Retardation, and Alcoholism Services. Runs disease surveillance, restaurant inspections, vital records, and mental-health programs. The Board of Health, housed at DOHMH, can issue the city's Health Code (separate from the Admin Code).",
    keyFacts: [
      "~7,000 employees",
      "~$2.5B annual budget",
      "Commissioner: Alister F. Martin, MD, MPP (Feb 2026)"
    ],
    source: { label: "Greenbook: DOHMH", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2929" }
  },
  "dsny": {
    name: "Department of Sanitation (DSNY)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "World's largest municipal sanitation force. Collects residential trash and recycling, cleans streets and vacant lots, clears snow and ice, and increasingly runs curbside composting.",
    keyFacts: [
      "~10,000 employees",
      "~12,000 tons of refuse collected per day",
      "Commissioner: Gregory P. Anderson"
    ],
    source: { label: "Greenbook: DSNY", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2933" }
  },
  "nypd": {
    name: "Police Department (NYPD)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Largest municipal police force in the U.S. Absorbed the Transit Police (April 2, 1995) and Housing Police (April 30, 1995) into a single citywide force.",
    keyFacts: [
      "~33,000–34,000 uniformed officers",
      "77 patrol precincts + transit and housing commands",
      "Police Commissioner: Jessica S. Tisch"
    ],
    source: { label: "Greenbook: NYPD", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2888" }
  },
  "doe": {
    name: "Department of Education (DOE)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Operates the largest school district in the U.S. Structure includes the Panel for Educational Policy, the Chancellor, superintendents, Community Education Councils, principals, and School Leadership Teams. Under mayoral control since 2002 (subject to state renewal).",
    keyFacts: [
      "~1,800 schools, ~1 million students",
      "~$40B+ operating budget (largest single category — ~27% of FY2026 budget)",
      "Chancellor: Kamar Samuels (appointed Jan 1, 2026)"
    ],
    source: { label: "Greenbook: DOE", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2851" }
  },
  "dot": {
    name: "Department of Transportation (DOT)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Manages the city's streets, sidewalks, bridges, and ferries. Plans bike lanes, bus lanes, plazas, and Vision Zero initiatives. Established 1977 by Local Law No. 27.",
    keyFacts: [
      "6,000+ miles of streets and highways",
      "800+ bridges and 12,000+ signalized intersections",
      "Operates the Staten Island Ferry",
      "Commissioner: Mike Flynn (Jan 2026)"
    ],
    source: { label: "Greenbook: DOT", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2876" }
  },
  "doc": {
    name: "Department of Correction (DOC)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Operates the city jail system, principally Rikers Island. Houses pre-trial detainees and people serving sentences of one year or less. Overseen separately by the Board of Correction.",
    keyFacts: [
      "Commissioner: Lynelle Maginley-Liddie (Dec 8, 2023)",
      "Court-ordered closure of Rikers; replacement borough-based jails planned"
    ],
    source: { label: "Greenbook: DOC", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2867" }
  },
  "ddc": {
    name: "Department of Design and Construction (DDC)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Delivers NYC's capital construction projects — libraries, firehouses, police precincts, EMS facilities, senior centers, sewers and water mains — on behalf of ~25 client agencies that lack their own construction shops.",
    keyFacts: [
      "Established 1996",
      "Acting Commissioner: Eduardo del Valle, P.E."
    ],
    source: { label: "Greenbook: DDC", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2869" }
  },
  "dpr": {
    name: "Department of Parks and Recreation (DPR)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Maintains the city's parks, beaches, playgrounds, recreation centers, gardens, malls, squares, and public spaces. Manages ~30,000 acres of parkland (~14% of NYC's land area).",
    keyFacts: [
      "Continued by Local Law No. 7 of 1976",
      "Predecessor city-wide Department of Parks established 1934",
      "Commissioner: Tricia Shimamura (Mar 2026)"
    ],
    source: { label: "Greenbook: DPR", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2874" }
  },
  "dcp": {
    name: "Department of City Planning (DCP)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Plans the city's future through land use policies, zoning regulations, and neighborhood studies. Provides staff to the City Planning Commission and shepherds projects through ULURP.",
    keyFacts: [
      "Director: Sideya Sherman (Feb 2026)",
      "Modern DCP/CPC structure created by the 1936 Charter",
      "Maintains the Zoning Resolution"
    ],
    source: { label: "Greenbook: DCP", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2902" }
  },
  "dep": {
    name: "Department of Environmental Protection (DEP)",
    silo: "doing",
    subhead: "Mayoral agency",
    description: "Supplies ~1 billion gallons of clean drinking water per day to ~9.6 million people; collects and treats wastewater at 14 plants; regulates air, noise, and hazardous-substance pollution. Operates the upstate Catskill/Delaware watershed system.",
    keyFacts: [
      "~6,000 employees",
      "Largest unfiltered municipal water supply in the U.S.",
      "Commissioner & Chief Climate Officer: Rohit T. Aggarwala"
    ],
    source: { label: "Greenbook: DEP", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2870" }
  },

  // ============ AUTHORITIES & PBCs ============
  "mta": {
    name: "Metropolitan Transportation Authority (MTA)",
    silo: "doing",
    subhead: "NY State public benefit corporation",
    description: "NYS public-benefit corporation that runs NYC subways and buses (via NYC Transit), the Long Island Rail Road, Metro-North, and the bridges/tunnels (TBTA). Despite serving NYC, it is governed by the State, not the City — which is why the Governor, not the Mayor, controls the subways.",
    keyFacts: [
      "Chartered by NYS Legislature 1965; assumed control of NYC Transit and TBTA March 1, 1968 under Gov. Rockefeller",
      "Board chair appointed by the Governor",
      "Mayor recommends only 4 of 14 voting board members",
      "Largest public transit agency in North America"
    ],
    source: { label: "MTA (Wikipedia)", url: "https://en.wikipedia.org/wiki/Metropolitan_Transportation_Authority" }
  },
  "nycha": {
    name: "NYC Housing Authority (NYCHA)",
    silo: "doing",
    subhead: "Public benefit corporation",
    description: "Largest public housing authority in North America. A public-benefit corporation under NYS Public Housing Law; provides affordable housing and social/community services to low- and moderate-income New Yorkers.",
    keyFacts: [
      "Created 1935",
      "~335 developments; ~177,000 apartments",
      "Houses ~340,000 authorized residents + ~85,000 Section 8 households",
      "Chair: Jamie Rubin (July 6, 2023)",
      "Under federal HUD monitorship since 2019"
    ],
    source: { label: "Greenbook: NYCHA", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2886" }
  },
  "hh": {
    name: "NYC Health + Hospitals (H+H)",
    silo: "doing",
    subhead: "Public benefit corporation",
    description: "Largest public healthcare system in the U.S. Public-benefit corporation that operates the city's municipal hospital system: general, chronic, ambulatory, and skilled-nursing care across all five boroughs, plus correctional health services.",
    keyFacts: [
      "Created by NYS Legislature July 1, 1969",
      "11 acute-care hospitals (Bellevue, Elmhurst, Kings County, etc.)",
      "President & CEO: Dr. Mitchell Katz"
    ],
    source: { label: "Greenbook: H+H", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2879" }
  },
  "edc": {
    name: "NYC Economic Development Corporation (NYCEDC)",
    silo: "doing",
    subhead: "Nonprofit under city contract",
    description: "City's primary vehicle for economic development. Runs real-estate development, infrastructure projects, tax-exempt financing for industrial/nonprofit expansion, city-owned property management, food markets, freight rail, and NYC Ferry. Technically a 501(c)(3) nonprofit contracted by the city — not a chartered agency.",
    keyFacts: [
      "Present form created 2012 by merging NYC Public Development Corp. (1979) and an EDC predecessor",
      "President & CEO: Andrew Kimball"
    ],
    source: { label: "Greenbook: NYCEDC", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2914" }
  },
  "libraries": {
    name: "NYC's Three Library Systems",
    silo: "doing",
    subhead: "Independent nonprofits — city-funded",
    description: "NYC has three independent library systems, each a separate nonprofit with its own board. NYPL serves Manhattan/Bronx/Staten Island (and runs four world-class research centers); Brooklyn and Queens have their own systems because they predate the 1898 consolidation. Most operating funding comes from the city.",
    keyFacts: [
      "NYPL: founded May 23, 1895; 4 research centers + 88 branches",
      "Brooklyn Public Library: authorized 1892; established Nov 30, 1896; 61 branches + Central Library (1941)",
      "Queens Public Library: roots in 1858 Flushing subscription library; incorporated 1907; ~65 community libraries"
    ],
    source: { label: "Greenbook: NYPL", url: "https://a856-gbol.nyc.gov/GBOLWebsite/GreenBook/Details?orgId=2918" }
  },
  "panynj": {
    name: "Port Authority of NY & NJ (PANYNJ)",
    silo: "doing",
    subhead: "Bi-state authority (NY + NJ)",
    description: "Bi-state public agency created by interstate compact between NY and NJ — congressionally ratified in 1921 under the Compact Clause (Art. I §10). Owns and operates JFK, LGA, Newark, Stewart, PATH, marine terminals, the Port Authority Bus Terminal, the World Trade Center site, and the Hudson crossings (GW Bridge, Lincoln & Holland Tunnels).",
    keyFacts: [
      "First interstate compact under the U.S. Constitution (April 30, 1921)",
      "12 Commissioners — 6 appointed by each governor, 6-year overlapping terms",
      "Either governor can veto actions of his/her state's commissioners"
    ],
    source: { label: "PANYNJ Governance", url: "https://www.panynj.gov/corporate/en/government-ethics.html" }
  },

  // ============ BOROUGHS ============
  "brooklyn": {
    name: "Brooklyn (Kings County)",
    silo: "reviewing",
    subhead: "Borough",
    description: "Most populous borough (~2.6M). County name 'Kings' appears in court captions, court records, and on the Kings County Supreme Court.",
    keyFacts: ["Population ~2.6M", "County: Kings", "Community Boards: 18"],
    source: { label: "Brooklyn BP", url: "https://www.brooklynbp.nyc.gov/" }
  },
  "queens": {
    name: "Queens (Queens County)",
    silo: "reviewing",
    subhead: "Borough",
    description: "Second-most populous (~2.3M). Largest land area among the five boroughs. Among the most linguistically diverse places on earth.",
    keyFacts: ["Population ~2.3M", "County: Queens", "Community Boards: 14"],
    source: { label: "Queens BP", url: "https://www.queensbp.org/" }
  },
  "manhattan": {
    name: "Manhattan (New York County)",
    silo: "reviewing",
    subhead: "Borough",
    description: "Densest borough (~1.6M). County is 'New York County'. CBD generates the largest share of city economic activity.",
    keyFacts: ["Population ~1.6M", "County: New York", "Community Boards: 12"],
    source: { label: "Manhattan BP", url: "https://www.manhattanbp.nyc.gov/" }
  },
  "bronx": {
    name: "Bronx (Bronx County)",
    silo: "reviewing",
    subhead: "Borough",
    description: "Only borough mainly on the U.S. mainland. ~1.4M residents.",
    keyFacts: ["Population ~1.4M", "County: Bronx", "Community Boards: 12"],
    source: { label: "Bronx BP", url: "https://www.bronxboropres.nyc.gov/" }
  },
  "staten-island": {
    name: "Staten Island (Richmond County)",
    silo: "reviewing",
    subhead: "Borough",
    description: "Smallest by population (~500K). County name is 'Richmond' — appears in court records and on the Richmond County Courthouse. The malapportionment of Borough Presidents — Staten Island had the same Board of Estimate vote as Brooklyn — is what led to Board of Estimate v. Morris (1989).",
    keyFacts: ["Population ~500K", "County: Richmond", "Community Boards: 3"],
    source: { label: "Staten Island BP", url: "https://statenislandusa.com/" }
  },

  // ============ BOROUGH PRESIDENTS ============
  "bp-brooklyn": {
    name: "Brooklyn Borough President",
    silo: "reviewing",
    subhead: "Borough-wide elected official",
    description: "Borough Presidents are borough-wide elected officials with chiefly advisory and review powers since the 1989 Charter revision abolished the Board of Estimate. They review ULURP land use actions, hold public hearings, recommend capital projects, and appoint Community Board members. Each BP appoints one member to the City Planning Commission and two to the Panel for Educational Policy.",
    keyFacts: [
      "4-year term, 2-term limit",
      "Appoints all CB members in the borough (at least half on the nomination of Council Members)",
      "Maintains a small discretionary capital budget"
    ],
    source: { label: "NYC Charter Chapter 4", url: "https://nyccharter.readthedocs.io/c04/" }
  },
  "bp-queens": { name: "Queens Borough President", silo: "reviewing", subhead: "Borough-wide elected official",
    description: "See the role description under Brooklyn BP — identical role across boroughs since the 1989 Charter.",
    keyFacts: ["4-year term, 2-term limit"],
    source: { label: "NYC Charter Chapter 4", url: "https://nyccharter.readthedocs.io/c04/" } },
  "bp-manhattan": { name: "Manhattan Borough President", silo: "reviewing", subhead: "Borough-wide elected official",
    description: "See the role description under Brooklyn BP — identical role across boroughs since the 1989 Charter.",
    keyFacts: ["4-year term, 2-term limit"],
    source: { label: "NYC Charter Chapter 4", url: "https://nyccharter.readthedocs.io/c04/" } },
  "bp-bronx": { name: "Bronx Borough President", silo: "reviewing", subhead: "Borough-wide elected official",
    description: "See the role description under Brooklyn BP — identical role across boroughs since the 1989 Charter.",
    keyFacts: ["4-year term, 2-term limit"],
    source: { label: "NYC Charter Chapter 4", url: "https://nyccharter.readthedocs.io/c04/" } },
  "bp-staten-island": { name: "Staten Island Borough President", silo: "reviewing", subhead: "Borough-wide elected official",
    description: "See the role description under Brooklyn BP — identical role across boroughs since the 1989 Charter.",
    keyFacts: ["4-year term, 2-term limit"],
    source: { label: "NYC Charter Chapter 4", url: "https://nyccharter.readthedocs.io/c04/" } },

  // ============ COMMUNITY BOARDS ============
  "cb-brooklyn": {
    name: "Brooklyn Community Boards",
    silo: "reviewing",
    subhead: "18 Community Boards",
    description: "Each CB has up to 50 unsalaried members appointed by the Borough President to staggered 2-year terms; at least half must be appointed from nominees of the Council Members whose districts overlap the community district. CBs hold monthly public meetings, make ULURP land-use recommendations, weigh in on liquor licenses, and submit annual District Needs Statements and budget priorities. They have no binding authority — recommendations only.",
    keyFacts: ["18 CBs in Brooklyn", "Up to 50 members each, 2-year staggered terms", "Governed by NYC Charter §2800"],
    source: { label: "NYC Community Boards", url: "https://www.nyc.gov/site/communityboards/index.page" }
  },
  "cb-queens": { name: "Queens Community Boards", silo: "reviewing", subhead: "14 Community Boards",
    description: "See Brooklyn CBs for the role description. Queens has 14.",
    keyFacts: ["14 CBs in Queens"], source: { label: "NYC Community Boards", url: "https://www.nyc.gov/site/communityboards/index.page" } },
  "cb-manhattan": { name: "Manhattan Community Boards", silo: "reviewing", subhead: "12 Community Boards",
    description: "See Brooklyn CBs for the role description. Manhattan has 12.",
    keyFacts: ["12 CBs in Manhattan"], source: { label: "NYC Community Boards", url: "https://www.nyc.gov/site/communityboards/index.page" } },
  "cb-bronx": { name: "Bronx Community Boards", silo: "reviewing", subhead: "12 Community Boards",
    description: "See Brooklyn CBs for the role description. Bronx has 12.",
    keyFacts: ["12 CBs in the Bronx"], source: { label: "NYC Community Boards", url: "https://www.nyc.gov/site/communityboards/index.page" } },
  "cb-staten-island": { name: "Staten Island Community Boards", silo: "reviewing", subhead: "3 Community Boards",
    description: "See Brooklyn CBs for the role description. Staten Island has 3.",
    keyFacts: ["3 CBs in Staten Island"], source: { label: "NYC Community Boards", url: "https://www.nyc.gov/site/communityboards/index.page" } },
  "cb-total": {
    name: "59 Community Boards (citywide)",
    silo: "reviewing",
    subhead: "Most local form of NYC government",
    description: "59 CBs in total across the five boroughs (18 BK + 14 QN + 12 MN + 12 BX + 3 SI). They are the most local and accessible form of city government — and the smallest electoral districts have populations comparable to small cities elsewhere.",
    keyFacts: ["18 + 14 + 12 + 12 + 3 = 59"],
    source: { label: "NYC Community Boards", url: "https://www.nyc.gov/site/communityboards/index.page" }
  },

  // ============ BUDGET ============
  "budget-overview": {
    name: "NYC Budget — FY2027 Executive Budget",
    silo: "budget",
    subhead: "$124.7B (released May 12, 2026)",
    description: "Mayor Zohran Mamdani's FY2027 Executive Budget — the all-funds operating spending plan for July 1, 2026 – June 30, 2027 — totals $124.7 billion. That's $2.3B less than the FY2027 Preliminary Budget and ~$8.8B more than the FY2026 Adopted ($115.91B). The Executive Budget is what the Council negotiates against before adoption by June 30, 2026.",
    keyFacts: [
      "Total: $124.7B (FY2027 Executive, May 12, 2026)",
      "Education (DOE): ~40% of agency budgets — largest single line",
      "Pensions + debt service: ~$30B combined",
      "Uniformed services: ~9% of agency budgets (NYPD ~7%, FDNY ~3%, DSNY ~2%)",
      "Social services: ~12% of agency budgets (DSS, DHS, ACS, DYCD)",
      "Health: ~5% (H+H ~2%, DOHMH ~3%)",
      "Relies on $2.8B in one-time measures + $2.3B in short-term pension savings",
      "Out-year gaps: $7.1B in FY2028 → $9.8B in FY2030 (per Comptroller)",
      "Replaces a property tax increase with a pied-à-terre surcharge"
    ],
    source: { label: "FY2027 Executive Budget (OMB)", url: "https://www.nyc.gov/content/omb/pages/publications/fy2027-executive-budget" }
  },
  "executive-budget": {
    name: "Executive Budget",
    silo: "budget",
    subhead: "Mayor's revised proposal (released by April 26)",
    description: "The Mayor's revised budget proposal, released after the Preliminary Budget and after Council/public response. It is the document the Council negotiates against before adoption. Governed by NYC Charter Chapter 10.",
    keyFacts: ["Released by April 26 (Charter §249)", "Incorporates Council preliminary response"],
    source: { label: "NYC Charter Chapter 10", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "adopted-budget": {
    name: "Adopted Budget",
    silo: "budget",
    subhead: "Final, signed budget (by June 30 / July 1)",
    description: "The budget passed by the Council and signed by the Mayor for the fiscal year starting July 1. The Council can modify the Executive Budget but cannot increase total spending without Mayor agreement.",
    keyFacts: ["FY2026 adopted June 30, 2025", "FY runs July 1 – June 30"],
    source: { label: "NYC Charter Chapter 10", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "expense-budget": {
    name: "Expense Budget",
    silo: "budget",
    subhead: "Day-to-day operations + debt service",
    description: "Pays operating costs — agency salaries, supplies, contracts — plus Debt Service on borrowed capital funds. The bulk of the ~$124.7B FY2027 Executive total. Of the Preliminary Budget breakdown: Personal Services ~50% (salaries, fringe, pensions), Other Than Personal Services (OTPS) ~45%, Debt Service ~7.5%.",
    keyFacts: [
      "Personal Services ~$63B (~50%): salaries $36B + fringe $16B + pensions $11B",
      "OTPS ~$57B (~45%): incl. Medicaid $6.8B, Public Assistance $2.75B",
      "Debt Service ~$9.5B (~7.5%)"
    ],
    source: { label: "IBO: How the budget is made", url: "https://www.ibo.nyc.gov/content/how-the-budget-is-made" }
  },
  "capital-budget": {
    name: "Capital Budget",
    silo: "budget",
    subhead: "Long-lived physical investments",
    description: "Funds long-term physical investments — schools, parks, sewers, bridges, libraries — financed primarily through municipal bond issuance. Appears in the Capital Commitment Plan and the Ten-Year Capital Strategy. Debt service to repay the borrowing sits inside the Expense Budget.",
    keyFacts: ["Covers upcoming FY plus next 3 years of appropriations", "Ten-Year Capital Strategy under Charter Chapter 9"],
    source: { label: "IBO Capital Budget Guide", url: "https://www.ibo.nyc.ny.us/iboreports/IBOCBG.pdf" }
  },
  "operating-budget": {
    name: "Operating Budget",
    silo: "budget",
    subhead: "Synonym for the Expense Budget",
    description: "In NYC usage, 'operating budget' is synonymous with the Expense Budget — the annual spending plan to operate city government (personnel, OTPS, contracts, debt service). Distinct from the Capital Budget.",
    keyFacts: ["$124.7B in the FY2027 Executive Budget (May 12, 2026) — the headline 'budget' figure"],
    source: { label: "IBO", url: "https://www.ibo.nyc.gov/content/how-the-budget-is-made" }
  },
  "budget-education": {
    name: "Education spending",
    silo: "budget",
    subhead: "Largest single line item",
    description: "Department of Education spending is the single largest line in the budget — ~40% of agency operating budgets in FY2027. Reflects ~1 million students and ~75K teachers. FY2027 Executive includes $543M in added city funds for the class-size-reduction mandate, plus resolution of the Pre-K/3-K fiscal cliff and a new 2-K universal program.",
    keyFacts: [
      "~40% of agency operating spending in FY2027 Executive",
      "$543M in new city funds for class-size reduction",
      "New 2-K universal program"
    ],
    source: { label: "FY2027 Executive Budget (OMB)", url: "https://www.nyc.gov/content/omb/pages/publications/fy2027-executive-budget" }
  },
  "budget-social-services": {
    name: "Social Services spending",
    silo: "budget",
    subhead: "DSS/HRA, ACS, DHS, DYCD",
    description: "Aggregates DSS/HRA (cash assistance, SNAP, Medicaid admin), ACS (child welfare), DHS (homeless services), DYCD (youth). ~12% of agency operating spending in the FY2027 Executive Budget. FY2027 finally right-sizes chronically underbudgeted items — rental assistance to $1.67B and shelter costs near $1B.",
    keyFacts: [
      "~12% of FY2027 agency operating spending",
      "Rental assistance: $1.67B",
      "Shelter costs: ~$1B"
    ],
    source: { label: "FY2027 Executive Budget (OMB)", url: "https://www.nyc.gov/content/omb/pages/publications/fy2027-executive-budget" }
  },
  "budget-other": {
    name: "Everything else",
    silo: "budget",
    subhead: "Uniformed services, pensions, debt service, gen. gov't",
    description: "Uniformed services (NYPD ~7%, FDNY ~3%, DSNY ~2% — ~9% combined of agency budgets); health (H+H ~2%, DOHMH ~3%); plus DCAS, DEP, DOT, CUNY (~2% each). Pensions + debt service are a separate ~$30B bucket. FY2027 Executive reverses the prior plan for 5,000 additional NYPD hires.",
    keyFacts: [
      "Pensions + debt service: ~$30B",
      "Uniformed services: ~9% of agency operating",
      "FY2027 reverses 5,000-officer NYPD expansion"
    ],
    source: { label: "FY2027 Executive Budget (OMB)", url: "https://www.nyc.gov/content/omb/pages/publications/fy2027-executive-budget" }
  },

  // ============ INTERGOVERNMENTAL ============
  "bd-estimate-morris": {
    name: "Board of Estimate v. Morris (1989)",
    silo: "inter",
    subhead: "489 U.S. 688 — killed the Board of Estimate",
    description: "Unanimous U.S. Supreme Court decision (March 22, 1989) that declared NYC's Board of Estimate unconstitutional under the Equal Protection Clause. The Board (Mayor, Comptroller, and Council President with 2 votes each; the 5 Borough Presidents with 1 vote each) gave Staten Island and Brooklyn equal voting power despite Brooklyn having ~9× the population — a 78% deviation from one person, one vote. The decision forced the 1989 Charter revision that abolished the Board, expanded the Council from 35 to 51 members, and shifted most of the Board's powers to the Mayor and the Council.",
    keyFacts: [
      "Argued Dec 7, 1988; decided Mar 22, 1989",
      "Unanimous opinion by Justice White",
      "Triggered the 1989 NYC Charter revision",
      "Reason the modern Council has 51 members instead of the old 35"
    ],
    source: { label: "Justia: 489 U.S. 688", url: "https://supreme.justia.com/cases/federal/us/489/688/" }
  },
  "panynj-approval": {
    name: "PANYNJ Compact Governance",
    silo: "inter",
    subhead: "Bi-state compact — both governors hold a veto",
    description: "PANYNJ is a creature of an interstate compact between NY and NJ; under U.S. Constitution Art. I §10 such compacts required congressional consent (granted 1921). Neither state alone can change PANYNJ's powers — both legislatures (and Congress, for material changes) must agree. Each governor appoints 6 of the 12 Commissioners and holds a veto over actions of his/her state's commissioners. Gubernatorial vetoes have repeatedly blocked Port Authority action.",
    keyFacts: [
      "Compact ratified April 30, 1921",
      "First interstate compact under the U.S. Constitution",
      "Either governor can unilaterally veto board action"
    ],
    source: { label: "Ballotpedia: NY-NJ Port Authority Compact", url: "https://ballotpedia.org/New_York-New_Jersey_Port_Authority_Compact_of_1921" }
  },
  "federal-block-grants": {
    name: "Federal Block Grants to NYC",
    silo: "inter",
    subhead: "DC → NYC funding",
    description: "Federal flexible-purpose grants flowing directly or via the State to NYC. Largest urban examples: HUD's CDBG (Community Development Block Grant) and CDBG-Disaster Recovery; plus Title I (education), SNAP/TANF administration, and Medicaid match (the dominant federal flow). Strings attached but discretion broader than categorical grants.",
    keyFacts: [
      "NYC received hundreds of millions in CDBG/CDBG-DR in FY 2025–2026 (bulk routed to HPD)",
      "Total federal revenue: ~$10–11B/yr in operating budget (~8–10%, much higher counting Medicaid pass-through)"
    ],
    source: { label: "OSC: CDBG to NY", url: "https://www.osc.ny.gov/reports/budget/fed-funding-ny/community-development-block-grant" }
  },
  "federal-preemption": {
    name: "Federal Pre-emption",
    silo: "inter",
    subhead: "Supremacy Clause (Art. VI)",
    description: "Doctrine derived from the Supremacy Clause: federal law overrides conflicting state or local law. Three flavors — express, field, and conflict preemption. Limits NYC's ability to legislate in areas like immigration enforcement, aviation, telecommunications, ERISA benefits, and interstate commerce.",
    keyFacts: [
      "Express: statute says so. Field: federal regulation occupies the field. Conflict: dual compliance impossible.",
      "NYC sanctuary policies operate in the space federal law leaves to local discretion (declining to assist), not in defiance of federal authority"
    ],
    source: { label: "Justia: State/Local Laws Held Preempted", url: "https://law.justia.com/constitution/us/state-local-laws-held-preempted.html" }
  },
  "nys-block-grants": {
    name: "NYS Aid to NYC",
    silo: "inter",
    subhead: "Albany → NYC funding",
    description: "NYC receives state aid primarily as education Foundation Aid (largest single category), Medicaid local-share assistance, social-services reimbursement, and capital aid for transportation and housing. NYC is statutorily excluded from the Aid and Incentives for Municipalities (AIM) program that funds other NY cities, towns, and villages.",
    keyFacts: [
      "Statewide School Aid: ~$37.4B in FY 2025–26 enacted budget; NYC DOE gets ~$14–15B of it",
      "State funding to NYC overall: ~$18–20B/yr"
    ],
    source: { label: "NYS FY 2025-26 School Aid", url: "https://www.budget.ny.gov/pubs/archive/fy26/ex/local/school/2526schoolaid.pdf" }
  },
  "nys-preemption": {
    name: "NYS Pre-emption of NYC Laws",
    silo: "inter",
    subhead: "Albany overrides NYC",
    description: "Despite NY's home-rule tradition, the State retains broad authority and routinely preempts NYC ordinances on matters of statewide concern or covered by state law. NYC cannot legislate in a way that conflicts with state law or in a field the State has occupied.",
    keyFacts: [
      "Rent regulation: statewide Emergency Tenant Protection Act / Housing Stability and Tenant Protection Act 2019",
      "Firearms: NY SAFE Act, Concealed Carry Improvement Act, Penal Law §400 licensing",
      "Motor vehicle / traffic: state Vehicle and Traffic Law",
      "Alcohol: State Liquor Authority",
      "Taxation: NYC needs Albany approval to raise most local taxes, including the personal income tax"
    ],
    source: { label: "Giffords: NY Local Preemption", url: "https://giffords.org/lawcenter/state-laws/preemption-of-local-laws-in-new-york/" }
  },
  "nys-authorities": {
    name: "NYS-Created Authorities Affecting NYC",
    silo: "inter",
    subhead: "Public benefit corporations bypass home rule",
    description: "NY State has long used 'public benefit corporations' (PBCs) — created by State legislation, governed by gubernatorial appointees, off the State budget — to take essential NYC functions out of City control. This requires only state legislation, not city consent. It's why the State, not the Mayor, runs the subways.",
    keyFacts: [
      "MTA (1965/1968): subways, buses, LIRR, Metro-North, TBTA",
      "Empire State Development Corp.",
      "Battery Park City Authority",
      "Hudson Yards Infrastructure Corp.",
      "NYS Urban Development Corp. (1968)"
    ],
    source: { label: "NYS PBCs (Wikipedia)", url: "https://en.wikipedia.org/wiki/New_York_state_public-benefit_corporations" }
  },
  // ============ ULURP OVERLAY ============
  "ulurp-overview": {
    name: "ULURP — Uniform Land Use Review Procedure",
    silo: "doing",
    subhead: "NYC Charter §197-c · max ~205 days · amended Nov 2025",
    description: "ULURP is the public review process for changes to NYC's physical plant — rezonings, special permits, dispositions of city property, new sites for city facilities, urban renewal designations, and similar land-use actions. Created by the 1975 Charter revision to give Community Boards, Borough Presidents, the City Planning Commission, the City Council, and the Mayor formal roles (with deadlines) in any significant land-use decision. November 2025 voters amended ULURP in three ways: a Fast Track for publicly financed affordable housing (Q2), a new abbreviated track for modest projects called ELURP (Q3), and replacement of the Mayor's solo veto with an Affordable Housing Appeals Board for AH applications (Q4).",
    keyFacts: [
      "Created by 1975 Charter revision",
      "Codified at NYC Charter §§ 197-c, 197-d",
      "Max ~205 days from certification to mayoral veto window",
      "Bodies: DCP → CB → BP (+ Borough Board if cross-CB) → CPC → Council → Mayor or AHAB",
      "Nov 2025 amendments (all passed): Q2 Fast Track AH (58.32%), Q3 ELURP (56.75%), Q4 AHAB"
    ],
    source: { label: "NYC Planning: Public Review", url: "https://www.nyc.gov/content/planning/pages/planning/public-review" }
  },
  "ulurp-cert": {
    name: "Step 0 — DCP Certification",
    silo: "doing",
    subhead: "Starts the ULURP clock",
    description: "An applicant (city agency or private party) files a pre-application, then a full application, with the Department of City Planning (DCP). DCP staff review for completeness and CEQR/SEQR environmental review usually runs in parallel. When the Chair of the City Planning Commission certifies the application as complete, the ULURP clock starts. Within 9 days, certification notice goes to the local Community Board, the Borough President, and the local Council Member.",
    keyFacts: [
      "Certified by the CPC Chair (head of DCP)",
      "Environmental review (CEQR) must be substantially complete first",
      "9-day notice window to CB, BP, Council Member"
    ],
    source: { label: "DCP Applicant Portal — ULURP", url: "https://home.nyc.gov/site/planning/applicants/applicant-portal/step5-ulurp-process.page" }
  },
  "ulurp-cb": {
    name: "Step 1 — Community Board Review",
    silo: "reviewing",
    subhead: "60 days · advisory recommendation",
    description: "The local Community Board has 60 days from certification to hold a public hearing and adopt and submit a written recommendation to the CPC, the applicant, and the Borough President. The recommendation is advisory — but it is the formal entry point for neighborhood input, and a 'no' vote can carry weight downstream. If the CB fails to act in 60 days, the application moves on automatically.",
    keyFacts: [
      "Must hold a public hearing within 60 days",
      "Recommendation is advisory only",
      "Each CB is up to 50 members, appointed by the BP"
    ],
    source: { label: "Charter §197-c", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-1956" }
  },
  "ulurp-bp": {
    name: "Step 2 — Borough President Review",
    silo: "reviewing",
    subhead: "30 days · advisory recommendation",
    description: "After the Community Board acts (or its 60 days expire), the Borough President has 30 days to issue an advisory written recommendation to the CPC. For applications that cross CB boundaries, the Borough Board (BP + Council Members + CB chairs) also reviews.",
    keyFacts: [
      "30 days, advisory",
      "Borough Board involvement for cross-CB applications",
      "BPs lost binding land-use power when Board of Estimate was abolished (1989)"
    ],
    source: { label: "Charter §197-c", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-1956" }
  },
  "ulurp-cpc": {
    name: "Step 3 — City Planning Commission Vote",
    silo: "doing",
    subhead: "60 days · binding-ish vote",
    description: "The 13-member City Planning Commission (7 appointed by the Mayor, 1 by each Borough President, 1 by the Public Advocate) has 60 days to hold a public hearing and vote to approve, modify, or disapprove. CPC disapproval ends ULURP for most applications — but the Council can 'call up' a CPC approval for review.",
    keyFacts: [
      "13 commissioners (7 Mayor, 5 BPs, 1 PA)",
      "Chair = Director of City Planning (head of DCP)",
      "60-day clock, public hearing required"
    ],
    source: { label: "City Planning Commission", url: "https://www.nyc.gov/content/planning/pages/commission" }
  },
  "ulurp-council": {
    name: "Step 4 — City Council Review",
    silo: "doing",
    subhead: "50 days · approve / modify / disapprove",
    description: "The City Council has 50 days to hold a public hearing and approve, disapprove, or approve-with-modifications. Council review is mandatory for some applications (rezonings, dispositions of city land) and triggered by 'call-up' or the 'triple-no' rule for others. Heavy informal norm of 'member deference' — the Council usually follows the lead of the local Council Member.",
    keyFacts: [
      "50-day clock, public hearing required",
      "Triple-no override: if CB, BP, and CPC all disapprove, the Council can still review and approve",
      "Council can modify subject to CPC review of modifications"
    ],
    source: { label: "Charter §197-d", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-1962" }
  },
  "ulurp-mayor": {
    name: "Step 5a — Mayor's Veto Window (non-AH apps)",
    silo: "doing",
    subhead: "5 days · veto",
    description: "After the Council votes, the Mayor has 5 days to veto. If the Mayor doesn't act, the Council's decision stands. As of November 2025, this solo mayoral veto applies only to non-affordable-housing ULURP applications — affordable housing applications now go to the Affordable Housing Appeals Board (Step 5b) instead.",
    keyFacts: [
      "5-day veto window",
      "Most Council decisions take effect without mayoral action",
      "AH applications: AHAB replaces this step (Nov 2025 Charter amendment, Q4)"
    ],
    source: { label: "Charter §197-d", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-1962" }
  },
  "ulurp-ahab": {
    name: "Step 5b — Affordable Housing Appeals Board (AHAB)",
    silo: "doing",
    subhead: "3-member board · 2-of-3 reverses Council · affordable housing only",
    description: "Added by Proposal 4 on the November 4, 2025 NYC ballot (passed). For affordable housing ULURP applications only: if the City Council disapproves or modifies the application, the case goes to a three-member Affordable Housing Appeals Board — the Mayor, the Speaker of the City Council, and the Borough President of the borough where the project sits. A 2-of-3 vote of the Board reverses the Council's disapproval or modification. This replaces the Mayor's prior solo veto for affordable housing projects. Effective immediately, but rule-making is required for full implementation.",
    keyFacts: [
      "Created by Nov 4, 2025 ballot Proposal 4 (Affordable Housing Appeals Board)",
      "Members: Mayor + Council Speaker + local Borough President",
      "Vote: 2 of 3 reverses Council disapproval/modification",
      "Applies only to affordable housing applications",
      "Replaces the Mayor's solo ULURP veto for AH apps",
      "Effective immediately; rules-promulgation pending"
    ],
    source: { label: "Ballotpedia: 2025 NYC Question 4", url: "https://ballotpedia.org/New_York,_New_York,_Question_4,_Affordable_Housing_Appeals_Board_Charter_Amendment_(November_2025)" }
  },
  "ulurp-override": {
    name: "Step 6 — Council Override",
    silo: "doing",
    subhead: "10 days · 2/3 vote",
    description: "If the Mayor vetoes, the Council has 10 days to override by a 2/3 vote. With a Council super-majority required, this is the rare endgame, but it's the formal closing move of ULURP.",
    keyFacts: [
      "10-day override window",
      "Requires 2/3 of Council (34 of 51 members)"
    ],
    source: { label: "Charter §197-d", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-1962" }
  },

  "nys-courts": {
    name: "NYS Court Structure",
    silo: "inter",
    subhead: "Confusingly named on purpose",
    description: "New York is the only state where 'Supreme Court' is the trial court of general jurisdiction, not the court of last resort. The hierarchy from top to bottom: (1) Court of Appeals — highest, 7 judges, Albany; (2) Appellate Division of the Supreme Court — intermediate appellate, 4 Departments (NYC sits in 1st and 2nd); (3) Supreme Court — trial court of general jurisdiction, civil and felony criminal. Plus specialized courts: Surrogate's, Family, Civil/Criminal Court of the City of NY.",
    keyFacts: [
      "Court of Appeals judges: appointed by Governor from commission slate, Senate confirmation, 14-year terms",
      "Supreme Court Justices: elected in judicial districts to 14-year terms",
      "The Court of Appeals interprets Article IX (home rule)"
    ],
    source: { label: "NY Courts: Outline", url: "https://www.nycourts.gov/ctapps/outline.htm" }
  },

  // ============ ELURP OVERLAY (added by Nov 2025 Charter amendment Q3) ============
  "elurp-overview": {
    name: "ELURP — Expedited Land Use Review Procedure",
    silo: "doing",
    subhead: "Created Nov 4, 2025 (Q3, passed 56.75%) · ~90 days",
    description: "A new parallel track to ULURP for modest housing, infrastructure, resiliency, and city-property land-use actions. Compresses public review from ~7 months to ~90 days by running Community Board and Borough President review concurrently and making the City Planning Commission the final decision-maker — no Council vote for most ELURP applications. Created by Charter Proposal 3 on the November 4, 2025 ballot. Effective on certification of election results; full operation requires DCP rule-making.",
    keyFacts: [
      "Qualifies: small rezonings (≤30% capacity increase), affordable-housing land deals, resiliency projects, open space, solar on city property",
      "Excluded: anything requiring a full EIS, citywide/multi-borough rezonings, landmarks designations",
      "Effective on cert. of Nov 4, 2025 results; awaiting DCP rules",
      "Companion Appeals Board (Q4) can override Council disapproval for the narrow Council-reviewed subset"
    ],
    source: { label: "CBC: Making the Most of ELURP", url: "https://cbcny.org/advocacy/making-most-proposed-expedited-land-use-review-procedure" }
  },
  "elurp-cert": {
    name: "Step 1 — DCP Certification (ELURP)",
    silo: "doing",
    subhead: "Locks the application into the expedited track",
    description: "DCP reviews the application for completeness and certifies it into ELURP. Certification starts the public-review clock. DCP staff also determine whether a project qualifies for ELURP or must use full ULURP. Environmental review (CEQR) runs in parallel; projects that need a full Environmental Impact Statement cannot use ELURP.",
    keyFacts: [
      "DCP decides ELURP vs. full ULURP eligibility",
      "Awaiting CAPA rule-making to clarify edge cases",
      "Projects needing a full EIS are excluded"
    ],
    source: { label: "2025 NYC Charter Revision Commission Final Report", url: "https://www.nyc.gov/site/charter/news/2025-nyc-charter-revision-commission-adopts-five-ballot-proposals.page" }
  },
  "elurp-cb-bp": {
    name: "Step 2 — Community Board + Borough President (concurrent)",
    silo: "reviewing",
    subhead: "60 days · advisory · both at once",
    description: "The Community Board and the Borough President review the application simultaneously — not sequentially as in ULURP. Each holds a public hearing and issues a written advisory recommendation. Running these in parallel is the single biggest time saver versus ULURP (which has CB 60 days, then BP 30 days sequentially).",
    keyFacts: [
      "Concurrent rather than sequential — saves ~30 days vs. ULURP",
      "Both recommendations are advisory only",
      "Extended deadlines apply for late-June/early-July certifications (board recess)"
    ],
    source: { label: "Rosenberg & Estis: 2025 Land Use Changes", url: "https://www.rosenbergestis.com/media/blog/industry-updates/nyc-voters-approve-significant-changes-to-accelerate-land-use-approvals" }
  },
  "elurp-cpc": {
    name: "Step 3 — City Planning Commission Decision (final)",
    silo: "doing",
    subhead: "30 days · CPC vote is final",
    description: "The CPC holds a public hearing and votes to approve, approve with modifications, or disapprove. For most ELURP applications this is the END — the City Council is bypassed entirely. This is the structural change that distinguishes ELURP from ULURP, where Council review under §197-d normally follows CPC.",
    keyFacts: [
      "CPC decision is final for most ELURP apps",
      "No automatic Council review (the key difference from ULURP)",
      "Council review only triggered for a narrow subset where state law mandates it"
    ],
    source: { label: "CBC: Making the Most of ELURP", url: "https://cbcny.org/advocacy/making-most-proposed-expedited-land-use-review-procedure" }
  },
  "elurp-ahab": {
    name: "Step 4 (conditional) — Affordable Housing Appeals Board",
    silo: "doing",
    subhead: "Only if Council reviews + disapproves/modifies an AH application",
    description: "For the narrow subset of ELURP applications that DO go to Council and concern affordable housing in a single borough, the same Affordable Housing Appeals Board from ULURP applies: Mayor + Council Speaker + the affected Borough President. A 2-of-3 vote can restore the CPC-approved version of the application.",
    keyFacts: [
      "Same board as the ULURP-Q4 AHAB",
      "Single-borough affordable-housing projects only",
      "2-of-3 vote required"
    ],
    source: { label: "Ballotpedia: 2025 NYC Question 4", url: "https://ballotpedia.org/New_York,_New_York,_Question_4,_Affordable_Housing_Appeals_Board_Charter_Amendment_(November_2025)" }
  },

  // ============ LOCAL LAW OVERLAY ============
  "local-law-overview": {
    name: "How a Local Law Becomes Part of the Administrative Code",
    silo: "doing",
    subhead: "NYC Charter §§28–40 · 26 of 51 to pass · 34 of 51 to override veto",
    description: "The path from a Council Member's introduction to enactment and codification. Governed primarily by Charter Chapter 2 (§§28–40). Passage requires a majority of all 51 Members (26); a Mayor veto can be overridden by a 2/3 supermajority (34 of 51). Once enacted, the law is codified by American Legal Publishing into the Administrative Code (or, less commonly, into the Charter itself).",
    keyFacts: [
      "26 of 51 to pass; 34 of 51 to override veto",
      "Mayor has 30 days — silence = enactment (no pocket veto)",
      "Most local laws amend the Admin Code; some amend the Charter"
    ],
    source: { label: "NYC Council Legislation", url: "https://council.nyc.gov/legislation/" }
  },
  "law-intro": {
    name: "Step 1 — Introduction",
    silo: "doing",
    subhead: "Council Members are the only direct introducers",
    description: "Any Council Member may introduce a bill ('Intro') at a Stated Meeting. The Mayor, Public Advocate, and Borough Presidents cannot introduce directly but may have legislation introduced 'at the behest of' their office — a Council Member sponsors it on the floor. The bill is drafted with the Council's Legislation Division and gets an Intro number (e.g., 'Int 0704-2022').",
    keyFacts: [
      "Council Members are the only direct introducers",
      "Mayor/PA/BPs introduce via a sponsoring Council Member",
      "Public Advocate has a Council seat but no vote (Charter §24(e))"
    ],
    source: { label: "NYC Council Legislation Process", url: "https://council.nyc.gov/legislation/" }
  },
  "law-committee": {
    name: "Step 2 — Committee Referral",
    silo: "doing",
    subhead: "Speaker assigns the bill",
    description: "Through the Committee on Rules, Privileges and Elections, the Speaker assigns the bill to a standing committee based on subject matter. The Speaker has broad agenda-setting power — bills can sit indefinitely unless a majority of the full Council (26 of 51) signs a discharge motion under §46.",
    keyFacts: [
      "Speaker controls committee assignments",
      "51 Council Members; ~40 committees and subcommittees",
      "Majority discharge (26 votes) can force a bill out"
    ],
    source: { label: "NYC Charter Chapter 2", url: "https://nyccharter.readthedocs.io/c02/" }
  },
  "law-hearing": {
    name: "Step 3 — Committee Hearing & Markup",
    silo: "doing",
    subhead: "Public hearing then committee vote",
    description: "The committee holds a public hearing for testimony from agencies, advocates, and the public. The chair may then schedule a markup at which the committee amends the bill (Proposed Int 'A', 'B', etc.) and votes. A majority of the committee is required to report the bill out favorably.",
    keyFacts: [
      "Public testimony before committee vote",
      "Amendments produce lettered versions (Int 0704-2022-A)",
      "Committee majority needed to send to full Council"
    ],
    source: { label: "NYC Council Rules", url: "https://council.nyc.gov/legislation/" }
  },
  "law-layover": {
    name: "Step 4 — Seven-Day Layover (Charter §36)",
    silo: "doing",
    subhead: "7 days · except on mayoral 'message of necessity'",
    description: "Charter §36: the bill in its final form must sit on Council Members' desks for at least seven calendar days, exclusive of Sundays, before final passage. The Mayor can waive this by certifying immediate necessity — but that raises the passage threshold to 2/3 of all Members.",
    keyFacts: [
      "7-day deliberation safeguard",
      "Mayoral necessity message waives the wait but raises threshold to 2/3"
    ],
    source: { label: "NYC Charter §36", url: "https://nyccharter.readthedocs.io/c02/" }
  },
  "law-vote": {
    name: "Step 5 — Full Council Vote",
    silo: "doing",
    subhead: "26 of 51 (majority of all members) to pass",
    description: "At a Stated Meeting the Council votes by recorded ayes-and-noes (Charter §35). A simple majority of ALL members elected — 26 of 51 — is required to pass, not just a majority of those present. The Clerk certifies and presents the bill to the Mayor.",
    keyFacts: [
      "Threshold: 26 of 51 (majority of all members)",
      "Roll-call vote recorded in the journal per §35",
      "Council Clerk certifies and presents to Mayor"
    ],
    source: { label: "NYC Charter §§35, 37", url: "https://nyccharter.readthedocs.io/c02/" }
  },
  "law-mayor": {
    name: "Step 6 — Mayoral Action (§37)",
    silo: "doing",
    subhead: "30 days · sign, veto, or silence (= enactment)",
    description: "The Mayor has 30 days from presentation to (a) sign, (b) veto with written objections, or (c) take no action. Inaction = the bill becomes law as if signed. NYC has no true pocket veto — silence equals enactment. A veto returns the bill to Council with the Mayor's written objections.",
    keyFacts: [
      "Sign → becomes Local Law",
      "No action for 30 days → becomes Local Law",
      "Veto → returned with written objections",
      "No pocket veto: silence = enactment"
    ],
    source: { label: "NYC Charter §37", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-390" }
  },
  "law-override": {
    name: "Step 7 (conditional) — Council Override",
    silo: "doing",
    subhead: "34 of 51 (2/3) within 30 days of veto",
    description: "If vetoed, Council has 30 days to reconsider. Override requires a 2/3 supermajority — 34 of 51 Members. If achieved, the bill becomes law notwithstanding the Mayor's objections.",
    keyFacts: [
      "Override threshold: 34 of 51 (2/3)",
      "30-day reconsideration window",
      "Successful override enacts the law immediately"
    ],
    source: { label: "NYC Charter §37", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-390" }
  },
  "law-effective": {
    name: "Step 8 — Effective Date",
    silo: "doing",
    subhead: "Default: immediately upon enactment",
    description: "A local law takes effect on the date specified in its text. If no effective date is specified, it takes effect immediately upon enactment. Many laws delay effect by 30/90/120/180 days to give agencies time for rule-making and implementation.",
    keyFacts: [
      "Default = immediately on enactment if not otherwise specified",
      "Common practice: delay 30–180 days for agency implementation",
      "Some require companion RCNY rules before fully operative"
    ],
    source: { label: "NYC Charter §37", url: "https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCcharter/0-0-0-390" }
  },
  "law-codify": {
    name: "Step 9 — Codification",
    silo: "legal",
    subhead: "Numbered & placed in the Admin Code (or Charter)",
    description: "Once enacted, the law gets a sequential number (e.g., 'Local Law 64 of 2023') and is codified by the city's law publisher (American Legal Publishing) into either the Administrative Code, the Charter, or another body of city law as the bill directs. The Local Law text itself is authoritative.",
    keyFacts: [
      "Numbered sequentially by year (LL 64/2023)",
      "Most amend the Administrative Code",
      "Some amend the Charter (subject to §38 referendum rules)",
      "Codification is mechanical — the Local Law text controls"
    ],
    source: { label: "NYC Administrative Code", url: "https://codelibrary.amlegal.com/codes/newyorkcity/" }
  },

  // ============ BUDGET PROCESS OVERLAY ============
  "budget-process-overview": {
    name: "NYC Annual Budget Cycle",
    silo: "budget",
    subhead: "NYC Charter Chapter 10 · FY July 1 – June 30",
    description: "A statutorily-deadlined cycle running November through June. The Mayor proposes; the Council modifies and adopts; the Comptroller and the Independent Budget Office independently analyze; Borough Presidents and Community Boards weigh in. The Expense Budget and the separate Capital Budget run on parallel but interlocking tracks. FY2027 is the first cycle under Mayor Mamdani and Speaker Menin.",
    keyFacts: [
      "Statutory adoption deadline: June 5 (Charter §254)",
      "If Council fails to adopt by June 5, prior year's budget rolls over",
      "FY27 Preliminary: $127B (Feb 2026); Executive: $124.7B (May 2026)"
    ],
    source: { label: "NYC Charter Chapter 10", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-revenue": {
    name: "Step 1 — Comptroller Revenue Certification",
    silo: "budget",
    subhead: "Nov 1 · §229",
    description: "The Comptroller certifies actual prior-year revenues to the Mayor. This sets the audited baseline against which next year's projections are built. The Mayor must publish a Nov 15 comparison of actual vs. previously estimated revenues.",
    keyFacts: [
      "Independent revenue certification by the elected Comptroller",
      "Anchors the next FY conversation in audited actuals",
      "Mayor's comparison report due Nov 15"
    ],
    source: { label: "NYC Charter §229", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-capcert": {
    name: "Step 2 — Preliminary Capital Debt Certificate",
    silo: "budget",
    subhead: "Jan 16 · §235",
    description: "Mayor publishes a preliminary certificate setting the maximum debt the City may soundly incur for capital projects. This caps the size of the four-year capital commitment plan.",
    keyFacts: [
      "Ceiling on capital borrowing capacity",
      "Distributed to Council, Comptroller, BPs, and CPC",
      "Companion to the operating preliminary budget"
    ],
    source: { label: "NYC Charter §235", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-prelim": {
    name: "Step 3 — Mayor's Preliminary Budget",
    silo: "budget",
    subhead: "Jan 16 · §236",
    description: "The Mayor submits the Preliminary Budget — a forecast of next year's expenses, revenues, and capital plan — to Council, public, BPs, and CPC. Produced by the Office of Management and Budget (OMB). For FY2027 (released Feb 2026 under Mamdani): $127B, with an assumed 9.5% property-tax hike.",
    keyFacts: [
      "Includes expense budget, capital commitment plan, four-year financial plan",
      "OMB is the Mayor's budget agency",
      "FY27 Preliminary: $127B, Feb 2026 — first under Mamdani"
    ],
    source: { label: "NYC Charter §236", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-ibo": {
    name: "Step 4 — IBO Preliminary Analysis",
    silo: "budget",
    subhead: "Feb 1 · §237",
    description: "The Independent Budget Office publishes its first independent analysis of the Preliminary Budget, including alternative revenue/expenditure allocations. IBO is a nonpartisan office modeled on the federal Congressional Budget Office.",
    keyFacts: [
      "IBO is statutorily independent — not under Mayor or Council",
      "Three required IBO reports per cycle: Feb 1, mid-March, May 15",
      "Provides alternative ways of allocating resources"
    ],
    source: { label: "NYC Charter §237", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-cbbp": {
    name: "Step 5 — CB Responsiveness + BP Modifications",
    silo: "reviewing",
    subhead: "Feb 15 (CBs) · Mar 10–25 (BPs)",
    description: "Community Boards assess whether the Preliminary Budget responds to their submitted priorities (§238). Borough Presidents then submit recommended modifications (§245), constrained by the rule that the net effect can't increase total appropriations.",
    keyFacts: [
      "CB priorities feed into the Preliminary Budget months earlier",
      "BP modifications must be revenue-neutral (offsetting cuts required)",
      "Both are advisory"
    ],
    source: { label: "NYC Charter §§238, 245", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-response": {
    name: "Step 6 — Council Preliminary Budget Response",
    silo: "budget",
    subhead: "Mar 25 · §247",
    description: "The Council holds extensive hearings (Finance Committee + each oversight committee) and publishes its Preliminary Budget Response by March 25 — its formal counter-proposal of additions, cuts, and policy priorities for the Mayor to consider in the Executive Budget.",
    keyFacts: [
      "Council Finance Committee leads",
      "Response is the Council's main leverage point before Executive Budget",
      "Often the public peak of budget negotiation tension"
    ],
    source: { label: "NYC Charter §247", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-exec": {
    name: "Step 7 — Mayor's Executive Budget",
    silo: "budget",
    subhead: "Apr 26 · §249",
    description: "The Mayor submits the Executive Budget and budget message, revising the Preliminary Budget in light of Council, BP, and IBO input. Includes a four-year financial plan update. In odd-numbered years the Mayor also publishes the finalized Ten-Year Capital Strategy. FY27 Executive: $124.7B, released May 2026 — no property-tax hike, no reserve draw.",
    keyFacts: [
      "Revised expense plan + updated four-year financial plan",
      "Ten-Year Capital Strategy finalized same date in odd years (§248, Ch. 9)",
      "FY27: $124.7B released May 2026 under Mamdani"
    ],
    source: { label: "NYC Charter §§248, 249", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-exechrgs": {
    name: "Step 8 — Council Executive Budget Hearings",
    silo: "budget",
    subhead: "May 6–25 · §§251–253",
    description: "Council holds public hearings on the Executive Budget. BPs submit responses by May 6 (§251); IBO publishes its Executive Budget analysis by May 15 (§252). This is the negotiation window — the 'handshake' between Mayor and Speaker typically lands in late May or early June.",
    keyFacts: [
      "BP responses due May 6; IBO analysis May 15",
      "Speaker–Mayor handshake is the practical adoption moment",
      "Hearings cover every agency"
    ],
    source: { label: "NYC Charter §§251–253", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-adopt": {
    name: "Step 9 — Council Adopts Budget",
    silo: "budget",
    subhead: "June 5 statutory · often late June in practice · §254",
    description: "Council adopts the budget by majority vote. If Council fails to adopt by June 5, the prior year's budget extends automatically as the new year's budget. The Mayor then has 5 days to veto Council additions or increases (§255); a 2/3 Council vote overrides.",
    keyFacts: [
      "Statutory deadline: June 5; in practice often adopted late June",
      "No adoption = prior year budget rolls over automatically",
      "Mayor's line-item-style veto on Council additions (§255); 2/3 override",
      "Fiscal year begins July 1"
    ],
    source: { label: "NYC Charter §§254, 255", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-cert": {
    name: "Step 10 — Certification & Capital Comparison",
    silo: "budget",
    subhead: "Next day (cert) · 30 days (capital comparison) · §§256, 257",
    description: "The day after adoption, the Mayor, Comptroller, and City Clerk jointly certify the budget. Within 30 days, the Mayor publishes a comparison of the adopted capital budget against the Ten-Year Capital Strategy.",
    keyFacts: [
      "Three-signature certification (Mayor, Comptroller, Clerk)",
      "30-day capital-vs.-strategy reconciliation required"
    ],
    source: { label: "NYC Charter §§256, 257", url: "https://nyccharter.readthedocs.io/c10/" }
  },
  "bud-mods": {
    name: "Step 11 — Mid-Year Financial Plan Updates",
    silo: "budget",
    subhead: "Quarterly + ad hoc · §258",
    description: "During the fiscal year, the Mayor reexamines revenue and expenditure projections at least quarterly and issues Financial Plan Updates — the November Plan, then the January (Preliminary), April (Executive), and any modifications conditions warrant. Material reallocations (e.g., shifts across units of appropriation) require Council approval.",
    keyFacts: [
      "Quarterly reexamination required",
      "November Plan is the year's first formal modification",
      "Material reallocations require Council approval"
    ],
    source: { label: "NYC Charter §258", url: "https://nyccharter.readthedocs.io/c10/" }
  }
};

// ============ OVERLAY DEFINITIONS ============
// Each overlay is a process that links existing diagram nodes. App.js merges this into its OVERLAYS registry.
window.NYC_GOV_OVERLAYS_EXT = {
  elurp: {
    name: 'ELURP — Expedited Land Use Review Procedure',
    subtitle: 'Created Nov 2025 · ~90 days · CPC final · click a step for detail',
    overviewId: 'elurp-overview',
    steps: [
      { id:'elurp-cert',   stepNum:'1', shortName:'DCP Certification',                timeLabel:'starts clock',                      arcLabel:'cert.', nodes:['dcp'] },
      { id:'elurp-cb-bp',  stepNum:'2', shortName:'CB + BP (concurrent)',             timeLabel:'60 days · both at once',            arcLabel:'60d',   nodes:['cb-brooklyn','cb-queens','cb-manhattan','cb-bronx','cb-staten-island','cb-total','bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'] },
      { id:'elurp-cpc',    stepNum:'3', shortName:'City Planning Commission',         timeLabel:'30 days · CPC vote is final',       arcLabel:'30d',   nodes:['dcp'] },
      { id:'elurp-ahab',   stepNum:'4', shortName:'AHAB (only if Council reviewed)',  timeLabel:'Mayor + Speaker + BP · 2-of-3',     arcLabel:'AHAB',  nodes:['mayor','city-council','bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'], branch:true }
    ]
  },
  'local-law': {
    name: 'How a Local Law Becomes Part of the Administrative Code',
    subtitle: 'Charter §§28–40 · 26 of 51 to pass · 34 of 51 to override',
    overviewId: 'local-law-overview',
    steps: [
      { id:'law-intro',     stepNum:'1', shortName:'Introduction',                timeLabel:'Stated Meeting',                arcLabel:'intro',  nodes:['city-council','mayor','public-advocate','bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'] },
      { id:'law-committee', stepNum:'2', shortName:'Committee Referral',          timeLabel:'Speaker assigns',               arcLabel:'refer',  nodes:['city-council'] },
      { id:'law-hearing',   stepNum:'3', shortName:'Hearing & Markup',            timeLabel:'public testimony + vote',       arcLabel:'hearing',nodes:['city-council'] },
      { id:'law-layover',   stepNum:'4', shortName:'Seven-Day Layover',           timeLabel:'§36 · 7 calendar days',         arcLabel:'7d',     nodes:['city-council'] },
      { id:'law-vote',      stepNum:'5', shortName:'Full Council Vote',           timeLabel:'26 of 51 needed',               arcLabel:'26/51',  nodes:['city-council'] },
      { id:'law-mayor',     stepNum:'6', shortName:'Mayor',                       timeLabel:'30 days · sign/veto/silence',   arcLabel:'30d',    nodes:['mayor'] },
      { id:'law-override',  stepNum:'7', shortName:'Council Override',            timeLabel:'34 of 51 within 30 days',       arcLabel:'34/51',  nodes:['city-council'], branch:true },
      { id:'law-effective', stepNum:'8', shortName:'Effective Date',              timeLabel:'default: immediately',          arcLabel:'eff.',   nodes:['admin-code'] },
      { id:'law-codify',    stepNum:'9', shortName:'Codification',                timeLabel:'into Admin Code',               arcLabel:'codify', nodes:['admin-code','nyc-charter'] }
    ]
  },
  'budget-process': {
    name: 'NYC Annual Budget Cycle (FY July 1 – June 30)',
    subtitle: 'Charter Chapter 10 · Nov 1 → June 30',
    overviewId: 'budget-process-overview',
    steps: [
      { id:'bud-revenue',  stepNum:'1',  shortName:'Comptroller Revenue Cert.', timeLabel:'Nov 1 · §229',          arcLabel:'Nov 1',   nodes:['comptroller'] },
      { id:'bud-capcert',  stepNum:'2',  shortName:'Capital Debt Certificate',  timeLabel:'Jan 16 · §235',         arcLabel:'Jan 16',  nodes:['mayor','capital-budget'] },
      { id:'bud-prelim',   stepNum:'3',  shortName:"Mayor's Preliminary Budget",timeLabel:'Jan 16 · §236',         arcLabel:'Jan 16',  nodes:['mayor','budget-overview','expense-budget','capital-budget'] },
      { id:'bud-ibo',      stepNum:'4',  shortName:'IBO Analysis',              timeLabel:'Feb 1 · §237',          arcLabel:'Feb 1',   nodes:['comptroller'] },
      { id:'bud-cbbp',     stepNum:'5',  shortName:'CB + BP Input',             timeLabel:'Feb 15 / Mar 10–25',    arcLabel:'Feb–Mar', nodes:['cb-total','bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'] },
      { id:'bud-response', stepNum:'6',  shortName:'Council Prelim. Response',  timeLabel:'Mar 25 · §247',         arcLabel:'Mar 25',  nodes:['city-council'] },
      { id:'bud-exec',     stepNum:'7',  shortName:"Mayor's Executive Budget",  timeLabel:'Apr 26 · §249',         arcLabel:'Apr 26',  nodes:['mayor','executive-budget','expense-budget','capital-budget'] },
      { id:'bud-exechrgs', stepNum:'8',  shortName:'Exec. Budget Hearings',     timeLabel:'May 6–25 · §§251–253',  arcLabel:'May',     nodes:['city-council'] },
      { id:'bud-adopt',    stepNum:'9',  shortName:'Council Adopts',            timeLabel:'June 5 · §254',         arcLabel:'June 5',  nodes:['city-council','adopted-budget'] },
      { id:'bud-cert',     stepNum:'10', shortName:'Certification',             timeLabel:'next day · §§256, 257', arcLabel:'cert.',   nodes:['mayor','comptroller','adopted-budget','capital-budget'] },
      { id:'bud-mods',     stepNum:'11', shortName:'Mid-Year Modifications',    timeLabel:'quarterly · §258',      arcLabel:'mod.',    nodes:['mayor','operating-budget'] }
    ]
  }
};

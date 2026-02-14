
const PERSONA_NAMES = {
  "111": "THE UNICORN",
  "110": "THE HIDDEN GEM",
  "101": "THE SURFACE LEARNER",
  "100": "THE RIGID EXPERT",
  "011": "THE RISING STAR",
  "010": "THE GRINDER",
  "001": "THE CHARLATAN",
  "000": "THE DEAD WOOD"
};

// Key format: "SWP" + "MFCP" (7 bits)
// S=SKL, W=WLL, P=PTCH | M=MKT, F=MIC, C=CLT, P=PAY
const ADVICE_DATABASE = {
  // 111: THE UNICORN
  "1111111": {
    managerPatch: "PEAK RESONANCE. PROTOCOL: Radical Non-Intervention. Patch: Hands off. Grant 100% autonomy; if you dictate the \"how,\" you lose the unit. Up-Skill: Task with \"Structural Governance\"—designing standards/libraries for the entire org. Up-Motivate: Grant Veto Power over technical roadmap decisions. Up-Pitch: Use as the brand face for elite recruiting. Retention: Market-top pay is the floor.",
    individualSequence: "GOD MODE. STATUS: Peak Resonance. Stay: Focus on \"Legacy Projects\"—work that defines the company’s decade. Leave: Only for a Founding seat with significant equity. Hunt: Filter your network; you are the hunter. Universal: Use your \"Right of Refusal\" on technically unsound projects. Negotiate for a \"Principal\" title that detaches your value from hourly output."
  },
  "1111110": {
    managerPatch: "ARBITRAGE RISK. PROTOCOL: Immediate Liquidity Adjustment. Action: Bull market + Strong Co = No excuse for pay gap. Patch: Immediate 20% salary adjustment; bypass annual cycles. Up-Skill: Assign \"Efficiency Architecture\" to save costs. Up-Motivate: Acknowledge the math error before they bring it to you to preserve trust. Up-Pitch: Publicly credit their wins to justify the raise to the board.",
    individualSequence: "THE BARGAIN. STATUS: Value Leakage. Stay: Only if a \"Market Correction\" is issued within fourteen days. Leave: Bull market liquidity is high; your talent is being sold at a major discount. Hunt: Trigger a bidding war between competitors. Universal: If pay isn't matched, your loyalty is a tax. Use your high Pitch to secure a market-top offer at a Strong firm."
  },
  "1111101": {
    managerPatch: "LEAD SHIELDING. PROTOCOL: Decoupling from Toxicity. Action: Isolate unit from political rot. Patch: Move to \"Special Projects\" reporting directly to the C-suite. Up-Skill: Focus on \"Impossible\" technical puzzles. Up-Motivate: Validate their frustration; prove you are fixing the rot by terminating toxic influencers. Up-Pitch: None. Shed: If culture remains 0, the Unicorn's Will (W) will eventually flip to 0.",
    individualSequence: "THE ISOLATED. STATUS: Winning in Rot. Stay: Negotiate for a \"Decoupled Team\" reporting directly to the C-suite to bypass mid-tier toxicity. Leave: If cultural friction erodes your technical velocity. Hunt: Filter strictly for \"High Trust\" firms. Universal: Recognize the \"Culture Tax\"—low vibes de-skill you over time by exhausting your internal Will."
  },
  "1111100": {
    managerPatch: "SYSTEM REDLINE. PROTOCOL: Emergency Rescue. Action: Unit is underpaid and bullied in a Bull market. Patch: Immediate 48-hour \"Nuclear Option\"—double the salary and terminate the toxic peer today. Up-Skill: None. Up-Pitch: None. Shed: If the firm's bureaucracy prevents this double-fix, the unit is effectively gone. Prepare for a massive knowledge drain.",
    individualSequence: "THE ESCAPEE. STATUS: System Insult. Stay: No. Leave: Immediately. Resign with zero notice if it preserves sanity. Hunt: Your Pitch is at maximum liquid value. Withdraw your talent and deposit it into a High-Trust firm. Universal: A Unicorn in a toxic, underpaid environment is a waste of hardware. Do not attempt to fix a broken culture."
  },
  "1111011": {
    managerPatch: "FOUNDER'S DEBT. PROTOCOL: Transparency & Vision. Action: Firm is weak, but trust is high. Patch: Open the books; show the burn rate. Up-Skill: Task with \"Crisis Optimization\"—cutting costs through technical efficiency. Up-Motivate: Give \"Founding\" level influence; they will help rebuild if they feel like an owner. Up-Pitch: Grant a \"Partner\" or \"Principal\" title.",
    individualSequence: "THE CAPTAIN. STATUS: Mission-Critical. Stay: If you receive \"Turnaround Equity.\" Help save the ship to build a legend-tier resume. Leave: If leadership hides burn rates. Hunt: Target other Weak firms that need a hero. Universal: Your Will is the engine. Stay only if you have the power to steer the ship, not just row it."
  },
  "1111010": {
    managerPatch: "HERO DEBT. PROTOCOL: Lifestyle Compensation. Action: No cash, high trust. Patch: Offer \"Time Capital\"—3-day work weeks, remote-forever, or unlimited PTO. Up-Skill: Framework design. Up-Motivate: Be honest: \"We can't pay market, but we give you total freedom.\" Up-Pitch: Grant \"Technical Fellow\" title to compensate for the cash gap.",
    individualSequence: "THE DONOR. STATUS: High Will, Low Fuel. Stay: Set a \"Hard Sunset\" date (ninety days) for financials to improve. Leave: If your personal runway is shorter than the company's. Hunt: Leverage the \"Captain\" narrative to land a Principal role. Universal: Cash is fuel. If the company is out of gas, your Skill cannot save you from personal financial stagnation."
  },
  "1111001": {
    managerPatch: "THE MERCENARY. PROTOCOL: High-Output Extraction. Action: Staying for the check, hate the vibe. Patch: Strict transactional milestones. Up-Skill: Give projects that look incredible on a resume (AI, new stack). Up-Motivate: Financials only. Up-Pitch: None. Shed: Assume they are an active flight risk. Get 100% of their knowledge into documentation before they exit.",
    individualSequence: "THE MERCENARY. STATUS: Tactical Extraction. Stay: Collect the check; mute the culture. Build \"Fortress Wealth.\" Leave: As soon as a Strong financial offer appears. Hunt: You are a hired gun. Move to the highest bidder with the lowest friction. Universal: Don't give your heart to a sinking, toxic ship. Trade your code for their cash and nothing more."
  },
  "1111000": {
    managerPatch: "THERMAL RUNAWAY. PROTOCOL: Graceful Decommissioning. Action: Bull market + Weak Co + Toxic + Low Pay. Shed: Facilitate a graceful exit today. Provide a glowing reference and intros to \"Strong\" firms. Up-Skill/Motivate: Non-viable investment. Env: You cannot save this engine in a Bull market with no pay/culture. Preserving the bridge is the only professional move left.",
    individualSequence: "ABANDON SHIP. STATUS: Thermal Runaway. Stay: No. Leave: Today. Hunt: Any Strong environment is an upgrade. Universal: Your reputation is tied to your signal. Move to a functioning system to reset before the environment overclocks your stress levels."
  },
  "1110111": {
    managerPatch: "DEEP RESEARCH. PROTOCOL: Long-Term R&D. Action: Bear market locks exit; Strong Co provides runway. Patch: Assign \"The Impossible Goal\"—build the 10x version of the product. Up-Skill: Deep technical mastery. Up-Motivate: Remind them that Bear markets are where real legends are built. Up-Pitch: Internal-facing demos. Keep: High.",
    individualSequence: "SAFE HARBOR. STATUS: Skill Compounding. Stay: Best seat for a Bear market. Deepen niche expertise and lifestyle. Leave: No. Jumping in a Bear market is a logic error. Hunt: Zero activity. Universal: Focus on \"Institutional Memory.\" Become the person the organization literally cannot afford to lay off."
  },
  "1110110": {
    managerPatch: "THE STABLE LEAK. PROTOCOL: Proactive Rebalancing. Action: Safe but feel undervalued. Patch: Give the raise now, while they aren't looking. Don't exploit Bear market lack of mobility. Up-Skill: Master-level mentorship of others. Up-Pitch: Highlight work in internal newsletters. Retention: You are \"pre-buying\" loyalty for the next Bull market.",
    individualSequence: "PATIENT STAR. STATUS: Hidden Value. Stay: If they fix the pay. Remind them Bear markets don't devalue Unicorns. Leave: If a competitor offers a \"Bear-Market Premium.\" Hunt: Low-intensity networking. Universal: Request a \"Promotion in Title\" now as a placeholder for cash. It increases your Price for the next Bull cycle."
  },
  "1110101": {
    managerPatch: "TEAM SURGERY. PROTOCOL: Cultural Purge. Action: Stay for pay, hate the team. Patch: Use Bear market stability to fire the \"Charlatans\" and \"Saboteurs.\" Up-Skill: Internal tools. Up-Motivate: Prove you are building a team worthy of their skill. Keep: Secure, but only if the vibe improves. If it doesn't, they jump the second M=1.",
    individualSequence: "GOLDEN CAGE. STATUS: High-Pay Prison. Stay: For the capital. Use stability to fund personal research and development. Leave: If toxicity kills your Will. Hunt: You have the luxury of time; be extremely picky. Universal: If your Will flips to zero because of the culture, you are in danger of stagnation. Change environments to save your Skill."
  },
  "1110100": {
    managerPatch: "THE ADJUSTMENT. PROTOCOL: Financial Stabilization. Action: Strong Co, but they are underpaid and miserable. Patch: Raise pay immediately using Strong Co funds. Money is the only lever left to stop the rot. Up-Skill: Systems architecture. Up-Motivate: Purely cash-based motivation. Env: Start a 12-month culture reboot, but lead with the check to buy time.",
    individualSequence: "THE FOXHOLE. STATUS: Friction Lock. Stay: Minimal effort. Use the company’s bank to fund your certifications. Leave: The second the Bull cycle starts. Hunt: Spend part of your week preparing your Pitch for the market flip. Universal: You are a captive asset; treat the job as a paid study-hall until the exit door opens."
  },
  "1110011": {
    managerPatch: "GHOST PILOT. PROTOCOL: Radical Inclusion. Action: Ship is sinking, but they love the crew. Patch: Give a seat on the \"Survival Committee.\" Up-Skill: \"Pivot Technology.\" Up-Motivate: They are the moral center of the firm; treat as a Co-Founder. Shed: If the runway ends, they will be the last one out. Honor that loyalty.",
    individualSequence: "LOYALTY PLAY. STATUS: Emotional Anchor. Stay: You stay for the people. Audit runway monthly. Leave: When runway hits less than three months. Hunt: Reach out to network Unicorns at other firms. Universal: Do not let your loyalty become a financial liability. Never go down with a ship you do not own."
  },
  "1110010": {
    managerPatch: "THE VOLUNTEER. PROTOCOL: Emotional Validation. Action: No money, high trust. Patch: Grant \"Technical Fellow\" title. Up-Skill: High-level mentoring. Up-Motivate: Public, loud validation of sacrifice. Env: Monitor for burnout; offer \"Time Capital\" (unlimited PTO) to compensate for the cash gap. Keep: High, but fragile.",
    individualSequence: "THE VOLUNTEER. STATUS: Self-Sacrifice. Stay: Only if you are okay being a \"Martyr.\" Vibes are the only pay. Leave: If you have financial anxiety. Hunt: Move to a firm that pays for Will. Universal: Your high Will is a finite resource. Don't spend it all on a company that cannot sustain itself or your growth."
  },
  "1110001": {
    managerPatch: "GOLDEN GHOST. PROTOCOL: Documentation Focus. Action: Staying for paycheck in failing system. Patch: Treat as an external consultant. Up-Skill: Resume-building projects. Up-Motivate: Purely metric-based bonuses. Shed: They are a massive cost center. If the firm must cut, this unit is a logical target despite their skill.",
    individualSequence: "THE CAPTIVE. STATUS: Math Winner. Stay: Winning the math, losing the soul. Leave: Expect a layoff; you are a target in a weak firm. Hunt: Active. Your current firm is a ticking clock. Universal: Increase external Pitch visibility so you aren't seen as part of the company's failure when the end comes."
  },
  "1110000": {
    managerPatch: "ABSOLUTE ZERO. PROTOCOL: System Shutdown. Action: Total failure of pay, culture, and company. Shed: Help them find a role elsewhere as a human courtesy. Up-Skill/Motivate: Non-viable. Env: A Unicorn in an 0000 environment will eventually become a toxic \"Surface Learner.\" Shut down the unit to save the person.",
    individualSequence: "THE REBOOT. STATUS: Critical Failure. Stay: No. The system has failed. Leave: Immediately. Hunt: Reset expectations. A lateral move to a functioning Strong firm is a win. Universal: You need a \"Palate Cleanser\"—find a small, High-Trust boutique firm where you can rebuild your signal."
  },

  // 110: THE HIDDEN GEM
  "1101111": {
    managerPatch: "SILENT PEAK. PROTOCOL: Signal Amplification. Patch: Radical validation. Do not ignore them just because they are quiet. Up-Skill: Task with \"Knowledge Base Architecture\"—formalizing their silent expertise. Up-Motivate: High-specificity private praise. Up-Pitch: Act as their \"Marketing Department\" in leadership meetings. Universal: Create a \"Wins Log\" for them; if you do not broadcast their value, the Unicorn gets the credit for their work.",
    individualSequence: "SILENT PEAK. STATUS: Optimal. Stay: High-reward zone. Secure your \"Institutional Memory\" status. Leave: Only for a \"Technical Fellow\" track at a Tier-1 firm. Hunt: Zero urgency. Let headhunters find you. Universal: Stop assuming the work speaks for itself. Create a Monthly Technical Digest for your manager. You are providing System Status Reports, not bragging."
  },
  "1101110": {
    managerPatch: "THE BARGAIN. PROTOCOL: Retention Correction. Action: They will not ask for a raise; they will simply vanish. Patch: Immediate market-rate adjustment. Up-Skill: Advanced technical ownership. Up-Motivate: Explicitly acknowledge their \"invisible\" load. Up-Pitch: Publicly celebrate a technical milestone to justify the raise to stakeholders. Universal: This is your highest poach-risk unit because they are \"cheap\" for the massive technical value they provide.",
    individualSequence: "THE BARGAIN. STATUS: Value Leak. Stay: Only if pay is corrected within thirty days. You are a \"Discount Engine\" for a wealthy firm. Leave: Bull market liquidity is high. Hunt: Trigger a bidding war. Use your \"Invisible\" wins as a hard-skill pitch. Universal: Find a \"Sponsor\" (a Unicorn or high-trust Lead) to broadcast your value. Trade your deep skill for their high pitch."
  },
  "1101101": {
    managerPatch: "SHADOW ANCHOR. PROTOCOL: Toxic Isolation. Action: Protect from loud influencers. Patch: Move to a direct-report line to bypass political noise. Up-Skill: Deep-work puzzles. Up-Motivate: Validate their frustration with the culture. Up-Pitch: None. Universal: If culture is poor, the Gem will eventually \"Quiet Quit.\" They will not fight the toxicity; they will just disengage.",
    individualSequence: "SHADOW ANCHOR. STATUS: High-Pay Friction. Stay: Isolate technically. Do not participate in political noise. Leave: If a \"High Trust\" firm offers lateral pay. Hunt: Target engineering-led shops where quiet productivity is the metric. Universal: If culture is toxic, your Skill will eventually stagnate because you are using all your Will on survival. Recognize this \"Talent Tax\" early."
  },
  "1101100": {
    managerPatch: "SYSTEM LEAK. PROTOCOL: Crisis Repair. Action: Underpaid and bullied in a Bull market. Patch: Major raise plus immediate termination of the toxic influencer. Up-Skill: None. Up-Motivate: Immediate environmental cleanup. Up-Pitch: None. Universal: If you cannot fix the vibes, the Gem is already interviewing. Expect a sudden, silent hole in your codebase and institutional knowledge.",
    individualSequence: "EXPLOITATION. STATUS: System Insult. Stay: No. Toxicity and low pay in a Bull market is a career tax. Leave: Fast. Hunt: Use \"Hard Skills\" as the primary hook. Market yourself as the \"Fixer\" who delivers results without drama. Universal: Weaponize your documentation. If you are the single point of failure and underpaid, point out the knowledge risk of you leaving."
  },
  "1101011": {
    managerPatch: "THE ENGINE. PROTOCOL: Vision Inclusion. Action: Firm is weak, but they love the team. Patch: Radical transparency. Up-Skill: Task with \"Cost-Reduction Infrastructure.\" Up-Motivate: Give a \"Principal\" title. They must feel like the technical savior. Up-Pitch: Use their work to attract new funding. Universal: They stay for the people, but the lack of company strength is a ticking clock.",
    individualSequence: "THE ENGINE. STATUS: Essential Support. Stay: Only for equity or leadership. You are the glue holding a weak firm together. Leave: If the pivot is technically unsound. Hunt: Strong micro-financial firms. Sell your \"Crisis Durability\" as unique value. Universal: In a weak firm, your Pitch must increase. If they can't pay you, they must give you a title that increases your future market price."
  },
  "1101010": {
    managerPatch: "THE DONOR. PROTOCOL: Emotional Retention. Action: No cash, high trust. Patch: Offer \"Lifestyle Capital\" (flexibility and autonomy). Up-Skill: Niche mastery. Up-Motivate: Be honest about the financial horizon. Up-Pitch: Publicly credit them as the \"Core of the Firm.\" Universal: They are donating skill; do not exploit their lack of self-promotion.",
    individualSequence: "THE DONOR. STATUS: Altruistic Stagnation. Stay: Only for the team. Set a hard six-month financial \"Fix\" date. Leave: Compassion doesn't compound wealth. Hunt: Move to a Strong firm. Your current role is a drain on market value. Universal: Do not let your low pitch allow the company to exploit your high will. If the bank is empty, your skill is being donated for free."
  },
  "1101001": {
    managerPatch: "THE GHOST. PROTOCOL: Extraction. Action: Staying for the check, hate the vibe. Patch: Strict documentation requirements. Up-Skill: Projects that look excellent on a resume. Up-Motivate: Financials only. Up-Pitch: None. Universal: Assume they are an active flight risk. Extract their technical secrets into the system before they exit.",
    individualSequence: "TRANSACTING GHOST. STATUS: Capital Extraction. Stay: Collect the check. Mute the culture. Build \"Fortress Wealth.\" Leave: When a strong financial opportunity appears. Hunt: You are a mercenary. Move to the highest bidder with the lowest emotional friction. Universal: If the culture is rot, don't give them your heart. Trade your code for their cash and nothing more."
  },
  "1101000": {
    managerPatch: "EVACUATION. PROTOCOL: Human-First Exit. Action: Bull market mobility is too high for them to stay. Shed: Help them find a role at a Strong firm. Up-Skill/Motivate: Non-viable. Up-Pitch: Provide a glowing reference. Universal: A Gem in this environment will eventually burn out and quit with no notice. Preserving the bridge is the only professional win left.",
    individualSequence: "ABANDON SHIP. STATUS: Thermal Runaway. Stay: No. Leave: Today. Hunt: Any \"Strong\" environment is an upgrade. Universal: Your reputation is tied to your signal. Move to a functioning system to reset."
  },
  "1100111": {
    managerPatch: "STABLE HARBOR. PROTOCOL: Mastery & Mentorship. Action: Best seat for Bear market. Patch: Assign them to mentor Rising Stars. Up-Skill: 12-month research and development focus. Up-Motivate: Internal recognition of deep-work. Up-Pitch: Internal demos only. Universal: Focus on \"Institutional Memory.\" Make them the person the system cannot function without while the market is closed.",
    individualSequence: "SAFE HARBOR. STATUS: Mastery Phase. Stay: Best seat for a Bear market. Deepen your niche. Leave: No. The unknown is a logic error in this macro. Hunt: Zero activity. Universal: Focus on \"Institutional Memory.\" Become the person the system literally cannot function without while the market is closed."
  },
  "1100110": {
    managerPatch: "PATIENT STAR. PROTOCOL: Future-Proofing. Action: Secure but undervalued. Patch: Give the raise now to \"Pre-buy\" loyalty for the next Bull cycle. Up-Skill: Leadership track training. Up-Motivate: Define a 3-year growth path. Up-Pitch: Move into Architecture roles. Universal: Do not exploit the Bear market; they will remember the math when the market eventually flips.",
    individualSequence: "PATIENT STAR. STATUS: Strategic Wait. Stay: If they fix the pay. Request a \"Promotion in Title\" now as a placeholder for cash. Leave: If a competitor offers a \"Bear Premium.\" Hunt: Low-intensity networking only. Universal: Don't let them exploit the Bear market to underpay you. A Gem's value is constant regardless of market cycles."
  },
  "1100101": {
    managerPatch: "TEAM SURGERY. PROTOCOL: Purge Friction. Action: Stay for pay, hate the vibe. Patch: Use Bear market stability to fire the toxic loudmouths. Up-Skill: Tooling automation. Up-Motivate: Show you are building a team worthy of them. Up-Pitch: None. Universal: Secure for now, but they will jump the second the market turns if the vibe remains poor.",
    individualSequence: "GOLDEN NESTER. STATUS: Protective Stagnation. Stay: For capital. Use the Bear market to decline \"Vibe\" events. Leave: If toxicity starts \"de-skilling\" you. Hunt: You have time. Be the most \"Picky\" candidate on the market. Universal: If your Will flips to zero because of the culture, you are in danger of becoming Dead Wood. Change environments to save your Skill."
  },
  "1100100": {
    managerPatch: "HOLDING CELL. PROTOCOL: Financial Stabilizer. Action: Strong Company, but they are underpaid and miserable. Patch: Raise pay immediately. Money is the only lever left to stop the rot. Up-Skill: System design. Up-Motivate: Cash only. Up-Pitch: None. Universal: Start a culture reboot, but lead with the check to buy time.",
    individualSequence: "THE ADJUSTMENT. STATUS: Friction Lock. Stay: Minimal effort. Use the company's bank to fund your certs. Leave: When the cycle turns Bull. Hunt: Spend part of your week preparing your \"Visibility Pitch\" for the next market flip. Universal: You are a captive asset; treat the job as a paid study-hall until the exit door opens."
  },
  "1100011": {
    managerPatch: "LAST LIGHT. PROTOCOL: Radical Honesty. Action: Sinking ship, high trust. Patch: Seat on the \"Survival Committee.\" Up-Skill: Pivot Engineering. Up-Motivate: They are the moral center of the firm. Up-Pitch: None. Universal: They stay for the people. Honor that loyalty, but do not let them go down with the ship.",
    individualSequence: "THE SURVIVOR. STATUS: Loyalty Play. Stay: Stay for the people. Don't be the last one on a dead ship. Leave: If runway hits less than three months. Hunt: Reach out to network \"Unicorns.\" They know your value. Universal: Do not let your loyalty become a financial liability. A Gem should never go down with a ship they do not own."
  },
  "1100010": {
    managerPatch: "THE VOLUNTEER. PROTOCOL: Emotional Pay. Action: No money, high trust. Patch: Grant \"Technical Fellow\" title. Up-Skill: Mentoring others. Up-Motivate: Public validation. Up-Pitch: None. Universal: Monitor for burnout. They are carrying the technical load on a \"Vibe\" salary.",
    individualSequence: "THE VOLUNTEER. STATUS: Self-Sacrifice. Stay: Only if okay being a \"Martyr.\" Vibes are the only pay. Leave: If you have financial anxiety. Hunt: Move to a firm that pays for Will. Universal: Your high Will is a finite resource. Don't spend it all on a company that cannot sustain itself or your growth."
  },
  "1100001": {
    managerPatch: "CAPTIVE ASSET. PROTOCOL: Extraction Metric. Action: Only staying for the check in a failing system. Patch: Treat as an external consultant. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: Focus on documentation. If you must cut costs, this unit is a target despite their skill due to high cost.",
    individualSequence: "THE CAPTIVE. STATUS: Math Winner. Stay: Winning math, losing soul. Leave: Expect a layoff; increase visibility now to avoid the \"Easy Cut.\" Hunt: Active. Your current firm is a ticking clock. Universal: Increase external visibility (Pitch) so you aren't seen as part of the company's failure when the end comes."
  },
  "1100000": {
    managerPatch: "NULL STATE. PROTOCOL: Decommission. Action: Total failure of pay, vibe, and company. Shed: Help them find a role elsewhere. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: A Gem here will eventually become \"Dead Wood\" through depression. Shut it down to save the person.",
    individualSequence: "THE REBOOT. STATUS: Null State. Stay: No. Leave: Immediately. Hunt: Reset expectations. A lateral move to a functioning \"Strong/High-Trust\" firm is a massive win. Universal: You need a \"Palate Cleanser\"—find a small, High-Trust boutique firm where you can rebuild your signal and recover your Will."
  },

  // 101: THE SURFACE LEARNER
  "1011111": {
    managerPatch: "THE NOMAD. PROTOCOL: Strategic Exit. Patch: Do not invest in long-term development. Up-Skill: Assign ego-challenging tasks they cannot \"talk\" their way through. Up-Motivate: Tie reputation to new mastery. Up-Pitch: Let them lead a demo for a competitor to facilitate their exit. Universal: Their high Pitch creates a \"Full Cup\" syndrome; they believe they have nothing left to learn. Use public peer reviews to highlight skill gaps.",
    individualSequence: "THE NOMAD. STATUS: Reputation Peak. Stay: Dangerous. You are at risk of being found out. Use the stability to actually learn the skills you've been pitching. Leave: Optimal. Your market value is high based on optics. Hunt: Jump to a new firm before your lack of \"Will\" is audited by technical peers. Universal: You believe you have peaked, but your lack of growth is a ticking bomb. In a Bull market, people buy the \"Pitch.\" In a Bear market, they audit the \"Skill.\""
  },
  "1011110": {
    managerPatch: "THE AGITATOR. PROTOCOL: Negotiation Hardline. Action: Vocal and underpaid. Patch: Deny raises without 180-day Will (W) improvement. Up-Skill: Mandatory technical certifications. Up-Motivate: None; they are poisoning the well with their Pitch. Up-Pitch: Mute their external visibility. Universal: They use their Pitch to blame the system for their lack of growth. Do not validate the noise; demand the output first.",
    individualSequence: "THE AGITATOR. STATUS: Loud Stagnation. Stay: Only if you commit to a 180-degree \"Will\" reset. Your complaining is louder than your output. Leave: Yes. Your \"Pitch\" can land you a raise elsewhere that your current manager won't grant. Hunt: Target firms with weak technical leadership. Universal: Do not mistake your ability to talk for technical depth. If you move for money without increasing your Skill, you will be the first one cut when the cycle turns."
  },
  "1011101": {
    managerPatch: "THE SHARK. PROTOCOL: Political Isolation. Action: Thrives in toxicity using Pitch to mask low effort. Patch: Move to solo projects with zero junior-team interaction. Up-Skill: Specialized niche tasks. Up-Motivate: Power optics only. Up-Pitch: Isolate their signal from the company brand. Universal: Keep them away from Gems (110); they will steal credit and destroy the Gem's Will.",
    individualSequence: "THE SHARK. STATUS: Toxic Navigator. Stay: Only if you enjoy the political game. You are winning the math but rotting the culture. Leave: If you want to rebuild your professional reputation. Hunt: Target high-growth startups where \"Hustle\" masks the lack of deep Skill. Universal: Your high Pitch is protecting you from your low Will. Eventually, the \"Gems\" around you will leave, and you will be left to actually build—which you currently can't."
  },
  "1011100": {
    managerPatch: "SYSTEM LEAK. PROTOCOL: Immediate Shed. Action: Underpaid and toxic in a Bull market. Patch: Rapid transition out of the org. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: They are currently broadcasting your company’s failures to the market. Move toward a separation agreement today to prevent a total knowledge/reputation drain.",
    individualSequence: "SYSTEM LEAK. STATUS: Imminent Failure. Stay: No. You are a liability to the org and your own career. Leave: Immediately. Hunt: Use your Pitch to bridge to any firm that hasn't seen your recent output stats. Universal: You are broadcasting your own irrelevance. Resign before you are fired; it preserves the \"Pitch\" for your next interview."
  },
  "1011011": {
    managerPatch: "THE TALKER. PROTOCOL: Deliverable Anchoring. Action: Selling a vibe they don't support with effort. Patch: Tie their Pitch directly to weekly technical KPIs. Up-Skill: Basic execution drills. Up-Motivate: Public accountability. Up-Pitch: Limit until technical milestones are met. Universal: Trust 360-degree peer reviews over your own observations; they are experts at managing \"Up\" to you.",
    individualSequence: "THE TALKER. STATUS: Vulnerable Vibe. Stay: You are selling a dream to a dying firm. If you want to stay, you must start building the \"Hardware\" you've been promising. Leave: Yes. Your Pitch is more valuable in a \"Strong\" firm. Hunt: Target \"Sales-Led\" organizations where your high visibility is a feature. Universal: Stop managing \"Up.\" Peer reviews are likely flagging your low Will. Acknowledge the gap and fill it."
  },
  "1011010": {
    managerPatch: "THE VENEER. PROTOCOL: Reality Audit. Action: Coasting on good culture and no money. Patch: Force into a peer-review cycle. Up-Skill: Remedial technical depth. Up-Motivate: Challenge their ego. Up-Pitch: None. Universal: If they refuse to \"empty the cup\" and start learning again, they will sink the turnaround. This unit is a reputation risk during a crisis.",
    individualSequence: "THE VENEER. STATUS: High-Trust Risk. Stay: You are coasting on vibes and trust. If the firm pivots, you will be exposed. Leave: No. You won't find this level of trust elsewhere with your current low output. Hunt: Zero activity. Universal: \"Empty your cup.\" You have the technical baseline (Skill); you just need the Will. If you don't start growing now, you are a \"Dead Wood\" unit in training."
  },
  "1011001": {
    managerPatch: "THE COST CENTER. PROTOCOL: Priority Layoff. Action: Overpaid for actual contribution in a failing firm. Patch: Immediate candidate for cost-cutting. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: Their high Skill makes severance expensive, but their low Will makes them a permanent drain on a weak company's limited resources.",
    individualSequence: "MERCENARY. STATUS: Overpaid Anchor. Stay: Only as long as the check clears. You are a high-cost target for layoffs. Leave: Yes. Move to a firm where you can reset your \"Will\" expectations. Hunt: Any firm with Strong financials. Universal: You are winning the math but losing the skill race. Your \"Overpaid\" status makes you an easy target in a Bear market. Diversify your Skill now."
  },
  "1011000": {
    managerPatch: "NULL SIGNAL. PROTOCOL: Total Loss. Action: Gone in spirit. Shed: Facilitate exit today. Up-Skill/Motivate: Zero ROI. Up-Pitch: None. Universal: Do not spend managerial Will trying to fix their internal Will—it is a non-viable investment. In a Bull market, they will find a new host easily.",
    individualSequence: "NULL SIGNAL. STATUS: Total Disconnection. Stay: No. Leave: Today. Your current environment is exacerbating your low Will. Hunt: Reset your career path. Universal: A 101 in a failing, toxic environment is a downward spiral. You aren't just stagnant; you are regressing. Change industries or disciplines to find a new spark of Will."
  },
  "1010111": {
    managerPatch: "THE NESTER. PROTOCOL: Mandated Evolution. Action: Resting and vesting in a Bear market. Patch: Require a completely new tech stack certification. Up-Skill: Cross-functional training. Up-Motivate: Tie title to new learning. Up-Pitch: Force into a teaching role to expose their lack of depth. Universal: Bear markets lock them in; use this time to force the growth they’ve avoided.",
    individualSequence: "THE NESTER. STATUS: Comfortable Trap. Stay: For the security. But the Bear market won't last forever. Leave: No. The risk of being audited in a new firm is too high. Hunt: Zero activity. Universal: Use this quiet time to master a new tech stack. If you enter the next Bull market with the same Skill you have now, your Pitch won't save you from being replaced."
  },
  "1010110": {
    managerPatch: "THE GRUMBLER. PROTOCOL: Performance Lock. Action: Underpaid and entitled. Patch: Performance-based pay only. Up-Skill: Depth-first tasks. Up-Motivate: Prove the Will, get the pay. Up-Pitch: Internal only. Universal: Monitor for \"Quiet Quitting\" that influences the High-Will Grinders (010). If they won't grow, they must be contained.",
    individualSequence: "THE GRUMBLER. STATUS: Entitled Stall. Stay: Only if you accept that your lack of \"Will\" is why you are underpaid. Leave: If you can trick a new firm into paying for your \"Pitch.\" Hunt: Low-intensity. Universal: Your \"Quiet Quitting\" is visible to your peers. If you don't increase your Will, your current firm will never increase your salary, regardless of the Micro (F)."
  },
  "1010101": {
    managerPatch: "CULTURAL POISON. PROTOCOL: System Purge. Action: High pay, toxic vibe, low effort. Patch: Use Bear market stability to terminate. Up-Skill/Motivate/Pitch: Non-viable. Universal: They are the primary reason your Gems (110) leave. They feel untouchable because of their Skill; prove they aren't by prioritizing culture.",
    individualSequence: "GOLDEN CAPTIVE. STATUS: Toxic Niche. Stay: For the high pay. But your reputation is being destroyed by your toxic behavior. Leave: Yes. Reboot your personality in a new firm. Hunt: High-pay, remote-first roles where you can work in isolation. Universal: You are the reason \"Gems\" leave. If you don't fix your culture fit, you will eventually find yourself unhireable despite your Skill."
  },
  "1010100": {
    managerPatch: "THE CAPTIVE. PROTOCOL: Pressure Maintenance. Action: No pay, no exit, no will. Patch: Micro-management of deliverables. Up-Skill: Basic maintenance. Up-Motivate: External pressure only. Up-Pitch: None. Universal: Since they have no internal drive, you must provide the external logic. They are making their misery everyone's problem.",
    individualSequence: "THE CAPTIVE. STATUS: Miserable Stall. Stay: Only because you have to. Leave: The second the market turns Bull. Hunt: Prepare your \"Pitch\" now. Universal: You are being micro-managed because you lack internal drive. Stop blaming the manager and start delivering \"Signal.\" It's the only way to earn the autonomy you want."
  },
  "1010011": {
    managerPatch: "THE GHOST. PROTOCOL: Lifeboat Audit. Action: Using Pitch to stay relevant in a dying firm. Patch: Divert their salary to a Grinder (010). Up-Skill/Motivate: Non-viable. Up-Pitch: Mute. Universal: Don't let this unit occupy a seat that a high-will contributor needs to save the ship. They provide zero heavy lifting for a pivot.",
    individualSequence: "THE GHOST. STATUS: Reputation Survivor. Stay: For the people, but you aren't helping them. You are a drain on a dying ship. Leave: Yes. Hunt: Move to a firm where your \"Pitch\" can be utilized for growth, not just survival. Universal: You are occupying a \"Lifeboat\" that a High-Will unit deserves. Move aside or start rowing."
  },
  "1010010": {
    managerPatch: "THE DRIFTER. PROTOCOL: KPI Hardline. Action: Loves the vibes but won't do the work. Patch: Set hard technical milestones. Up-Skill: Execution focus. Up-Motivate: Explicitly state the culture they love dies without their output. Up-Pitch: None. Universal: If the Will doesn't flip to 1 in 30 days, move to Shed.",
    individualSequence: "THE DRIFTER. STATUS: Emotional Drain. Stay: You love the vibes but you're a \"Donor\" in reverse—taking energy, giving none. Leave: If the firm needs \"Warriors\" to survive the Bear market. Hunt: Reset. Universal: High Pitch and Low Will make you a \"Hype-Man\" in a burning building. Either pick up a tool or get out of the way of those trying to fix the fire."
  },
  "1010001": {
    managerPatch: "THE PARASITE. PROTOCOL: Economic Purge. Action: Gamed the system for high pay in a failing firm. Shed: Immediate termination. Up-Skill/Motivate/Pitch: Non-viable. Universal: They cost more than they are worth and offer zero Will to a turnaround. Purge to save the remaining runway.",
    individualSequence: "THE PARASITE. STATUS: System Anomaly. Stay: No. You will be the first one terminated when the CFO sees your salary vs. output. Leave: Immediately. Hunt: Active. Universal: You've successfully gamed the system, but the game is over. Find a \"Strong\" firm where your High Skill (S) can be properly utilized before you are laid off with a \"Low Will\" reputation."
  },
  "1010000": {
    managerPatch: "NON-VIABLE. PROTOCOL: Decommission. Action: Dead weight in a dead firm. Shed: Terminate. Up-Skill/Motivate/Pitch: Non-viable. Universal: Their High Pitch noise is distracting the few remaining survivors. Shut down the unit to clear the signal for those trying to reboot the firm.",
    individualSequence: "THE REBOOT. STATUS: Null State. Stay: No. Leave: Fast. Hunt: Total reset. Universal: Your Pitch is noisy and distracting to the few survivors. You need a complete career reboot. Move to a new environment and commit to being a \"Grinder\" (010) for six months to prove your Will still exists."
  },

  // 100: THE RIGID EXPERT
  "1001111": {
    managerPatch: "THE SILO. PROTOCOL: Technical Interfacing. Patch: They are technically elite but culturally isolated. Up-Skill: Force participation in \"System Design\" with peers to break silos. Up-Motivate: Grant total ownership of a stable, critical subsystem. Up-Pitch: Task with writing \"Internal Standards\" documentation. Universal: High Skill with Low Will/Pitch creates a \"Black Box.\" You must document their brain before they become a single point of failure.",
    individualSequence: "THE SILO. STATUS: Institutional Pillar. Stay: High security. Use this stability to build \"Technical Moats\" around your expertise. Leave: Only for a role where you can design a system from scratch. Hunt: Filter for legacy-modernization roles. Universal: Your deep skill is your shield. However, your lack of Pitch makes you a \"Black Box.\" Document your processes to prove your value before someone tries to automate your silo."
  },
  "1001110": {
    managerPatch: "UNDERVALUED ANCHOR. PROTOCOL: Market Correction. Action: They are safe and high-skill but underpaid. Patch: Give the raise now. They won't \"Pitch\" for it, but they will leave silently for a lateral role with better pay. Up-Skill: Modernization sprints. Up-Motivate: Financial security. Universal: Their Low Pitch means they don't broadcast dissatisfaction. If they are underpaid in a Bull market, you are essentially daring a competitor to poach them.",
    individualSequence: "THE UNDERVALUED. STATUS: Market Arbitrage. Stay: Only if pay is corrected. You are the \"Anchor\" keeping the system alive for a discount. Leave: Yes. Bull market liquidity favors your niche expertise. Hunt: Target competitors with crumbling legacy systems; they will pay a premium for your stability. Universal: You won't \"Pitch\" for a raise, but you must. Use your \"Single Point of Failure\" status as a hard-data lever in negotiations."
  },
  "1001101": {
    managerPatch: "THE BITTER VETERAN. PROTOCOL: Signal Insulation. Action: High skill in a toxic environment. Patch: Keep them in a \"Dark Room.\" Minimize their interaction with the toxic culture to prevent total Will collapse. Up-Skill: Specialized tooling. Up-Motivate: Autonomy and high pay. Universal: They hate the vibes but do the work. Don't force them into \"Culture\" events; it only increases their resentment and lowers their output.",
    individualSequence: "BITTER ANCHOR. STATUS: Toxic Endurance. Stay: For the capital. Isolate your workflow. Do not engage with the rot. Leave: If a High-Trust firm offers lateral pay. Hunt: Focus on back-end or infrastructure roles where cultural \"interfacing\" is minimal. Universal: The environment is taxing your Will. Don't let the bitterness de-skill you. Spend 10% of your time learning one modern interoperability tool."
  },
  "1001100": {
    managerPatch: "DEBT ACCUMULATOR. PROTOCOL: Critical Migration. Action: Underpaid and toxic. Patch: Pay them to stay long enough to document their work, then facilitate an exit. Up-Skill: None. Up-Motivate: Cash bonuses for knowledge transfer. Universal: This is a \"Technical Debt\" unit. They hold the keys to the legacy system but are poisoning the future. Extract the data and decommission the unit.",
    individualSequence: "DEBT CARRIER. STATUS: System Insult. Stay: No. Toxicity and low pay in a Bull market is a career dead-end. Leave: Immediately. Hunt: Use your \"Hard Skills\" to jump to a stable, high-pay firm. Universal: You are currently a \"Knowledge Hostage.\" This is the highest your market value will ever be for your specific niche. Cash out now before the system you protect is decommissioned."
  },
  "1001011": {
    managerPatch: "THE SPECIALIST. PROTOCOL: Resource Optimization. Action: Firm is weak but they are loyal. Patch: Use their deep skill for \"Efficiency Audits\" to save the company money. Up-Skill: Cross-training in cost-saving tech. Up-Motivate: Radical transparency. Universal: They are the \"Last Defense\" of a weak firm. If they leave, the technical integrity of the turnaround collapses. Keep them close.",
    individualSequence: "THE SPECIALIST. STATUS: Mission-Critical. Stay: You are the last defense of a weak firm. Demand equity or a \"Fellow\" title for your loyalty. Leave: If the pivot seems technically impossible. Hunt: Target \"Strong\" firms that need a stable anchor. Universal: In a weak firm, your rigidity is actually a feature (stability). Ensure leadership knows that without your specific Skill, the technical turnaround fails."
  },
  "1001010": {
    managerPatch: "THE VOLUNTEER. PROTOCOL: Emotional Retention. Action: No cash, high trust. Patch: Give a \"Technical Fellow\" title. Up-Skill: Allow them to spend 20% of time on \"Pet Projects\" to maintain Will. Up-Motivate: Recognition of their \"Anchor\" status. Universal: They are donating value. If the financials don't fix, they will eventually drift toward a Strong firm for retirement.",
    individualSequence: "THE DONOR. STATUS: High Will, Low Fuel. Stay: Set a hard 90-day deadline for financial improvement. Leave: If your personal savings are subsidizing a dead company. Hunt: Use your \"Keeper of the System\" narrative to land a senior role. Universal: Loyalty to a failing company with no pay is a logic error. Your Skill is an asset; stop donating it to a void."
  },
  "1001001": {
    managerPatch: "THE OVERPAID ISOLATE. PROTOCOL: Extraction. Action: Staying for the check, hate the team, weak firm. Patch: Set hard technical documentation KPIs. Up-Skill: Resume-building projects. Up-Motivate: Financials only. Universal: High Skill with zero Pitch or Will in a failing firm is a \"Clock-Puncher.\" Extract the maximum technical value before the runway ends.",
    individualSequence: "OVERPAID GHOST. STATUS: Capital Extraction. Stay: Collect the check. Maintain the silo. Build your \"Fortress Wealth.\" Leave: As soon as an F=1 opportunity appears. Hunt: You are a mercenary. Move to the highest bidder with the lowest friction. Universal: You are winning the math but losing the future. Your rigidity makes you vulnerable to layoffs. Diversify your Skill set in secret."
  },
  "1001000": {
    managerPatch: "FOSSILIZED. PROTOCOL: Systematic Shed. Action: Bull market + Weak Co + Toxic + Low Pay. Shed: Help them exit. Up-Skill/Motivate: Non-viable. Up-Pitch: Provide a technical-only reference. Universal: They are a high-skill liability in this state. They aren't helping the pivot and aren't happy. Move them to a \"Strong/Stable\" legacy firm.",
    individualSequence: "FOSSILIZED. STATUS: System Crash. Stay: No. Leave: Fast. Hunt: Find a \"Strong\" legacy firm that values stability over innovation. Universal: Your reputation is tied to a dying signal. A 100 in an 0000 state loses value as the system rots. Move to a functioning legacy system to reset and protect your career tail-risk."
  },
  "1000111": {
    managerPatch: "SAFE ARCHIVE. PROTOCOL: Deep Maintenance. Action: Bear market security. Patch: Put them in charge of \"Technical Debt\" reduction. Up-Skill: Modernizing legacy codebases. Up-Motivate: Predictability and peace. Keep: High. Universal: This is the perfect environment for a 100. They provide the stability the firm needs to survive the macro storm.",
    individualSequence: "SAFE ARCHIVE. STATUS: Bear Market Fortress. Stay: This is your ideal environment. Focus on deep maintenance and optimization. Leave: No. The risk of the unknown is too high. Hunt: Zero activity. Universal: Use the quiet to become the \"Institutional Memory.\" If they can't function without your silo, you are 100% layoff-proof during the macro storm."
  },
  "1000110": {
    managerPatch: "THE STAGNANT EXPERT. PROTOCOL: Proactive Adjustment. Action: Safe but undervalued. Patch: Adjust pay to market now. Don't wait for them to find a better offer. Up-Skill: Pair them with a \"Rising Star\" (011) to modernize their outlook. Up-Motivate: Long-term stability. Universal: Their Low Pitch hides their resentment. Pay them for their loyalty before the market turns Bull.",
    individualSequence: "STAGNANT EXPERT. STATUS: Strategic Waiting. Stay: If they fix the pay. Remind them your stability is what saves them in a Bear market. Leave: If a competitor offers a 20% premium. Hunt: Low-intensity only. Universal: Request a \"Technical Fellow\" title now. It costs them nothing in a Bear market but increases your \"Price\" for the next Bull cycle."
  },
  "1000101": {
    managerPatch: "THE COLD GEAR. PROTOCOL: Friction Containment. Action: High pay, toxic vibe. Patch: Isolate them. Let them build in a vacuum. Up-Skill: Automation. Up-Motivate: Money and zero meetings. Universal: They are winning the math but rotting the culture. Use their skill for backend systems that don't require human \"Interfacing.\"",
    individualSequence: "GOLDEN CAGE. STATUS: Math Winner. Stay: For the capital. Use stability to fund personal R&D. Leave: If the toxicity begins to \"de-skill\" you. Hunt: You have time; be extremely picky. Universal: If your Will flips to zero because of the culture, you are in danger of becoming Dead Wood. Change environments to save your technical signal."
  },
  "1000100": {
    managerPatch: "THE TRAPPED GEAR. PROTOCOL: Maintenance Pressure. Action: No pay, no exit, no will. Patch: Micro-management of technical tickets. Up-Skill: Maintenance drills. Up-Motivate: External pressure only. Universal: They are a \"Broken Tool.\" High skill but no drive to use it. You must provide the \"Will\" through strict technical oversight and KPIs.",
    individualSequence: "THE FOXHOLE. STATUS: Friction Lock. Stay: Minimal effort. Use the company's bank to fund your niche certifications. Leave: When the Bull cycle starts. Hunt: Prepare your resume now. Universal: You are a captive asset; treat the job as a paid study-hall until the market exit door opens. Deliver exactly what is required and no more."
  },
  "1000011": {
    managerPatch: "THE LEGACY ANCHOR. PROTOCOL: Respectful Retention. Action: Sinking ship, high trust. Patch: Treat as the \"Technical Sage.\" Up-Skill/Pitch: \"Pivot Documentation.\" Up-Motivate: Emotional connection to the team. Universal: They stay for the people. Honor that loyalty, but ensure they are documenting the \"Black Box\" before the ship goes under.",
    individualSequence: "LEGACY ANCHOR. STATUS: Emotional Loyalty. Stay: You stay for the people. Audit the bank runway monthly. Leave: When runway hits <3 months. Hunt: Reach out to network \"Unicorns.\" Universal: Do not let your loyalty become a financial liability. A 100 should never go down with a ship they didn't build and don't own."
  },
  "1000010": {
    managerPatch: "THE SAGE. PROTOCOL: Moral Validation. Action: No money, high trust. Patch: Grant \"Technical Fellow\" title. Up-Skill: Mentoring. Up-Motivate: Public validation of their technical legacy. Universal: They are the moral and technical center of the team. Monitor for burnout; they are carrying the \"Black Box\" on a vibe salary.",
    individualSequence: "THE SAGE. STATUS: Moral Validation. Stay: Only if you are okay being a \"Martyr\" for the culture. Leave: If you have financial anxiety. Hunt: Move to a firm that pays for stability. Universal: Your high \"Will\" to keep the legacy system alive is a finite resource. Don't spend it all on a company that cannot sustain itself."
  },
  "1000001": {
    managerPatch: "THE EXPENSIVE RELIC. PROTOCOL: Financial Extraction. Action: Staying for paycheck in failing system. Patch: Treat as a consultant. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: They are a massive cost center. If the firm must cut, this unit is a logical target despite their skill. Start the migration away from their silo now.",
    individualSequence: "THE CAPTIVE. STATUS: Math Winner. Stay: Winning the math, losing the soul. Leave: Expect a layoff; you are an \"Overpaid\" target. Hunt: Active. Your firm is a ticking clock. Universal: Increase your visibility (Pitch) externally so you aren't seen as the reason for the company's technical stagnation."
  },
  "1000000": {
    managerPatch: "DEAD SIGNAL. PROTOCOL: Decommission. Action: Total failure. Shed: Facilitate exit. Up-Skill/Motivate: Zero ROI. Up-Pitch: None. Universal: A Rigid Expert in an 0000 state becomes a \"Knowledge Hostage-Taker.\" They will protect their silo to survive. Terminate and rebuild the system from scratch.",
    individualSequence: "DEAD SIGNAL. STATUS: Critical Failure. Stay: No. Leave: Immediately. Hunt: Total reset. Universal: You need a \"Palate Cleanser\"—find a small, High-Trust boutique firm where you can rebuild your signal and modernize your stack. Your rigidity here is a death sentence."
  },

  // 011: THE RISING STAR
  "0111111": {
    managerPatch: "FUTURE BENCHMARK. PROTOCOL: Rapid Loading. Patch: Total system alignment. Up-Skill: Pair with a Unicorn (111) for high-intensity mentoring. Up-Motivate: Grant ownership of a small but critical \"New-Feature\" circuit. Up-Pitch: Encourage them to demo internally to build technical authority. Universal: High Will/Pitch but low Skill creates a \"Confidence Gap.\" You must build their technical \"Hardware\" before the market over-inflates their ego.",
    individualSequence: "FUTURE BENCHMARK. STATUS: Optimal Trajectory. Stay: This is your \"Unicorn\" forge. Consume all mentorship available. Leave: Only for a founding role with >3% equity. Hunt: Maintain high external Pitch; keep the market watching your growth. Universal: Your high Pitch and Will are ahead of your Skill. Use this stable environment to close the \"Technical Gap\" before the market cycle demands senior-level architecture from you."
  },
  "0111110": {
    managerPatch: "POACH RISK. PROTOCOL: Pre-emptive Calibration. Action: Bull market + Strong Co + Underpaid. Patch: Immediate \"Growth-Path\" raise. Don't wait for them to hit senior metrics; pay for the trajectory. Up-Skill: Intensive code-review cycles. Up-Motivate: Financial validation of potential. Universal: They are a \"Bargain\" asset. If you don't adjust pay to their rapid growth, a competitor will buy their high Will and Pitch for a 40% premium.",
    individualSequence: "POACH RISK. STATUS: Value Arbitrage. Stay: Only if pay is corrected to \"High-Will\" levels. You are currently a high-yield asset sold for a bargain. Leave: Bull market liquidity favors your high-energy profile. Hunt: Trigger a bidding war; your growth rate is your primary leverage. Universal: Do not accept \"Seniority\" excuses for low pay. If you are delivering the output of a Unicorn, demand the fuel."
  },
  "0111101": {
    managerPatch: "ROT RESISTANT. PROTOCOL: Cultural Insulation. Action: High Will in toxic environment. Patch: Act as a \"Lead Shield.\" Isolate them from the rot so their Will doesn't flip to 0. Up-Skill: Specialized back-end hardening. Up-Motivate: Validate their drive; prove you are purging the toxic actors. Universal: Their optimism is a finite resource. If the culture stays 0, they will pivot to a Unicorn (111) and jump to a Strong/High-Trust firm.",
    individualSequence: "ROT RESISTANT. STATUS: Cultural Friction. Stay: For the capital, but isolate yourself. Don't let the toxic rot flip your Will to zero. Leave: If you find a \"High Trust\" firm that matches the pay. Hunt: Target firms where engineering excellence is the primary culture. Universal: Your optimism is an asset; don't spend it on a toxic manager. Use your high Pitch to find a mentor outside your immediate team."
  },
  "0111100": {
    managerPatch: "BURN ALERT. PROTOCOL: Emergency Stabilization. Action: Underpaid and bullied. Patch: Major raise + environmental cleanup today. Up-Skill: Basic stabilization. Up-Motivate: Immediate recognition. Universal: You are currently burning out your future leadership. In a Bull market, this unit will vanish overnight if they feel exploited. Fix the environment or prepare for a total \"Rising Star\" vacuum.",
    individualSequence: "BURN ALERT. STATUS: System Insult. Stay: No. You are being exploited by a toxic firm in a Bull market. Leave: Immediately. Your \"Pitch\" is at maximum liquid value. Hunt: Any \"Strong\" firm will value your drive. Universal: You are a \"Star\" in a vacuum. If you stay, your Will will eventually break, turning you into a cynical Surface Learner. Move now to preserve your career fire."
  },
  "0111011": {
    managerPatch: "PIVOT HERO. PROTOCOL: Mission Immersion. Action: Firm is weak, but they are high-drive. Patch: Give them the \"Impossible Puzzle.\" Use their Will to power the turnaround. Up-Skill: Full-stack versatility. Up-Motivate: Radical transparency. Universal: They are the \"Battery\" of a weak firm. If you don't give them a clear path to the \"New Version\" of the company, they will spend their energy elsewhere.",
    individualSequence: "PIVOT HERO. STATUS: Mission-Critical. Stay: Only if you have a clear path to leadership. You are the energy source for the turnaround. Leave: If the pivot strategy lacks technical logic. Hunt: \"Strong\" micro-financial firms. Universal: In a weak firm, your drive makes you indispensable. Demand \"Retention Equity\" or a title hike that reflects your role as the turnaround anchor."
  },
  "0111010": {
    managerPatch: "POTENTIAL DONOR. PROTOCOL: Equity/Title Swap. Action: No cash, high trust. Patch: Grant \"Lead\" or \"Senior\" title early to lock in market value. Up-Skill: High-velocity learning. Up-Motivate: Promise of future liquidity. Universal: They are donating their growth years. If the financials don't improve, they will eventually take their hardened skills to a Strong firm.",
    individualSequence: "POTENTIAL DONOR. STATUS: Growth at Risk. Stay: Set a hard 90-day deadline. You are donating your most productive years to a void. Leave: If the bank is empty. Hunt: Use your \"Rising Star\" momentum to land a role at a Strong firm. Universal: Loyalty to a failing firm with no pay is a logic error. Your growth depends on working with elite peers; if they leave, you must follow."
  },
  "0111001": {
    managerPatch: "TRANSITORY ASSET. PROTOCOL: Skill Extraction. Action: Staying for check, hate the vibe. Patch: High-intensity technical sprints. Up-Skill: Modernize their stack so they stay engaged. Up-Motivate: Financials only. Universal: They are using you for the paycheck. Accept the transaction; get the high-will output now, but assume they jump when F=1.",
    individualSequence: "TRANSITORY ASSET. STATUS: Tactical Extraction. Stay: Collect the check; use the time to level up your Skill. Leave: As soon as an F=1 (Strong Financial) offer appears. Hunt: You are a mercenary. Universal: Don't give your heart to a sinking, toxic ship. Use their cash to fund your certifications, then jump to a system that actually works."
  },
  "0111000": {
    managerPatch: "MARKET BAIT. PROTOCOL: Graceful Release. Action: Bull market + Weak Co + Toxic + Low Pay. Shed: Help them find a role at a Strong firm. Up-Skill/Motivate: Non-viable. Universal: You can't sustain a Rising Star in a void. If you care about the person, facilitate an exit to a \"Strong\" environment where their Will won't be wasted.",
    individualSequence: "MARKET BAIT. STATUS: Thermal Runaway. Stay: No. The system is non-functional. Leave: Today. Hunt: Any \"Strong\" environment is an upgrade. Universal: Your reputation is your only currency. Don't let a failing company's lack of signal pull your trajectory into the ground. Exit to a functioning system to protect your future."
  },
  "0110111": {
    managerPatch: "ACADEMY MODE. PROTOCOL: Deep Mentorship. Action: Bear market security + Strong Co. Patch: This is the perfect environment for \"Hardening.\" Force them to master the hardest parts of the codebase. Up-Skill: Deep technical depth. Up-Motivate: Long-term career safety. Universal: Use the quiet to turn this Star into a Unicorn. By the time M=1, they should be the benchmark.",
    individualSequence: "ACADEMY MODE. STATUS: Bear Market Fortress. Stay: Perfect seat for \"Hardening.\" Use the macro quiet to become a Unicorn. Leave: No. The risk of the unknown is too high. Hunt: Zero activity. Universal: This is your time for deep Mastery. Focus on the most complex technical silos. By the time the Bull market returns, you should be the benchmark."
  },
  "0110110": {
    managerPatch: "THE UNDERVALUED. PROTOCOL: Trajectory Pay. Action: Safe but underpaid. Patch: Raise pay now. Don't let them enter the next Bull market feeling like they were exploited during the Bear. Up-Skill: Systems design. Up-Motivate: Define the 3-year \"Unicorn\" path. Universal: Their High Pitch means they will talk to peers about being underpaid. Fix it to protect team morale.",
    individualSequence: "THE BARGAIN. STATUS: Strategic Waiting. Stay: If they fix the pay. Don't let them exploit the Bear market to underpay your growth. Leave: If a competitor offers a \"Bear Premium.\" Hunt: Low-intensity only. Universal: Request a title hike now. It costs the company nothing in a Bear market but significantly increases your market price when the next Bull cycle hits."
  },
  "0110101": {
    managerPatch: "THE MERCENARY. PROTOCOL: Friction Shielding. Action: High pay, toxic vibe. Patch: Isolate them. Let them build in a vacuum. Up-Skill: Infrastructure automation. Up-Motivate: Money and zero meetings. Universal: They stay for the pay but hate the team. Use their High Will to automate the \"Toxic\" friction points out of the system.",
    individualSequence: "GOLDEN NESTER. STATUS: Math Winner. Stay: For the capital. Use the stability to fund personal R&D. Leave: If the toxicity kills your Will. Hunt: You have time; be extremely picky. Universal: If your Will flips to zero because of the culture, you are in danger of becoming a Surface Learner. Change environments to save your long-term career drive."
  },
  "0110100": {
    managerPatch: "CAPTIVE POTENTIAL. PROTOCOL: Growth Pressure. Action: No pay, no exit, no will. Patch: They are losing their \"Star\" status. Up-Skill: Basic maintenance. Up-Motivate: External pressure. Universal: If the Will (W) flips to 0 due to the 0100 environment, they become a Surface Learner (101). You must provide a \"Growth Spark\" or they will fossilize.",
    individualSequence: "CAPTIVE ASSET. STATUS: Friction Lock. Stay: Minimal effort. Use the company’s bank to fund your hardening. Leave: When the Bull cycle starts. Hunt: Prepare your Pitch now. Universal: You are a captive asset; treat the job as a paid study-hall. Deliver exactly what is required and spend the rest of your energy on secret technical growth."
  },
  "0110011": {
    managerPatch: "HOPE ANCHOR. PROTOCOL: Cultural Leadership. Action: Sinking ship, high trust. Patch: Put them in charge of team \"Vibe\" and \"Pivot Culture.\" Up-Skill: Leadership basics. Up-Motivate: Mission-driven focus. Universal: They are the moral battery of the firm. If their Will breaks, the entire team will follow. Treat them as the \"Culture Lead.\"",
    individualSequence: "HOPE ANCHOR. STATUS: Emotional Loyalty. Stay: You are the moral center. Audit the runway monthly. Leave: When runway hits <3 months. Hunt: Reach out to network Unicorns. Universal: Do not let your loyalty become a financial liability. A Star should never go down with a ship they don't own and can't steer financially."
  },
  "0110010": {
    managerPatch: "THE MARTYR. PROTOCOL: Title/Recognition. Action: No money, high trust. Patch: Grant \"Senior\" title. Up-Skill: High-level mentoring of others. Up-Motivate: Public validation. Universal: They are carrying the team's heart on a budget salary. Monitor for burnout. They are vulnerable to being poached by \"Strong\" firms that value high-will juniors.",
    individualSequence: "THE MARTYR. STATUS: Self-Sacrifice. Stay: Only if okay being a \"Martyr.\" The vibes are great, the bank is empty. Leave: If you have financial anxiety. Hunt: Move to a firm that pays for Will. Universal: Your high Will is a finite resource. Don't spend it all on a company that cannot sustain itself or your professional evolution."
  },
  "0110001": {
    managerPatch: "EXPENSIVE GAMBLE. PROTOCOL: Extraction/Documentation. Action: High pay in failing/toxic system. Patch: Treat as high-output temporary unit. Up-Skill/Motivate: Non-viable. Universal: They are a cost center. If the firm must cut, this unit is a target. Ensure their high-will output is documented before the runway ends.",
    individualSequence: "EXPENSIVE GAMBLE. STATUS: Math Winner. Stay: Winning math, losing soul. Leave: Expect a layoff; increase visibility now to avoid the \"Easy Cut.\" Hunt: Active. Your firm is a ticking clock. Universal: Increase external visibility (Pitch) so you aren't seen as part of the company's technical failure when the end comes."
  },
  "0110000": {
    managerPatch: "NULL STAR. PROTOCOL: System Reboot. Action: Total failure. Shed: Help them exit. Up-Skill/Motivate: Zero ROI. Universal: A Rising Star in an 0000 state is a tragedy. Their Will is being ground to dust. Help them find a \"Functional\" firm to save their career trajectory.",
    individualSequence: "THE REBOOT. STATUS: Critical Failure. Stay: No. The system has failed. Leave: Immediately. Hunt: Reset expectations. Universal: You need a \"Palate Cleanser\"—find a small, High-Trust boutique firm where you can rebuild your signal and recover your Will before it breaks permanently."
  },

  // 010: THE GRINDER
  "0101111": {
    managerPatch: "THE RELIABLE CORE. PROTOCOL: Sustenance & Safety. Patch: Ensure they aren't being over-leveraged by louder personas. Up-Skill: Introduce \"Architecture basics\" to move them toward 110 status. Up-Motivate: Explicitly reward the \"invisible\" consistency. Up-Pitch: Publicly credit their reliability in team reviews. Universal: High Will/Skill with Low Pitch makes them the easiest unit to exploit. If you don't advocate for them, they will burn out silently.",
    individualSequence: "RELIABLE CORE. STATUS: Optimal Stability. Stay: High security zone. Focus on \"Architecture Hardening\"—becoming the person who knows where all the bodies are buried. Leave: Only for a Senior/Lead role that guarantees a 30% hike. Hunt: Low urgency. Universal: Your Low Pitch is your only weakness. If you don't start documenting your \"Invisible Wins,\" you will be passed over for promotions by louder, lower-skill personas."
  },
  "0101110": {
    managerPatch: "THE SILENT LOSS. PROTOCOL: Immediate Equity Correction. Action: Bull market + Strong Co + Underpaid. Patch: Raise pay today. They won't ask, but they will accept an inbound recruiter's first offer. Up-Skill: Advanced technical drills. Up-Motivate: Financial security. Up-Pitch: Highlight their specific technical wins to HR. Universal: This is your most \"Unsung Hero\" unit. Their Low Pitch is the only reason they aren't already the highest-paid.",
    individualSequence: "SILENT LOSS. STATUS: Value Arbitrage. Stay: Only if pay is corrected. You are the engine of a wealthy firm being paid \"Entry Level\" rates. Leave: Yes. Bull market demand for reliable execution is at a peak. Hunt: Active. Use your \"High Output\" stats to land a major pay bump. Universal: You won't \"Pitch\" for a raise, but the market will. One interview at a Strong firm will prove you are being underpaid by 20% or more."
  },
  "0101101": {
    managerPatch: "SHIELDED ENGINE. PROTOCOL: Cultural Insulation. Action: Stay for pay, hate the vibe. Patch: Move to a stable, isolated squad. Up-Skill: Mastery of specialized tooling. Up-Motivate: Validate their work vs. the team noise. Up-Pitch: None. Universal: The Grinder is the first to suffer in a toxic culture because they have no \"Pitch\" to defend themselves. You must be their shield or lose the engine.",
    individualSequence: "SHIELDED ENGINE. STATUS: Toxic Endurance. Stay: For the capital, but demand a \"Solo Contributor\" track to avoid the political rot. Leave: If the vibes begin to degrade your high Will. Hunt: Filter for \"Deep Work\" cultures. Universal: You are the primary victim of toxic cultures because you don't \"play the game.\" Protect your mental hardware; don't let their bad code or bad attitudes break your drive."
  },
  "0101100": {
    managerPatch: "SYSTEM DRAIN. PROTOCOL: Rescue or Release. Action: Underpaid and bullied. Patch: Immediate 20% raise + Fire the toxic influencer. Up-Skill: None. Up-Motivate: Environmental repair. Up-Pitch: None. Universal: You are currently killing the most valuable worker in the org. If you can't fix the vibes, help them find a \"Strong/High-Trust\" home before they break.",
    individualSequence: "SYSTEM DRAIN. STATUS: High Exploitation. Stay: No. You are underpaid and bullied while the market is Bull. Leave: Immediately. Hunt: Target High-Trust, Strong-Financial firms. Universal: Your reliability is being weaponized against you. Resign today; your Skill and Will are highly liquid assets that deserve a better host system."
  },
  "0101011": {
    managerPatch: "THE WORKHORSE. PROTOCOL: Vision Anchoring. Action: Firm is weak, but they are loyal. Patch: Give them ownership of the \"Maintenance Roadmap.\" Up-Skill: Full-stack efficiency. Up-Motivate: Radical transparency about the pivot. Up-Pitch: Grant a \"Senior\" title. Universal: They are the \"Basement\" of the firm. If they leave, the technical integrity of the turnaround collapses. Keep them fueled.",
    individualSequence: "THE WORKHORSE. STATUS: Mission-Critical. Stay: Only if granted a \"Lead\" title and significant equity. You are the floor of this turnaround. Leave: If leadership fails to provide a technical roadmap. Hunt: Target Strong firms. Universal: In a weak firm, you are the most valuable person because you actually do the work. Don't be afraid to use that leverage to demand the title you’ve already earned."
  },
  "0101010": {
    managerPatch: "THE VOLUNTEER. PROTOCOL: Title & Time. Action: No cash, high trust. Patch: Offer \"Time Capital\"—Friday's off or flexible starts. Up-Skill: Niche mastery. Up-Motivate: Promise of future stability. Up-Pitch: Public recognition of their sacrifice. Universal: They are donating their Will. If the financials don't fix, they will eventually drift toward a Strong firm for safety.",
    individualSequence: "THE VOLUNTEER. STATUS: Altruistic Stagnation. Stay: Set a hard 90-day deadline for a pay fix. You are donating high-will labor to a void. Leave: If the bank runway is invisible. Hunt: Use your \"Hard-Worker\" reputation to pivot to safety. Universal: Loyalty to a failing company with no pay is a logic error. Stop being a martyr for a P&L you didn't create and don't control."
  },
  "0101001": {
    managerPatch: "TRANSACTIONAL GEAR. PROTOCOL: High-Output Extraction. Action: Staying for check, hate the team. Patch: Strict technical tickets; zero \"Culture\" requirements. Up-Skill: Resume-friendly tech. Up-Motivate: Financials only. Up-Pitch: None. Universal: They are using you for the paycheck. Accept the trade; get the clean code, but assume they jump the second a Strong firm calls.",
    individualSequence: "TRANSACTIONAL. STATUS: Capital Extraction. Stay: Collect the check; ignore the team. Use the time to build a \"Unicorn\" portfolio. Leave: When F=1 opportunity appears. Hunt: You are a mercenary. Universal: If the culture is rot, trade your technical execution for their cash and nothing more. Do not let their toxicity exhaust your Will."
  },
  "0101000": {
    managerPatch: "ABANDONED ENGINE. PROTOCOL: Graceful Decommission. Action: Bull market + Weak Co + Toxic + Underpaid. Shed: Facilitate an exit. Up-Skill/Motivate: Non-viable. Up-Pitch: Technical-only reference. Universal: A Grinder in this environment will eventually lose their Will and become \"Dead Wood.\" Move them to a \"Strong\" system to preserve the person.",
    individualSequence: "ABANDONED. STATUS: Thermal Runaway. Stay: No. The system is non-functional. Leave: Today. Hunt: Any \"Strong\" environment is an upgrade. Universal: Your reputation is your only currency. Don't let a failing company's lack of signal pull your career into the ground. Move to a functioning system to reset your mental hardware."
  },
  "0100111": {
    managerPatch: "STABLE HARBOR. PROTOCOL: Deep Mastery. Action: Bear market security + Strong Co. Patch: This is the perfect soil for them. Up-Skill: Move toward \"Senior Architecture.\" Up-Motivate: Predictability and peace. Up-Pitch: Internal-facing documentation leads. Universal: This unit is the reason the firm survives Bear markets. Protect their peace at all costs.",
    individualSequence: "STABLE HARBOR. STATUS: Mastery Phase. Stay: Perfect seat for a Bear market. Deepen your niche. Leave: No. The risk of the unknown is too high. Hunt: Zero activity. Universal: Focus on \"Institutional Memory.\" In a Bear market, the person who knows how to fix everything is the last one to be laid off. Use this time to become indispensable."
  },
  "0100110": {
    managerPatch: "PATIENT ANCHOR. PROTOCOL: Future-Proof Pay. Action: Safe but undervalued. Patch: Raise pay now. Don't wait for the Bull market. Up-Skill: Leadership basics. Up-Motivate: Define the 3-year growth path. Up-Pitch: None. Universal: They are the quiet backbone. Pay them for their loyalty today so they don't look around tomorrow.",
    individualSequence: "PATIENT ANCHOR. STATUS: Strategic Waiting. Stay: If they fix the pay. Remind them your stability is what saves them in a Bear market. Leave: If a competitor offers a \"Bear-Market Premium.\" Hunt: Low-intensity. Universal: Request a title hike now. It costs them nothing in a Bear market but increases your market price for the next Bull cycle."
  },
  "0100101": {
    managerPatch: "COATED GEAR. PROTOCOL: Friction Shielding. Action: High pay, toxic vibe. Patch: Isolate them from the politics. Up-Skill: Automation. Up-Motivate: Money and zero meetings. Up-Pitch: None. Universal: They stay for the math. Use their high Skill to automate the \"Toxic\" parts of the system so no one has to touch them.",
    individualSequence: "GOLDEN CAGE. STATUS: Math Winner. Stay: For the capital. Use stability to fund personal R&D. Leave: If the toxicity kills your Will. Hunt: You have time; be picky. Universal: If your Will flips to zero because of the culture, you are in danger of becoming \"Dead Wood.\" Change environments to save your technical signal and drive."
  },
  "0100100": {
    managerPatch: "CAPTIVE GEAR. PROTOCOL: Maintenance Pressure. Action: No pay, no exit, no will. Patch: Micro-management of technical tickets. Up-Skill: Maintenance drills. Up-Motivate: External pressure. Universal: Without internal drive (W=0) or an exit, they are a broken tool. You must provide the \"Will\" through strict technical oversight.",
    individualSequence: "CAPTIVE GEAR. STATUS: Friction Lock. Stay: Minimal effort. Use the company’s bank to fund your hardening. Leave: When the cycle turns Bull. Hunt: Prepare your Pitch now. Universal: You are a captive asset; treat the job as a paid study-hall. Deliver exactly what is required and spend the rest of your energy on secret technical growth."
  },
  "0100011": {
    managerPatch: "MORAL CENTER. PROTOCOL: Radical Honesty. Action: Sinking ship, high trust. Patch: Seat on the \"Survival Committee.\" Up-Skill: Pivot drills. Up-Motivate: Emotional connection to the crew. Up-Pitch: None. Universal: They stay for the people. Honor that loyalty, but ensure they are documenting their knowledge before the ship goes under.",
    individualSequence: "MORAL CENTER. STATUS: Emotional Loyalty. Stay: You stay for the people. Audit the runway monthly. Leave: When runway hits <3 months. Hunt: Reach out to network Unicorns. Universal: Do not let your loyalty become a financial liability. A Grinder should never go down with a ship they don't own and can't steer financially."
  },
  "0100010": {
    managerPatch: "THE MARTYR. PROTOCOL: Public Validation. Action: No money, high trust. Patch: Grant \"Senior\" title. Up-Skill: Mentoring others. Up-Motivate: Public validation of their technical anchor status. Universal: They are carrying the team's heart on a budget. Monitor for burnout; they are the most likely to \"break\" silently.",
    individualSequence: "THE MARTYR. STATUS: Self-Sacrifice. Stay: Only if okay being a \"Martyr.\" The vibes are great, the bank is empty. Leave: If you have financial anxiety. Hunt: Move to a firm that pays for Will. Universal: Your high Will is a finite resource. Don't spend it all on a company that cannot sustain itself or your professional evolution."
  },
  "0100001": {
    managerPatch: "EXPENSIVE RELIC. PROTOCOL: Financial Extraction. Action: Staying for paycheck in failing system. Patch: Treat as a consultant. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: They are a massive cost center. If the firm must cut, this unit is a logical target. Start the migration away from their silo now.",
    individualSequence: "EXPENSIVE RELIC. STATUS: Math Winner. Stay: Winning math, losing soul. Leave: Expect a layoff; increase visibility now to avoid the \"Easy Cut.\" Hunt: Active. Your firm is a ticking clock. Universal: Increase external visibility (Pitch) so you aren't seen as the reason for the company's technical stagnation when the end comes."
  },
  "0100000": {
    managerPatch: "DEAD SIGNAL. PROTOCOL: Total Shutdown. Action: Total failure. Shed: Facilitate exit. Up-Skill/Motivate: Zero ROI. Up-Pitch: None. Universal: A Grinder in an 0000 state loses their \"Will\" and becomes a knowledge hostage. Terminate and rebuild; the human deserves a reboot elsewhere.",
    individualSequence: "THE REBOOT. STATUS: Critical Failure. Stay: No. The system has failed. Leave: Immediately. Hunt: Reset expectations. Universal: You need a \"Palate Cleanser\"—find a small, High-Trust boutique firm where you can rebuild your signal and recover your Will before it breaks permanently."
  },

  // 001: THE CHARLATAN
  "0011111": {
    managerPatch: "THE CULTURE CLOUD. PROTOCOL: Optical Audit. Patch: Mute their Pitch in high-stakes meetings. Up-Skill: Assign a solo technical task with zero collaboration allowed to expose the Skill gap. Up-Motivate: None. Up-Pitch: Redirect their energy to non-technical events (planning parties/offsites). Universal: This unit sounds like a Unicorn (111) but delivers like a Ghost. They are \"Atmospheric Assets\" only.",
    individualSequence: "CULTURE CLOUD. STATUS: Optical Peak. Stay: Dangerous. You are being paid for \"Vibes\" and your \"Pitch\" is masking a massive Skill gap. Leave: Optimal. Jump now while your reputation is still high. Hunt: Target Sales, Marketing, or Evangelism roles. Universal: You are currently an \"Atmospheric Asset.\" If you stay in Engineering, you will eventually be audited by a Unicorn and exposed. Pivot to a role where your \"Pitch\" is the primary product."
  },
  "0011110": {
    managerPatch: "THE LOUD BARGAIN. PROTOCOL: Ignore the Noise. Action: They are complaining about pay despite low skill. Patch: Deny all raises. In a Bull market, they will naturally \"Fail Up\" into another company. Up-Skill: Mandatory basic technical training. Up-Motivate: None. Universal: Do not be fooled by their Pitch. They are using the company’s Strong financials as an excuse for entitlement. Let the market poach them.",
    individualSequence: "LOUD BARGAIN. STATUS: False Entitlement. Stay: Only if you commit to a 180-day Skill-building sprint. You are loud about pay, but your code doesn't justify it. Leave: Yes. Your \"Pitch\" can trick a new firm into paying you more. Hunt: Target weak technical firms. Universal: Do not mistake market liquidity for technical competence. If you move for money without building \"Hardware,\" you will be the first one cut when the market cycle turns Bear."
  },
  "0011101": {
    managerPatch: "POLITICAL CANCER. PROTOCOL: Rapid Isolation. Action: Toxic and high-pitch. Patch: Move to an \"Island\" project where they cannot influence others. Up-Skill: None. Up-Motivate: None. Up-Pitch: Strict external communication blocks. Universal: This unit is the primary reason your Gems (110) leave. They use their Pitch to bully and their lack of Skill to slow down the engine.",
    individualSequence: "POLITICAL SHARK. STATUS: Toxic Navigator. Stay: You are winning the math by bullying others. This is a short-term strategy. Leave: Yes. Reset your reputation in a new environment. Hunt: High-growth startups with low technical oversight. Universal: Your high Pitch is protecting you from your low Skill. Eventually, the \"Gems\" around you will leave because of you, and the system will collapse. Leave before you are the only one left to blame."
  },
  "0011100": {
    managerPatch: "THE BULLSHIT LEAK. PROTOCOL: Immediate Shed. Action: Underpaid, toxic, and unskilled. Patch: Terminate today. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: In a Bull market, this unit is actively damaging your brand by pretending to represent you. They provide zero value and high friction. Purge the system immediately.",
    individualSequence: "BULLSHIT LEAK. STATUS: Imminent Failure. Stay: No. You are a liability to the org. Leave: Immediately. Hunt: Use your \"Pitch\" to bridge to any firm that hasn't seen your output metrics. Universal: You are broadcasting your own irrelevance. Resign before you are fired to preserve your \"Marketing Department\" for the next interview."
  },
  "0011011": {
    managerPatch: "THE VISIONARY. PROTOCOL: Reality Anchor. Action: Loyal but unskilled. Patch: Pair with a Grinder (010) who will call out their lack of output. Up-Skill: Remedial technical drills. Up-Motivate: Direct feedback on lack of \"Hardware.\" Up-Pitch: Use them for internal morale only. Universal: They love the firm but can't build the product. If they don't learn to build, they are a luxury a weak firm cannot afford.",
    individualSequence: "THE VISIONARY. STATUS: Vulnerable Hype. Stay: You love the firm but can't build the product. You are a luxury they can't afford. Leave: Yes. Your Pitch is more valuable in a \"Strong\" firm with a dedicated Sales team. Hunt: Target Evangelist roles. Universal: Stop pretending to be a developer. Your Will is high, but your Skill is zero. Find a role where your passion for the mission is the primary requirement."
  },
  "0011010": {
    managerPatch: "THE VENEER. PROTOCOL: Sunset Alignment. Action: No money, high trust, no skill. Patch: Set a 30-day \"Will\" challenge. Up-Skill: Fundamental technical training. Up-Motivate: Emotional appeals. Universal: They are \"Vibe Managers.\" In a weak firm, you need \"Warriors\" (111/110). If the Veneer can't become a Rising Star (011), they must be exited.",
    individualSequence: "THE VENEER. STATUS: High-Trust Risk. Stay: You are coasting on vibes. If the firm pivots, you will be exposed as a non-builder. Leave: No. You won't find this level of trust elsewhere. Hunt: Zero activity. Universal: You have high \"Will\" and \"Pitch,\" but no \"Hardware.\" Use this trust to spend 100% of your time in remedial technical training. You are one audit away from termination."
  },
  "0011001": {
    managerPatch: "THE PARASITE. PROTOCOL: Financial Extraction. Action: High pay, toxic, weak firm. Patch: Immediate candidate for layoff. Up-Skill/Motivate: Zero ROI. Up-Pitch: None. Universal: They have gamed the system. They are taking a high salary while offering zero technical signal or cultural value. Cut this cost center first to save the runway.",
    individualSequence: "THE PARASITE. STATUS: Overpaid Noise. Stay: Only as long as the check clears. You are the #1 target for layoffs. Leave: Yes. Move to a firm where you can reset your reputation. Hunt: Large, bureaucratic firms where low output is hidden. Universal: You have successfully gamed the system, but the game is ending. Find a \"Strong\" firm to hide in before this one collapses."
  },
  "0011000": {
    managerPatch: "THERMAL RUNAWAY. PROTOCOL: System Purge. Action: Total failure. Shed: Terminate immediately. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: A Charlatan in an 0000 state is a noise generator. They are complaining to anyone who will listen, further sinking the firm’s reputation. Shut down the unit now.",
    individualSequence: "THERMAL RUNAWAY. STATUS: Total Disconnection. Stay: No. Leave: Today. Hunt: Total career reset. Universal: A 001 in an 0000 state is a noise generator. You are sinking the firm's reputation and your own. Change industries or disciplines immediately; Engineering is not your lane."
  },
  "0010111": {
    managerPatch: "THE NESTER. PROTOCOL: Skill Probation. Action: Resting and vesting in a Bear market. Patch: Assign a \"Pass/Fail\" technical exam. Up-Skill: Deep-dive training. Up-Motivate: Tie pay to technical certification. Up-Pitch: None. Universal: They are hiding in the stability of the Strong Co. Use the Bear market quiet to force them to prove they actually have Skill.",
    individualSequence: "THE NESTER. STATUS: Comfortable Trap. Stay: For the security. But you are \"Resting and Vesting\" with zero Skill. Leave: No. You will fail any technical interview in the current market. Hunt: Zero activity. Universal: Use the Bear market quiet to actually learn to code. If you enter the next Bull market with zero Skill, your \"Pitch\" will be ignored in favor of \"Rising Stars.\""
  },
  "0010110": {
    managerPatch: "THE SILENT GHOST. PROTOCOL: Entitlement Check. Action: Safe but underpaid (rightfully so). Patch: Be honest: \"Your pay reflects your lack of technical delivery.\" Up-Skill: Direct mentorship. Up-Motivate: None. Universal: They feel they deserve more because they have high Pitch. Ground them in the reality of their 0 Skill bit.",
    individualSequence: "SILENT GHOST. STATUS: Entitled Stall. Stay: Only if you accept that your lack of Skill is why you are underpaid. Leave: If you can trick a new firm into paying for your \"Vibe.\" Hunt: Low-intensity. Universal: Your current firm knows you are a Charlatan. Your only hope is a fresh start where you commit to being a \"Grinder\" (010) for six months."
  },
  "0010101": {
    managerPatch: "CULTURAL POISON. PROTOCOL: Clinical Removal. Action: High pay, toxic vibe, low skill. Patch: Use Bear market stability to fire them. Up-Skill/Motivate: Non-viable. Universal: They are overpaid and irritating. They contribute nothing to the engine and make the atmosphere unbearable for the Gems. This is your easiest and most impactful cut.",
    individualSequence: "GOLDEN POISON. STATUS: Toxic Niche. Stay: For the pay. But you are a pariah. Leave: Yes. Reboot your personality in a new firm. Hunt: Roles where you work in isolation. Universal: You are overpaid and irritating. If you don't fix your culture fit and your Skill gap, you will eventually be unhireable in any \"Strong\" ecosystem."
  },
  "0010100": {
    managerPatch: "THE CAPTIVE NOISE. PROTOCOL: Metric Pressure. Action: No pay, no exit, no skill. Patch: Micro-manage every minute. Up-Skill: Basic execution. Up-Motivate: External pressure. Universal: They are only here because they have nowhere else to go. Since they lack Skill and Will, you must treat them as a low-fidelity tool that requires constant oversight.",
    individualSequence: "CAPTIVE NOISE. STATUS: Miserable Stall. Stay: Only because you have to. Leave: The second the market turns Bull. Hunt: Prepare your \"Pitch\" now. Universal: You are being micro-managed because you lack both internal drive and technical competence. Stop complaining and start delivering the most basic signal possible to survive."
  },
  "0010011": {
    managerPatch: "THE HYPE MAN. PROTOCOL: Emotional Pivot. Action: Sinking ship, high trust. Patch: Put them on \"Customer Success\"—they can talk, but they shouldn't code. Up-Skill: Communication mastery. Up-Motivate: None. Universal: They love the team but are a liability to the architecture. Move them out of Engineering and into Sales or Marketing.",
    individualSequence: "THE HYPE MAN. STATUS: Reputation Survivor. Stay: For the people. But you are a drain on a dying ship. Leave: Yes. Hunt: Move to a firm where your \"Pitch\" can be utilized for Sales or Marketing. Universal: You are occupying a \"Lifeboat\" that a builder deserves. Stop trying to code and start trying to sell the company's remaining assets."
  },
  "0010010": {
    managerPatch: "THE VOLUNTEER. PROTOCOL: Reality Check. Action: No money, high trust, no skill. Patch: Explicitly state the Skill gap. Up-Skill: Entry-level drills. Up-Motivate: None. Universal: They are high-will, high-pitch, but zero-skill. In a dying firm, you cannot afford to train someone from 0. They must grow or go.",
    individualSequence: "THE VOLUNTEER. STATUS: Self-Sacrifice. Stay: You love the vibes but you're giving the team \"Noise,\" not \"Signal.\" Leave: Yes. Hunt: Reset. Universal: High Pitch and High Will without Skill is dangerous. You are accidentally leading the team toward technically unsound decisions. Step back and find a mentor."
  },
  "0010001": {
    managerPatch: "THE SCAMMER. PROTOCOL: Immediate Termination. Action: High pay in a failing/toxic system. Patch: Purge. Up-Skill/Motivate: Non-viable. Up-Pitch: None. Universal: They are taking advantage of the chaos to collect a check. They provide zero value. Terminate to preserve what little cash is left.",
    individualSequence: "THE SCAMMER. STATUS: System Anomaly. Stay: No. You will be the first one fired. Leave: Immediately. Hunt: Active. Universal: You've successfully gamed the chaos, but the cash is gone. Find a \"Strong\" firm with sloppy hiring practices where your \"Pitch\" can land you a temporary check."
  },
  "0010000": {
    managerPatch: "ABSOLUTE ZERO. PROTOCOL: Null State. Action: Total failure. Shed: Terminate. Up-Skill/Motivate: Non-viable. Universal: The system is dead and this unit is just noise. Shut down the unit to allow the few remaining survivors to focus on the reboot.",
    individualSequence: "ABSOLUTE ZERO. STATUS: Null State. Stay: No. Leave: Fast. Hunt: Total reset. Universal: Your Pitch is noisy and distracting. You need a complete career reboot. Move to a new industry where you can lead with your personality and leave the \"Hardware\" to others."
  },

  // 000: THE DEAD WOOD
  "0001111": {
    managerPatch: "THE STATISTICAL GLITCH. PROTOCOL: Immediate Audit. Patch: Zero accountability has allowed this unit to survive. Up-Skill: Impossible. Up-Motivate: None. Up-Pitch: None. Universal: This unit is a \"Ghost in the Machine.\" They exist in the payroll but not in the codebase. In a Bull market/Strong Co, they are hidden by the success of others. Terminate today to recover the seat for a Rising Star.",
    individualSequence: "STATISTICAL GLITCH. STATUS: Hidden Failure. Stay: You are \"Resting and Vesting\" in a system that hasn't audited you yet. This is unsustainable. Leave: Yes, before the audit happens. Hunt: Target non-technical roles. Universal: You are a 000 in a 1111 environment. You are currently a passenger. Use this high-stability period to pivot to a career where you actually have Will and Skill."
  },
  "0001110": {
    managerPatch: "THE COSTLESS GHOST. PROTOCOL: Passive Removal. Action: They are underpaid and invisible. Patch: Do not adjust pay. Shed: They will likely leave on their own when they realize no one is watching. Universal: Their Low Pitch protects them from scrutiny, and their Low Skill/Will makes them a non-entity. Do not waste managerial energy on \"fixing\" a unit with zero base signal.",
    individualSequence: "COSTLESS GHOST. STATUS: Underpaid Non-Entity. Stay: Only because they aren't paying enough to notice you. Leave: Yes. You are wasting your life in a role where you contribute nothing. Hunt: Reset your career path. Universal: Being a Ghost in a Strong firm is a slow death for your professional future. Your lack of Pitch is the only reason they aren't paying you enough to fire you. Exit and reboot."
  },
  "0001101": {
    managerPatch: "TOXIC VOID. PROTOCOL: Friction Removal. Action: Overpaid and culturally rot. Patch: Immediate termination. Shed: They are a \"Low-Fidelity Saboteur.\" They don't do the work and they make the environment worse for those who do. Universal: Every day this unit remains is a signal to your Unicorns that you tolerate absolute zero performance. Purge to restore team integrity.",
    individualSequence: "TOXIC VOID. STATUS: High-Pay Risk. Stay: You are winning the math but losing your humanity. You will be the first target in any efficiency drive. Leave: Immediately. Hunt: Reset your reputation. Universal: You are a \"Low-Fidelity Saboteur.\" Your presence is noted and resented by the builders. Leave before you are terminated with a \"non-hireable\" reputation."
  },
  "0001100": {
    managerPatch: "THE LEAK. PROTOCOL: System Cleanup. Action: Total failure in a Bull market. Shed: Terminate immediately. Universal: This is the easiest managerial decision in the stack. There is zero ROI on any interaction with this unit. Recover the budget and the desk space.",
    individualSequence: "THE LEAK. STATUS: System Insult. Stay: No. You are a failure in a Bull market. Leave: Today. Hunt: Total reboot. Universal: There is zero ROI on staying. You have no Skill, no Will, and no Pitch. Use the Bull market's chaos to find a different industry or a completely different career path."
  },
  "0001011": {
    managerPatch: "THE CLINGING VESTIGE. PROTOCOL: Reality Realignment. Action: Loyal but non-functional. Patch: Be clinical. \"Loyalty is not a substitute for output.\" Shed: Help them transition to a non-technical role or exit. Universal: In a weak firm, you cannot afford \"Sentimental Assets.\" Every dollar spent here is a dollar not spent on the turnaround engine.",
    individualSequence: "CLINGING VESTIGE. STATUS: Sentimental Liability. Stay: You are loyal to a weak firm that cannot afford your lack of output. Leave: Yes. Hunt: Transition to a non-technical role (Admin/Ops). Universal: Loyalty is not a currency. If you aren't building, you are actively sinking the turnaround effort. Help the company by leaving so they can hire a builder."
  },
  "0001010": {
    managerPatch: "THE VIBE DONOR. PROTOCOL: Compassionate Exit. Action: High trust but zero delivery. Patch: \"We love having you here, but we need builders.\" Shed: Transition them out before the company fails. Universal: They are a nice person who can't do the job. In a crisis, \"Nice\" is a luxury that leads to total system failure.",
    individualSequence: "VIBE DONOR. STATUS: Compassionate Drain. Stay: They like you, but they don't need you. You are a luxury a weak firm cannot afford. Leave: Yes. Hunt: Reset. Universal: You are a \"nice person\" who can't do the job. In a crisis, your lack of Skill and Will is a liability. Find a role where being \"nice\" and \"trustworthy\" is the primary skill."
  },
  "0001001": {
    managerPatch: "THE BUDGET DRAIN. PROTOCOL: Financial Recovery. Action: Overpaid in a failing, toxic firm. Shed: Terminate in the first wave of layoffs. Universal: They have gamed a weak system for a high paycheck. They are the definition of \"Dead Weight.\" Cutting them immediately improves the burn rate with zero impact on technical velocity.",
    individualSequence: "BUDGET DRAIN. STATUS: Financial Target. Stay: You are gaming a weak system for a check. It ends when the runway does. Leave: Yes. Hunt: Large, slow-moving bureaucracies. Universal: You are the definition of Dead Weight. Your \"Overpaid\" status makes you the primary candidate for the first wave of layoffs. Exit before you are pushed."
  },
  "0001000": {
    managerPatch: "ABSOLUTE ZERO. PROTOCOL: Immediate Purge. Action: Total failure. Shed: Terminate. Do not offer a performance plan. Universal: A Ghost in a failing firm is a parasite on a dying host. Remove them to give the remaining \"Will\" units a fighting chance at survival.",
    individualSequence: "ABSOLUTE ZERO. STATUS: Immediate Purge. Stay: No. The system is dead and you are a parasite. Leave: Today. Hunt: Total reset. Universal: A Ghost in a failing firm is a downward spiral. You aren't just stagnant; you are regressing. Change industries immediately; the current path is a dead end."
  },
  "0000111": {
    managerPatch: "THE NESTER. PROTOCOL: Safety Audit. Action: Hiding in the Bear market stability. Patch: Assign a mandatory, high-stakes technical task. Shed: When they fail (and they will), terminate. Universal: They are using the Strong Co as a shelter. They provide zero maintenance and zero growth. Clear the seat for a Grinder.",
    individualSequence: "THE NESTER. STATUS: Bear Market Shelter. Stay: For the safety, but you are a target for any \"Efficiency\" audit. Leave: No, because you have no market value. Hunt: Internal pivot only. Universal: You are hiding in a Bear market. Use this time to find a role in the company where you actually have Will. If you stay as a Ghost, you will be cut."
  },
  "0000110": {
    managerPatch: "THE ANONYMOUS. PROTOCOL: Passive Observation. Action: Underpaid and quiet. Patch: None. Shed: They are a low-priority target, but eventually, the lack of signal will be audited. Universal: Do not invest. If they aren't building in a Bear market, they are just waiting for the layoff check.",
    individualSequence: "ANONYMOUS. STATUS: Underpaid Stall. Stay: Only until the layoff happens. Leave: Yes, if you can find a different career path. Hunt: Low urgency. Universal: You are a low-priority target, but eventually, your lack of signal will be found. Do not wait for the inevitable; take control of your career and pivot now."
  },
  "0000101": {
    managerPatch: "THE COLD VOID. PROTOCOL: Clinical Cut. Action: High pay, toxic, zero skill. Shed: Terminate today. Universal: Use the Bear market \"efficiency\" narrative to remove this unit. They are expensive, useless, and irritating. Removing them is an instant win for team morale and the P&L.",
    individualSequence: "COLD VOID. STATUS: Clinical Risk. Stay: For the pay, but expect to be fired. Leave: Yes. Reboot your personality elsewhere. Hunt: Roles with zero human interaction. Universal: You are expensive, useless, and irritating. In a Bear market, companies cut the \"Cold Voids\" first. Find a new host before the audit completes."
  },
  "0000100": {
    managerPatch: "CAPTIVE GHOST. PROTOCOL: Pressure Test. Action: No pay, no exit, no skill. Patch: Hard micro-management. Shed: They will likely quit under the pressure of having to actually deliver signal. Universal: They are only here because they are unhireable elsewhere. Provide the \"Will\" via strict KPIs or facilitate the exit.",
    individualSequence: "CAPTIVE GHOST. STATUS: Miserable Stall. Stay: Only because you are unhireable elsewhere. Leave: When the cycle turns Bull. Hunt: Prepare for a total reboot. Universal: You are being micro-managed because you lack all three bits (Skill, Will, Pitch). Stop complaining and start building a basic \"Skill\" to earn your way out."
  },
  "0000011": {
    managerPatch: "THE PASSIVE FRIEND. PROTOCOL: Honest Parting. Action: Sinking ship, high trust. Patch: \"I can't save your job if you don't build the product.\" Shed: Exit them before the final collapse. Universal: High trust without skill or will is a tragedy. Help them find a different career path where they can lead with their personality.",
    individualSequence: "PASSIVE FRIEND. STATUS: Sinking Loyalty. Stay: For the people, but you are a burden on their survival. Leave: Yes. Hunt: Move to a non-technical field. Universal: High trust without skill or will is a tragedy. Help your friends by leaving the Engineering team so they can hire someone who can row the boat."
  },
  "0000010": {
    managerPatch: "THE SHADOW. PROTOCOL: Reality Check. Action: No money, high trust. Patch: Explain the math: \"The company is dying and you aren't providing the signal to save it.\" Shed: Exit immediately. Universal: They are a ghost in a graveyard. Move them along so they can reboot their life elsewhere.",
    individualSequence: "THE SHADOW. STATUS: Vibe Martyr. Stay: You are a ghost in a graveyard. Leave: Today. Hunt: Reset everything. Universal: You are donating nothing to a void. Move along so you can reboot your life. Your loyalty to a dead firm is preventing you from finding a career where you actually matter."
  },
  "0000001": {
    managerPatch: "THE SCAMMER. PROTOCOL: Zero-Notice Exit. Action: Overpaid in chaos. Shed: Terminate. No severance if performance can be proven at zero. Universal: They are exploiting the disaster. Every minute they stay is a theft from the remaining survivors. Purge with extreme prejudice.",
    individualSequence: "THE SCAMMER. STATUS: Chaos Parasite. Stay: Until they find you and fire you. Leave: Immediately. Hunt: Active. Universal: You've successfully gamed the disaster, but the cash is gone. Find a \"Strong\" firm with sloppy hiring practices where you can repeat the scam for a few months."
  },
  "0000000": {
    managerPatch: "SYSTEM NULL. PROTOCOL: Total Deletion. Action: Total system failure. Shed: Terminate. Universal: The firm is dead and this unit never lived. Shut it down. Focus 100% of your energy on the 1 or 2 people who are actually trying to reboot the system.",
    individualSequence: "SYSTEM NULL. STATUS: Total Failure. Stay: No. The firm is dead and you never lived. Leave: Immediately. Hunt: Total reset. Universal: The system is dead. Shut down your involvement and move to a completely new industry. You need a 100% reboot of your professional identity."
  }
};
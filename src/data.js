// All editable content lives here.
const U = (id, w = 640) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=65`;
export const IMG = {
  hero: U('photo-1540555700478-4be289fbecef', 1400), about: U('photo-1544161515-4ab6ce6db874'),
  a: U('photo-1600334129128-685c5582fd35'), b: U('photo-1519823551278-64ac92734fb1'), c: U('photo-1515377905703-c4788e51af15'),
};
const S = (id, name, cat, dur, img, desc, benefits, who, expect) => ({ id, name, cat, dur, img, desc, benefits, who, expect });
export const SERVICES = [
  S('signature','Signature Massage','Relaxation','60–90 min',IMG.about,'Our house blend of warm herbal oils and long flowing strokes.',['Deep calm','Eases muscle tension','Improves sleep'],'Anyone new to Ayurvedic massage.','A short consultation, then a slow full-body massage in a private room.'),
  S('deep-tissue','Deep Tissue Massage','Therapeutic','60–90 min',IMG.a,'Firm, focused pressure for knots and chronic tightness.',['Releases deep knots','Eases back and neck pain','Aids recovery'],'Desk workers, runners and gym-goers.','Targeted work on tight areas. Tell your therapist how firm you like it.'),
  S('hot-stone','Hot Stone Massage','Relaxation','75 min',IMG.hero,'Heated basalt stones melt tension and warm tired muscles.',['Deep warmth','Better circulation','Calms the mind'],'Anyone with stiff muscles or cold-weather aches.','Warm stones are placed and glided over the back and limbs.'),
  S('swedish','Swedish Massage','Relaxation','60 min',IMG.b,'Light to medium strokes for gentle, full-body relaxation.',['Lowers stress','Soothes the body','Lifts mood'],'First-timers and anyone wanting a gentle massage.','Smooth kneading and long strokes with light oil.'),
  S('thai','Thai Massage','Therapeutic','60–90 min',IMG.c,'Assisted stretching and acupressure along energy lines.',['Improves flexibility','Releases stiffness','Boosts energy'],'People who feel stiff or sit for long hours.','Dressed in loose clothing, you are guided through gentle stretches.'),
  S('aroma','Aromatherapy Massage','Relaxation','60–75 min',IMG.a,'Essential oils chosen for your mood, blended into a calming massage.',['Eases anxiety','Better sleep','Soft, nourished skin'],'Anyone stressed, tired or sleeping badly.','You pick a scent, then enjoy a slow massage with that oil blend.'),
  S('head','Head Massage','Therapeutic','30–45 min',IMG.b,'Warm oil on scalp, neck and shoulders to ease headaches.',['Relieves headaches','Reduces screen fatigue','Healthier scalp'],'Anyone with tension headaches or tired eyes.','Seated or lying down, with focus on scalp, temples and neck.'),
  S('balinese','Balinese Massage','Beauty','75–90 min',IMG.c,'Gentle stretches, acupressure and skin-rolling with fragrant oils.',['Glowing skin','Eases fatigue','Restores balance'],'Anyone wanting a full-body refresh.','A flowing, rhythmic massage that blends pressure and stretches.'),
];
export const FEATURES = [['🌿','Authentic Ayurveda','Traditional techniques and herbal oils.'],['🙌','Skilled Therapists','Trained, courteous and attentive.'],['🪔','Premium Natural Oils','Pure oils chosen for your body type.'],['🧼','Hygiene & Safety','Fresh linen and sanitised rooms.'],['🚪','Private Serene Rooms','Quiet, calm and just for you.'],['💛','Affordable Luxury','A retreat feeling without the stress.']];
export const BENEFITS = [['Stress relief','Slow, rhythmic strokes calm the nervous system and quieten a busy mind.'],['Better sleep','Warm oil and relaxation help the body wind down for deeper rest.'],['Pain relief','Focused pressure eases knots in the neck, back and shoulders.'],['Detox','Gentle pressure encourages lymph flow and a lighter feeling.'],['Glowing skin','Herbal oils nourish skin and boost its natural glow.'],['Circulation','Massage warms tissue and supports healthy blood flow.']];
export const STEPS = [['Consultation','We listen to your needs, comfort and any concerns.'],['Customised therapy','Your therapist chooses the massage, pressure and oils.'],['Deep relaxation','Switch off in a quiet, private room.'],['Rejuvenated you','Leave rested, light and glowing.']];
export const PACKS = [['Couple’s Retreat','Side-by-side massages in one private room.',['Two therapists','Aromatherapy oils','Herbal tea'],false],['Full-Body Rejuvenation','Massage, head therapy and a skin-glow finish.',['Signature massage','Head massage','Facial glow'],true],['Bridal / Pamper Package','Relax and glow before the big day.',['Massage','Facial','Nail care']]];
export const GALLERY_BILEKAHALLI = [
  '/bimg1.jpeg', '/bimg2.jpeg', '/bimg3.jpeg', '/bimg5.jpeg', '/bimg6.jpeg',
  '/bimg7.jpeg', '/bimg8.jpeg', '/bimg10.jpeg', '/bimg12.jpeg', '/bimg13.jpeg',
  '/bimg14.jpeg', '/bimg15.jpeg', '/bimg16.jpeg', '/bimg21.jpeg'
];
export const GALLERY_INDIRANAGAR = [
  '/img4.jpeg', '/img9.jpeg', '/img17.jpeg', '/img18.jpeg', '/img19.jpeg',
  '/img20.jpeg', '/img22.jpeg', '/img23.jpeg', '/img24.jpeg', '/img25.jpeg',
  '/img26.jpeg'
];
export const GALLERY = [...GALLERY_BILEKAHALLI, ...GALLERY_INDIRANAGAR];
export const REVIEWS = [['Ananya R.','Easily the best deep tissue massage I have had in Bangalore. My back pain is gone.'],['Karthik S.','Clean, quiet and very professional. The hot stone session was wonderful.'],['Meera P.','The couple’s retreat was perfect for our anniversary. Warm, friendly staff.']];
export const FAQS = [['What should I expect on my first visit?','A short chat about your needs, then your chosen treatment in a private room.'],['What should I wear?','Wear anything comfortable. Fresh towels and disposable garments are provided.'],['How long is a session?','Most sessions run 60–90 minutes. Head massage takes 30–45 minutes.'],['Can I choose a male or female therapist?','Yes. Tell us when you book and we will arrange it where possible.'],['Where are your branches located?','We have two convenient branches in Bangalore: Bilekahalli (Bannerghatta Road) and Indiranagar. Parking is available at both locations.'],['How do I book?','Call or WhatsApp +91 97404 18533, or send the form below.']];

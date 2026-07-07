import { Lesson, VocabItem, QuizQuestion } from "./types";

export const RESTAURANT_LESSONS: Lesson[] = [
  {
    id: "lesson-1",
    number: 1,
    titleTh: "การแนะนำตัวและประสบการณ์ทำงาน",
    titleEn: "Introduction & Experience",
    titleMy: "မိတ်ဆက်ခြင်းနှင့် အလုပ်အတွေ့အကြုံ",
    description: "Learn how to greet an interviewer, state your name, origin, positions held, and duties.",
    dialogues: [
      {
        id: "l1-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ช่วยแนะนำตัวหน่อยครับ",
        phonetic: "Chûai náe-nam tua nòi khráp.",
        burmese: "ကိုယ့်ကိုယ်ကိုယ် မိတ်ဆက်ပေးပါ။",
        vocabBreakdown: [
          { word: "ช่วย", phonetic: "chûai", meaningMy: "ကူညီပါ (Please)" },
          { word: "แนะนำ", phonetic: "náe-nam", meaningMy: "မိတ်ဆက်သည် (Introduce)" },
          { word: "ตัว", phonetic: "tua", meaningMy: "ကိုယ်/မိမိကိုယ်ကို (Self)" },
          { word: "หน่อย", phonetic: "nòi", meaningMy: "နည်းနည်းလောက် (A bit/Please)" },
          { word: "ครับ", phonetic: "khráp", meaningMy: "ခင်ဗျာ (Polite particle)" }
        ]
      },
      {
        id: "l1-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "สวัสดีครับ ผมชื่ออ่องอ่อง มาจากประเทศเมียนมา มีประสบการณ์ทำงานร้านอาหาร 2 ปีครับ",
        phonetic: "Sa-wàt-dee khráp. Phǒm chʉ̂ʉ Aung Aung, maa jàak bprà-thêet Myanmar. Mii prà-sòp-kaan tham-ngaan ráan aa-hǎan sǒong bpii khráp.",
        burmese: "မင်္ဂလာပါ။ ကျွန်တော့်နာမည် အောင်အောင်ပါ။ မြန်မာနိုင်ငံကလာပြီး စားသောက်ဆိုင်မှာ ၂ နှစ်လုပ်ဖူးပါတယ်။",
        vocabBreakdown: [
          { word: "สวัสดี", phonetic: "sa-wàt-dee", meaningMy: "မင်္ဂလာပါ (Hello)" },
          { word: "ชื่อ", phonetic: "chʉ̂ʉ", meaningMy: "နာမည် (Name)" },
          { word: "มาจาก", phonetic: "maa jàak", meaningMy: "ကလာသည် (Come from)" },
          { word: "ประเทศ", phonetic: "bprà-thêet", meaningMy: "နိုင်ငံ (Country)" },
          { word: "มี", phonetic: "mii", meaningMy: "ရှိသည် (Have)" },
          { word: "ประสบการณ์", phonetic: "prà-sòp-kaan", meaningMy: "အတွေ့အကြုံ (Experience)" },
          { word: "ทำงาน", phonetic: "tham-ngaan", meaningMy: "อလုပ်လုပ်သည် (Work)" },
          { word: "ร้านอาหาร", phonetic: "ráan aa-hǎan", meaningMy: "စားသောက်ဆိုင် (Restaurant)" },
          { word: "2 ปี", phonetic: "sǒong bpii", meaningMy: "၂ နှစ် (2 years)" }
        ]
      },
      {
        id: "l1-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "เคยทำงานร้านอาหารไหม",
        phonetic: "Khoei tham-ngaan ráan aa-hǎan mái?",
        burmese: "စားသောက်ဆိုင်မှာ အလုပ်လုပ်ဖူးလား။",
        vocabBreakdown: [
          { word: "เคย", phonetic: "khoei", meaningMy: "ဖူးသည် (Used to/Ever)" },
          { word: "ทำงาน", phonetic: "tham-ngaan", meaningMy: "အလုပ်လုပ်သည် (Work)" },
          { word: "ร้านอาหาร", phonetic: "ráan aa-hǎan", meaningMy: "စားသောက်ဆိုင် (Restaurant)" },
          { word: "ไหม", phonetic: "mái", meaningMy: "လား (Question particle)" }
        ]
      },
      {
        id: "l1-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "เคยครับ ทำงานมา 2 ปีครับ",
        phonetic: "Khoei khráp. Tham-ngaan maa sǒong bpii khráp.",
        burmese: "ဟုတ်ကဲ့ လုပ်ဖူးပါတယ်။ ၂ နှစ်လုပ်ဖူးပါတယ်။",
        vocabBreakdown: [
          { word: "เคย", phonetic: "khoei", meaningMy: "ဖူးသည် (Used to)" },
          { word: "ทำงาน", phonetic: "tham-ngaan", meaningMy: "အလုပ်လုပ်သည် (Work)" },
          { word: "มา", phonetic: "maa", meaningMy: "ခဲ့သည် (Duration/direction helper)" },
          { word: "2 ปี", phonetic: "sǒong bpii", meaningMy: "၂ နှစ် (2 years)" }
        ]
      },
      {
        id: "l1-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำตำแหน่งอะไร",
        phonetic: "Tham tam-nàeng à-rai?",
        burmese: "ဘာရာထူးလုပ်ခဲ့လဲ။",
        vocabBreakdown: [
          { word: "ทำ", phonetic: "tham", meaningMy: "လုပ်သည် (Do/Work)" },
          { word: "ตำแหน่ง", phonetic: "tam-nàeng", meaningMy: "ရာထူး/နေရာ (Position)" },
          { word: "อะไร", phonetic: "à-rai", meaningMy: "ဘာလဲ (What)" }
        ]
      },
      {
        id: "l1-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมทำตำแหน่งพนักงานเสิร์ฟครับ",
        phonetic: "Phǒm tham tam-nàeng phà-nák-ngaan sèrf khráp.",
        burmese: "စားပွဲထိုးအဖြစ် လုပ်ခဲ့ပါတယ်။",
        vocabBreakdown: [
          { word: "ผม", phonetic: "phǒm", meaningMy: "ကျွန်တော် (I - male)" },
          { word: "ทำ", phonetic: "tham", meaningMy: "လုပ်သည် (Do/Work)" },
          { word: "ตำแหน่ง", phonetic: "tam-nàeng", meaningMy: "ရာထူး/နေရာ (Position)" },
          { word: "พนักงานเสิร์ฟ", phonetic: "phà-nák-ngaan sèrf", meaningMy: "စားပွဲထိုးဝန်ထမ်း (Waitstaff/Server)" }
        ]
      },
      {
        id: "l1-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "หน้าที่ของคุณคืออะไร",
        phonetic: "Nâa-thîi khɔ̌ɔng khun khʉʉ à-rai?",
        burmese: "ဘာတာဝန်ယူခဲ့လဲ။",
        vocabBreakdown: [
          { word: "หน้าที่", phonetic: "nâa-thîi", meaningMy: "တာဝန် (Duty/Responsibility)" },
          { word: "ของ", phonetic: "khɔ̌ɔng", meaningMy: "၏ (Of)" },
          { word: "คุณ", phonetic: "khun", meaningMy: "ခင်ဗျား/သင် (You)" },
          { word: "คือ", phonetic: "khʉʉ", meaningMy: "ဖြစ်သည် (Is/Are)" },
          { word: "อะไร", phonetic: "à-rai", meaningMy: "ဘာလဲ (What)" }
        ]
      },
      {
        id: "l1-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "รับออเดอร์ เสิร์ฟอาหาร และดูแลลูกค้าครับ",
        phonetic: "Ráp order, sèrf aa-hǎan, læ duu-læ lûuk-kháa khráp.",
        burmese: "အော်ဒါယူ၊ အစားအစာပို့၊ ဖောက်သည်ကို ဂရုစိုက်ပါတယ်။",
        vocabBreakdown: [
          { word: "รับออเดอร์", phonetic: "ráp order", meaningMy: "အော်ဒါယူသည် (Take order)" },
          { word: "เสิร์ฟ", phonetic: "sèrf", meaningMy: "ပို့သည်/ချကျွေးသည် (Serve)" },
          { word: "อาหาร", phonetic: "aa-hǎan", meaningMy: "အစားအစာ (Food)" },
          { word: "และ", phonetic: "læ", meaningMy: "နှင့် (And)" },
          { word: "ดูแล", phonetic: "duu-læ", meaningMy: "ဂရုစိုက်သည် (Take care of)" },
          { word: "ลูกค้า", phonetic: "lûuk-kháa", meaningMy: "ဝယ်သူ/ဧည့်သည် (Customer)" }
        ]
      },
      {
        id: "l1-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำไมอยากทำงานร้านอาหาร",
        phonetic: "Tham-mai yàak tham-ngaan ráan aa-hǎan?",
        burmese: "ဘာကြောင့် စားသောက်ဆိုင်မှာ လုပ်ချင်တာလဲ။",
        vocabBreakdown: [
          { word: "ทำไม", phonetic: "tham-mai", meaningMy: "ဘာကြောင့်လဲ (Why)" },
          { word: "อยาก", phonetic: "yàak", meaningMy: "ချင်သည် (Want to)" },
          { word: "ทำงาน", phonetic: "tham-ngaan", meaningMy: "အလုပ်လုပ်သည် (Work)" },
          { word: "ร้านอาหาร", phonetic: "ráan aa-hǎan", meaningMy: "စားသောက်ဆိုင် (Restaurant)" }
        ]
      },
      {
        id: "l1-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "เพราะผมชอบงานบริการและชอบพบลูกค้าครับ",
        phonetic: "Phrɔ́ phǒm chɔ̂ɔp ngaan bɔɔ-rí-gaan læ chɔ̂ɔp phóp lûuk-kháa khráp.",
        burmese: "ဝန်ဆောင်မှုပေးရတာကို ကြိုက်လို့ပါ။",
        vocabBreakdown: [
          { word: "เพราะ", phonetic: "phrɔ́", meaningMy: "ဘာကြောင့်လဲဆိုတော့ (Because)" },
          { word: "ชอบ", phonetic: "chɔ̂ɔp", meaningMy: "ကြိုက်သည် (Like)" },
          { word: "งานบริการ", phonetic: "ngaan bɔɔ-rí-gaan", meaningMy: "ဝန်ဆောင်မှုအလုပ် (Service work)" },
          { word: "พบ", phonetic: "phóp", meaningMy: "တွေ့ဆုံသည် (Meet)" },
          { word: "ลูกค้า", phonetic: "lûuk-kháa", meaningMy: "ဝယ်သူ/ဧည့်သည် (Customer)" }
        ]
      }
    ]
  },
  {
    id: "lesson-2",
    number: 2,
    titleTh: "ความพร้อมในการทำงานและรับแรงกดดัน",
    titleEn: "Work Readiness & Pressure",
    titleMy: "အလုပ်အဆင်သင့်ဖြစ်မှုနှင့် ဖိအားဒဏ်ခံနိုင်မှု",
    description: "Discuss physical readiness for long standing shifts, overtime, and handling unhappy customers under pressure.",
    dialogues: [
      {
        id: "l2-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ยืนทำงานทั้งวันได้ไหม",
        phonetic: "Yʉun tham-ngaan tháng wan dâai mái?",
        burmese: "တစ်နေ့လုံး မတ်တပ်ရပ်လုပ်နိုင်လား။",
        vocabBreakdown: [
          { word: "ยืน", phonetic: "yʉun", meaningMy: "မတ်တပ်ရပ်သည် (Stand)" },
          { word: "ทำงาน", phonetic: "tham-ngaan", meaningMy: "အလုပ်လုပ်သည် (Work)" },
          { word: "ทั้งวัน", phonetic: "tháng wan", meaningMy: "တစ်နေ့လုံး (All day)" },
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" },
          { word: "ไหม", phonetic: "mái", meaningMy: "လား (Question particle)" }
        ]
      },
      {
        id: "l2-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ไม่มีปัญหาครับ",
        phonetic: "Dâai khráp. Mâi-mii pan-hǎa khráp.",
        burmese: "ရပါတယ်။ ပြဿနာမရှိပါဘူး။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည်/နိုင်သည် (Can)" },
          { word: "ไม่มี", phonetic: "mâi-mii", meaningMy: "မရှိပါ (Without/Do not have)" },
          { word: "ปัญหา", phonetic: "pan-hǎa", meaningMy: "ပြဿနာ (Problem)" }
        ]
      },
      {
        id: "l2-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำงานกะดึกได้ไหม",
        phonetic: "Tham-ngaan gà dʉ̀k dâai mái?",
        burmese: "ညဆိုင်းလုပ်နိုင်လား။",
        vocabBreakdown: [
          { word: "ทำงาน", phonetic: "tham-ngaan", meaningMy: "အလုပ်လုပ်သည် (Work)" },
          { word: "กะดึก", phonetic: "gà dʉ̀k", meaningMy: "ညဆိုင်း (Night shift)" },
          { word: "ได้ไหม", phonetic: "dâai mái", meaningMy: "ရနိုင်မလား (Can you?)" }
        ]
      },
      {
        id: "l2-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည်/နိုင်သည် (Can)" }
        ]
      },
      {
        id: "l2-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျา",
        thai: "ทำโอทีได้ไหม",
        phonetic: "Tham OT dâai mái?",
        burmese: "OT လုပ်နိုင်လား။",
        vocabBreakdown: [
          { word: "ทำ", phonetic: "tham", meaningMy: "လုပ်သည် (Do)" },
          { word: "โอที", phonetic: "OT", meaningMy: "အချိန်ပို (Overtime)" }
        ]
      },
      {
        id: "l2-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      },
      {
        id: "l2-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ถ้าลูกค้าไม่พอใจจะทำอย่างไร",
        phonetic: "Thâa lûuk-kháa mâi phɔɔ-jai jà tham yàang-rai?",
        burmese: "Customer မကျေနပ်ရင် ဘာလုပ်မလဲ။",
        vocabBreakdown: [
          { word: "ถ้า", phonetic: "thâa", meaningMy: "လျှင်/အကယ်၍ (If)" },
          { word: "ลูกค้า", phonetic: "lûuk-kháa", meaningMy: "ဖောက်သည် (Customer)" },
          { word: "ไม่พอใจ", phonetic: "mâi phɔɔ-jai", meaningMy: "မကျေနပ်သည် (Dissatisfied)" },
          { word: "จะ", phonetic: "jà", meaningMy: "မည် (Will)" },
          { word: "ทำอย่างไร", phonetic: "tham yàang-rai", meaningMy: "ဘယ်လိုလုပ်မလဲ (How to do)" }
        ]
      },
      {
        id: "l2-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมจะขอโทษ รับฟัง และแจ้งหัวหน้าครับ",
        phonetic: "Phǒm jà khɔ̌ɔ-thôot, ráp fang, læ jâeng hǔa-nâa khráp.",
        burmese: "တောင်းပันပြီး နားထောင်ကာ ခေါင်းဆောင်ကို အကြောင်းကြားပါမယ်။",
        vocabBreakdown: [
          { word: "ขอโทษ", phonetic: "khɔ̌ɔ-thôot", meaningMy: "တောင်းပันသည် (Apologize)" },
          { word: "รับฟัง", phonetic: "ráp fang", meaningMy: "နားထောင်သည် (Listen to)" },
          { word: "และ", phonetic: "læ", meaningMy: "နှင့် (And)" },
          { word: "แจ้ง", phonetic: "jâeng", meaningMy: "အသိပေးသည် (Inform)" },
          { word: "หัวหน้า", phonetic: "hǔa-nâa", meaningMy: "ခေါင်းဆောင်/အထက်လူကြီး (Supervisor)" }
        ]
      },
      {
        id: "l2-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "รับแรงกดดันได้ไหม",
        phonetic: "Ráp rɛɛng-gòt-dan dâai mái?",
        burmese: "ဖိအားများတဲ့အလုပ် လုပ်နိုင်လား။",
        vocabBreakdown: [
          { word: "รับ", phonetic: "ráp", meaningMy: "ခံယူသည်/လက်ခံသည် (Receive/Handle)" },
          { word: "แรงกดดัน", phonetic: "rɛɛng-gòt-dan", meaningMy: "ဖิအား (Pressure)" }
        ]
      },
      {
        id: "l2-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมทำงานได้ดีในช่วงลูกค้าเยอะครับ",
        phonetic: "Dâai khráp. Phǒm tham-ngaan dâai dii nai chûang lûuk-kháa yór khráp.",
        burmese: "ရပါတယ်။ ဧည့်သည်များတဲ့အချိန်မှာ ကောင်းကောင်းလုပ်နိုင်ပါတယ်။",
        vocabBreakdown: [
          { word: "ทำงานได้ดี", phonetic: "tham-ngaan dâai dii", meaningMy: "ကောင်းကောင်းလုပ်နိုင်သည် (Work well)" },
          { word: "ในช่วง", phonetic: "nai chûang", meaningMy: "အတောအတွင်း (During)" },
          { word: "ลูกค้าเยอะ", phonetic: "lûuk-kháa yór", meaningMy: "ဧည့်သည်များပြားသောအချိန် (Many customers)" }
        ]
      }
    ]
  },
  {
    id: "lesson-3",
    number: 3,
    titleTh: "งานในครัวและสุขอนามัย",
    titleEn: "Kitchen Work & Hygiene",
    titleMy: "မီးဖိုချောင်အလုပ်နှင့် သန့်ရှင်းရေး",
    description: "Learn vocabulary related to assistant kitchen work, food preparation, dishwashing, and safety/sanitation guidelines.",
    dialogues: [
      {
        id: "l3-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "เคยทำงานในครัวไหม",
        phonetic: "Khoei tham-ngaan nai khrua mái?",
        burmese: "မီးဖိုချောင်မှာ လုပ်ဖူးလား။",
        vocabBreakdown: [
          { word: "เคย", phonetic: "khoei", meaningMy: "ဖူးသည် (Used to)" },
          { word: "ในครัว", phonetic: "nai khrua", meaningMy: "မီးဖိုချောင်ထဲတွင် (In the kitchen)" }
        ]
      },
      {
        id: "l3-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "เคยครับ ช่วยเตรียมวัตถุดิบและล้างจานครับ",
        phonetic: "Khoei khráp. Chûai triam wát-thù-dìp læ láang jaan khráp.",
        burmese: "လုပ်ဖူးပါတယ်။ အသီးအရွက် ပြင်ဆင်ပြီး ပန်းကန်ဆေးပါတယ်။",
        vocabBreakdown: [
          { word: "ช่วย", phonetic: "chûai", meaningMy: "ကူညီသည် (Help)" },
          { word: "เตรียม", phonetic: "triam", meaningMy: "ပြင်ဆင်သည် (Prepare)" },
          { word: "วัตถุดิบ", phonetic: "wát-thù-dìp", meaningMy: "ကုန်ကြမ်း/ပါဝင်ပစ္စည်း (Ingredients)" },
          { word: "ล้าง", phonetic: "láang", meaningMy: "ဆေးသည် (Wash)" },
          { word: "จาน", phonetic: "jaan", meaningMy: "ပန်းကန် (Plates/Dishes)" }
        ]
      },
      {
        id: "l3-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "หั่นผักได้ไหม",
        phonetic: "Hàn phàk dâai mái?",
        burmese: "ဟင်းသီးဟင်းရွက် လှီးနိုင်လား။",
        vocabBreakdown: [
          { word: "หั่น", phonetic: "hàn", meaningMy: "လှီးသည် (To cut/slice)" },
          { word: "ผัก", phonetic: "phàk", meaningMy: "ဟင်းသီးဟင်းရွက် (Vegetables)" }
        ]
      },
      {
        id: "l3-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      },
      {
        id: "l3-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ล้างจานได้ไหม",
        phonetic: "Láang jaan dâai mái?",
        burmese: "ပန်းကန်ဆေးနိုင်လား။",
        vocabBreakdown: [
          { word: "ล้างจาน", phonetic: "láang jaan", meaningMy: "ပန်းကန်ဆေးသည် (Wash dishes)" }
        ]
      },
      {
        id: "l3-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      },
      {
        id: "l3-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำความสะอาดครัวได้ไหม",
        phonetic: "Tham khwaam-sà-àat khrua dâai mái?",
        burmese: "မီးဖိုချောင် သန့်ရှင်းရေးလုပ်နိုင်လား။",
        vocabBreakdown: [
          { word: "ทำความสะอาด", phonetic: "tham khwaam-sà-àat", meaningMy: "သန့်ရှင်းရေးလုပ်သည် (Clean)" },
          { word: "ครัว", phonetic: "khrua", meaningMy: "မီးဖိုချောင် (Kitchen)" }
        ]
      },
      {
        id: "l3-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      },
      {
        id: "l3-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "รู้เรื่องสุขอนามัยไหม",
        phonetic: "Rúu rʉ̂ang sùk-khà-aa-na-mai mái?",
        burmese: "အစားအသောက် သန့်ရှင်းရေးစည်းမျဉ်း သိလား။",
        vocabBreakdown: [
          { word: "รู้เรื่อง", phonetic: "rúu rʉ̂ang", meaningMy: "အကြောင်းသိသည် (Know about)" },
          { word: "สุขอนามัย", phonetic: "sùk-khà-aa-na-mai", meaningMy: "သန့်ရှင်းရေးစည်းကမ်း (Sanitation/Hygiene)" }
        ]
      },
      {
        id: "l3-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "รู้ครับ ผมล้างมือและใส่ถุงมือตลอดครับ",
        phonetic: "Rúu khráp. Phǒm láang mʉʉ læ sài thǔng mʉʉ dtà-lòot khráp.",
        burmese: "သိပါတယ်။ လက်ဆေးပြီး လက်အိတ် အမြဲစွပ်ထားပါတယ်။",
        vocabBreakdown: [
          { word: "ล้างมือ", phonetic: "láang mʉʉ", meaningMy: "လက်ဆေးသည် (Wash hands)" },
          { word: "ใส่", phonetic: "sài", meaningMy: "စွပ်သည်/ဝတ်ဆินသည် (Wear/Put on)" },
          { word: "ถุงมือ", phonetic: "thǔng mʉʉ", meaningMy: "လက်အိတ် (Gloves)" },
          { word: "ตลอด", phonetic: "dtà-lòot", meaningMy: "အမြဲတမ်း (Always)" }
        ]
      }
    ]
  },
  {
    id: "lesson-4",
    number: 4,
    titleTh: "การใช้เครื่องคิดเงินและทอนเงิน",
    titleEn: "Cashier & Cash Handling",
    titleMy: "ငွေကိုင်အလုပ်နှင့် ငွေစာရင်း",
    description: "Learn vocabulary for working as a cashier, handling POS/cash registers, giving correct change, and handling cash shortages.",
    dialogues: [
      {
        id: "l4-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ใช้เครื่องคิดเงินได้ไหม",
        phonetic: "Chái khrʉ̂ang khít-ngern dâai mái?",
        burmese: "Cashier စက် သုံးတတ်လား။",
        vocabBreakdown: [
          { word: "ใช้", phonetic: "chái", meaningMy: "အသုံးပြုသည် (Use)" },
          { word: "เครื่องคิดเงิน", phonetic: "khrʉ̂ang khít-ngern", meaningMy: "ငွေကိုင်စက် (Cash register)" }
        ]
      },
      {
        id: "l4-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ใช้พื้นฐานได้ครับ",
        phonetic: "Dâai khráp. Chái phʉ́ʉn-thǎan dâai khráp.",
        burmese: "သုံးတတ်ပါတယ်။ အခြေခံအသုံးပြုနိုင်ပါတယ်။",
        vocabBreakdown: [
          { word: "พื้นฐาน", phonetic: "phʉ́ʉn-thǎan", meaningMy: "အခြေခံ (Basic)" }
        ]
      },
      {
        id: "l4-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทอนเงินถูกไหม",
        phonetic: "Thɔɔn ngern thùuk mái?",
        burmese: "အမ်းငွေ မှန်မှန်ပေးနိုင်လား။",
        vocabBreakdown: [
          { word: "ทอนเงิน", phonetic: "thɔɔn ngern", meaningMy: "အမ်းငွေပြန်ပေးသည် (Give change)" },
          { word: "ถูก", phonetic: "thùuk", meaningMy: "မှันကန်သော (Correct)" }
        ]
      },
      {
        id: "l4-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมตรวจสอบทุกครั้งครับ",
        phonetic: "Dâai khráp. Phǒm dtruat-sɔ̀ɔp thúk khráng khráp.",
        burmese: "ရပါတယ်။ အမြဲတမ်း စစ်ဆေးလေ့ရှိပါတယ်။",
        vocabBreakdown: [
          { word: "ตรวจสอบ", phonetic: "dtruat-sɔ̀ɔp", meaningMy: "စစ်ဆေးသည် (Verify/Check)" },
          { word: "ทุกครั้ง", phonetic: "thúk khráng", meaningMy: "အမြဲတမ်း/အချိန်တိုင်း (Every time)" }
        ]
      },
      {
        id: "l4-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ถ้าเงินขาดจะทำอย่างไร",
        phonetic: "Thâa ngern khàat jà tham yàang-rai?",
        burmese: "ငွေလိုနေရင် (ငွေမကိုက်ရင်) ဘာလုပ်မလဲ။",
        vocabBreakdown: [
          { word: "ถ้า", phonetic: "thâa", meaningMy: "လျှင် (If)" },
          { word: "เงินขาด", phonetic: "ngern khàat", meaningMy: "ငွေလိုခြင်း/ငွေမကိုက်ခြင်း (Shortage of cash)" },
          { word: "จะทำอย่างไร", phonetic: "jam yàang-rai", meaningMy: "ဘယ်လိုလုပ်မလဲ (How to do)" }
        ]
      },
      {
        id: "l4-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "แจ้งหัวหน้าทันทีครับ",
        phonetic: "Jâeng hǔa-nâa than-thee khráp.",
        burmese: "ခေါင်းဆောင်ကို ချက်ချင်း အကြောင်းကြားပါမယ်။",
        vocabBreakdown: [
          { word: "แจ้ง", phonetic: "jâeng", meaningMy: "အသိပေးသည် (Inform)" },
          { word: "หัวหน้า", phonetic: "hǔa-nâa", meaningMy: "ခေါင်းဆောင် (Supervisor)" },
          { word: "ทันที", phonetic: "than-thee", meaningMy: "ချက်ချင်း (Immediately)" }
        ]
      }
    ]
  },
  {
    id: "lesson-5",
    number: 5,
    titleTh: "การชงกาแฟและใช้เครื่องชงกาแฟ",
    titleEn: "Barista & Coffee Making",
    titleMy: "ကော်ဖီဖျော်စပ်ခြင်း",
    description: "Learn vocabulary related to brewing coffee, using professional coffee machines, and working in cafe/beverage counters.",
    dialogues: [
      {
        id: "l5-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "เคยชงกาแฟไหม",
        phonetic: "Khoei chong gaa-fɛɛ mái?",
        burmese: "ကော်ဖီဖျော်ဖူးလား။",
        vocabBreakdown: [
          { word: "เคย", phonetic: "khoei", meaningMy: "ဖူးသည် (Used to)" },
          { word: "ชง", phonetic: "chong", meaningMy: "ဖျော်စပ်သည် (Brew/Make)" },
          { word: "กาแฟ", phonetic: "gaa-fɛɛ", meaningMy: "ကော်ဖီ (Coffee)" }
        ]
      },
      {
        id: "l5-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "เคยครับ",
        phonetic: "Khoei khráp.",
        burmese: "ဖျော်ဖူးပါတယ်။",
        vocabBreakdown: [
          { word: "เคย", phonetic: "khoei", meaningMy: "ဖူးသည် (Used to)" }
        ]
      },
      {
        id: "l5-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ใช้เครื่องชงกาแฟได้ไหม",
        phonetic: "Chái khrʉ̂ang chong gaa-fɛɛ dâai mái?",
        burmese: "ကော်ဖီဖျော်စက် သုံးတတ်လား။",
        vocabBreakdown: [
          { word: "ใช้", phonetic: "chái", meaningMy: "အသုံးပြုသည် (Use)" },
          { word: "เครื่องชงกาแฟ", phonetic: "khrʉ̂ang chong gaa-fɛɛ", meaningMy: "ကော်ဖီဖျော်စက် (Coffee machine)" }
        ]
      },
      {
        id: "l5-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      }
    ]
  },
  {
    id: "lesson-6",
    number: 6,
    titleTh: "การบริการลูกค้าและการทำงานในร้าน",
    titleEn: "Customer Service & Operations",
    titleMy: "ဧည့်ဝတ်ပြုမှုနှင့် စားသောက်ဆိုင် လုပ်ငန်းစဉ်များ",
    description: "Learn how to express friendly attitude to customers, handle busy restaurant rush hours, memorize menus, and manage weekend schedules.",
    dialogues: [
      {
        id: "l6-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ยิ้มแย้มกับลูกค้าได้ไหม",
        phonetic: "Yím-yáem gàp lûuk-kháa dâai mái?",
        burmese: "Customer ကို ပြုံးပြနိုင်လား။",
        vocabBreakdown: [
          { word: "ยิ้มแย้ม", phonetic: "yím-yáem", meaningMy: "ပြုံးပြုံးရွှင်ရွှင်ရှိသည် (Friendly/Smiling)" },
          { word: "กับ", phonetic: "gàp", meaningMy: "နှင့်/အား (With/To)" },
          { word: "ลูกค้า", phonetic: "lûuk-kháa", meaningMy: "ဝယ်သူ/ဧည့်သည် (Customer)" }
        ]
      },
      {
        id: "l6-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      },
      {
        id: "l6-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ถ้าร้านยุ่งจะทำอย่างไร",
        phonetic: "Thâa ráan yûng jà tham yàang-rai?",
        burmese: "ဆိုင်အရမ်း အလုပ်များရင် ဘာလုပ်မလဲ။",
        vocabBreakdown: [
          { word: "ยุ่ง", phonetic: "yûng", meaningMy: "အလုပ်များသော (Busy)" },
          { word: "ร้าน", phonetic: "ráan", meaningMy: "ဆိုင် (Store/Restaurant)" }
        ]
      },
      {
        id: "l6-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมจะทำงานให้เร็วและช่วยเพื่อนร่วมงานครับ",
        phonetic: "Phǒm jà tham-ngaan hâi reo læ chûai phʉ̂an rûam-ngaan khráp.",
        burmese: "အလုပ်ကို မြန်မြန်လုပ်ပြီး လုပ်ဖော်ကိုင်ဖက်တွေကို ကူညီပါမယ်။",
        vocabBreakdown: [
          { word: "ทำงาน", phonetic: "tham-ngaan", meaningMy: "အလုပ်လုပ်သည် (Work)" },
          { word: "ให้เร็ว", phonetic: "hâi reo", meaningMy: "မြန်မြန်ဆန်ဆန် (Fast/Quickly)" },
          { word: "ช่วย", phonetic: "chûai", meaningMy: "ကူညီသည် (Help)" },
          { word: "เพื่อนร่วมงาน", phonetic: "phʉ̂an rûam-ngaan", meaningMy: "လုပ်ဖော်ကိုင်ဖက် (Coworkers)" }
        ]
      },
      {
        id: "l6-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "รับคำสั่งลูกค้าได้ไหม",
        phonetic: "Ráp kham-sàng lûuk-kháa dâai mái?",
        burmese: "Customer အော်ဒါယူနိုင်လား။",
        vocabBreakdown: [
          { word: "รับ", phonetic: "ráp", meaningMy: "လက်ခံသည် (Receive/Take)" },
          { word: "คำสั่ง", phonetic: "kham-sàng", meaningMy: "အမိန့်/အော်ဒါ (Order)" }
        ]
      },
      {
        id: "l6-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      },
      {
        id: "l6-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "จำเมนูอาหารได้ไหม",
        phonetic: "Jam menu aa-hǎan dâai mái?",
        burmese: "Menu မှတ်နိုင်လား။",
        vocabBreakdown: [
          { word: "จำ", phonetic: "jam", meaningMy: "မှတ်မိသည် (Remember/Memorize)" },
          { word: "เมนูอาหาร", phonetic: "menu aa-hǎan", meaningMy: "ဟင်းလျာမီနူး (Food menu)" }
        ]
      },
      {
        id: "l6-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมเรียนรู้ได้เร็วครับ",
        phonetic: "Dâai khráp. Phǒm rian-rúu dâai reo khráp.",
        burmese: "ရပါတယ်။ ကျွန်တော် မြန်မြန် သင်ယူနိုင်ပါတယ်။",
        vocabBreakdown: [
          { word: "เรียนรู้", phonetic: "rian-rúu", meaningMy: "သင်ယူသည် (Learn)" },
          { word: "เร็ว", phonetic: "reo", meaningMy: "မြန်မြန် (Fast)" }
        ]
      },
      {
        id: "l6-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำงานวันหยุดได้ไหม",
        phonetic: "Tham-ngaan wan-yùt dâai mái?",
        burmese: "ပိတ်ရက် လုပ်နိုင်လား။",
        vocabBreakdown: [
          { word: "วันหยุด", phonetic: "wan-yùt", meaningMy: "ပိတ်ရက်/အားလပ်ရက် (Holiday/Day off)" }
        ]
      },
      {
        id: "l6-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ",
        phonetic: "Dâai khráp.",
        burmese: "ရပါတယ်။",
        vocabBreakdown: [
          { word: "ได้", phonetic: "dâai", meaningMy: "ရသည် (Can)" }
        ]
      }
    ]
  },
  {
    id: "lesson-7",
    number: 7,
    titleTh: "การทำงานร่วมกันและคำถามส่งท้าย",
    titleEn: "Teamwork & Interview Wrap-up",
    titleMy: "အဖွဲ့လိုက်လုပ်ဆောင်ခြင်းနှင့် စိတ်နေသဘောထား",
    description: "Learn how to answer final questions about learning new tasks, coworker compatibility, start dates, and asking the employer questions.",
    dialogues: [
      {
        id: "l7-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "พร้อมเรียนรู้งานใหม่ไหม",
        phonetic: "Phrɔ́ɔm rian-rúu ngaan mài mái?",
        burmese: "အလုပ်အသစ် သင်ယူဖို့ အဆင်သင့်လား။",
        vocabBreakdown: [
          { word: "พร้อม", phonetic: "phrɔ́ɔm", meaningMy: "အဆင်သင့်ဖြစ်သော (Ready)" },
          { word: "งานใหม่", phonetic: "ngaan mài", meaningMy: "အလုပ်သစ် (New work)" }
        ]
      },
      {
        id: "l7-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "พร้อมครับ",
        phonetic: "Phrɔ́ɔm khráp.",
        burmese: "အဆင်သင့်ပါ။",
        vocabBreakdown: [
          { word: "พร้อม", phonetic: "phrɔ́ɔm", meaningMy: "အဆင်သင့် (Ready)" }
        ]
      },
      {
        id: "l7-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "มีปัญหากับเพื่อนร่วมงานไหม",
        phonetic: "Mii bpan-hǎa gàp phʉ̂an rûam-ngaan mái?",
        burmese: "လုပ်ဖော်ကိုင်ဖက်တွေနဲ့ ပြဿနာရှိလား။",
        vocabBreakdown: [
          { word: "มีปัญหา", phonetic: "mii bpan-hǎa", meaningMy: "ပြဿနာရှိသည် (Have a problem)" },
          { word: "เพื่อนร่วมงาน", phonetic: "phʉ̂an rûam-ngaan", meaningMy: "လုပ်ဖော်ကိုင်ဖက် (Coworkers)" }
        ]
      },
      {
        id: "l7-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ไม่มีครับ ผมทำงานร่วมกับทุกคนได้ครับ",
        phonetic: "Mâi-mii khráp. Phǒm tham-ngaan rûam gàp thúk khon dâai khráp.",
        burmese: "မရှိပါဘူး။ ကျွန်တော် လူတိုင်းနဲ့ အတူတူ ပူးပေါင်းလုပ်ဆောင်နိုင်ပါတယ်။",
        vocabBreakdown: [
          { word: "ร่วมกับ", phonetic: "rûam gàp", meaningMy: "ပူးပေါင်းလုပ်ဆောင်သည် (Together with)" },
          { word: "ทุกคน", phonetic: "thúk khon", meaningMy: "လူတိုင်း (Everyone)" }
        ]
      },
      {
        id: "l7-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "พร้อมเริ่มงานเมื่อไหร่",
        phonetic: "Phrɔ́ɔm rʉ̂am-ngaan mʉ̂a-rài?",
        burmese: "ဘယ်တော့ စနိုင်မလဲ။",
        vocabBreakdown: [
          { word: "เมื่อไหร่", phonetic: "mʉ̂a-rài", meaningMy: "ဘယ်တော့လဲ (When)" }
        ]
      },
      {
        id: "l7-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "พร้อมเริ่มงานทันทีครับ",
        phonetic: "Phrɔ́ɔm rʉ̂am-ngaan than-thee khráp.",
        burmese: "ချက်ချင်း စတင်လုပ်ကိုင်နိုင်ပါတယ်။",
        vocabBreakdown: [
          { word: "เริ่มงาน", phonetic: "rʉ̂am-ngaan", meaningMy: "အလုပ်စသည် (Start work)" },
          { word: "ทันที", phonetic: "than-thee", meaningMy: "ချက်ချင်း (Immediately)" }
        ]
      },
      {
        id: "l7-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำไมบริษัทต้องรับคุณ",
        phonetic: "Tham-mai bɔɔ-rí-sàt tɔ̂ng ráp khun?",
        burmese: "ဘာကြောင့် ခန့်သင့်တာလဲ။",
        vocabBreakdown: [
          { word: "บริษัท", phonetic: "bɔɔ-rí-sàt", meaningMy: "ကုမ္ပဏီ (Company)" },
          { word: "ต้อง", phonetic: "tɔ̂ng", meaningMy: "ရမည် (Must)" }
        ]
      },
      {
        id: "l7-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "เพราะผมขยัน เรียนรู้งานเร็ว และรักงานบริการครับ",
        phonetic: "Phrɔ́ phǒm khà-yǎn, rian-rúu ngaan reo, læ rák ngaan bɔɔ-rí-gaan khráp.",
        burmese: "ကျွန်တော်က ဝီရိယရှိပြီး အလုပ်သင်မြန်သလို ဝန်ဆောင်မှုအလုပ်ကိုလည်း မြတ်နိုးလို့ပါ။",
        vocabBreakdown: [
          { word: "ขยัน", phonetic: "khà-yǎn", meaningMy: "ဝီရိယရှိသော (Diligent/Hardworking)" },
          { word: "รัก", phonetic: "rák", meaningMy: "ချစ်မြတ်နိုးသည် (Love)" }
        ]
      },
      {
        id: "l7-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "มีคำถามอะไรไหม",
        phonetic: "Mii kham-thǎam à-rai mái?",
        burmese: "မေးခွန်းရှိလား။",
        vocabBreakdown: [
          { word: "คำถาม", phonetic: "kham-thǎam", meaningMy: "မေးခွန်း (Question)" }
        ]
      },
      {
        id: "l7-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "อยากทราบเรื่องโอที สวัสดิการ และวันหยุดครับ",
        phonetic: "Yàak sâap rʉ̂ang OT, sà-wàt-dee-gaan, læ wan-yùt khráp.",
        burmese: "OT အချိန်ပို၊ ဝန်ထမ်းအကျိုးခံစားခွင့်နဲ့ ပိတ်ရက်တွေအကြောင်း သိချင်ပါတယ်။",
        vocabBreakdown: [
          { word: "ทราบ", phonetic: "sâap", meaningMy: "သိရှိသည် (Know/Find out)" },
          { word: "สวัสดิการ", phonetic: "sà-wàt-dee-gaan", meaningMy: "ဝန်ထမ်းအကျိုးခံစားခွင့် (Welfare/Benefits)" }
        ]
      }
    ]
  }
];

export const FACTORY_LESSONS: Lesson[] = [
  {
    id: "factory-lesson-1",
    number: 1,
    titleTh: "การแนะนำตัวและข้อมูลเบื้องต้น",
    titleEn: "Introduction & Basic Details",
    titleMy: "မိတ်ဆက်ခြင်းနှင့် အခြေခံအချက်အလက်များ",
    description: "Learn how to introduce yourself, state your name, age, origin, and factory experience.",
    dialogues: [
      {
        id: "fl1-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "สวัสดีครับ ช่วยแนะนำตัวหน่อยครับ",
        phonetic: "Sa-wat-dee khráp, chûai náe-nam tua nòi khráp",
        burmese: "မင်္ဂလာပါ။ ကိုယ့်ကိုယ်ကိုယ် မိတ်ဆက်ပေးပါ။"
      },
      {
        id: "fl1-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "สวัสดีครับ ผมชื่ออ่องอ่อง อายุ 28 ปี มาจากประเทศเมียนมา เคยทำงานโรงงานมา 3 ปี เป็นคนขยัน รับผิดชอบ และตรงต่อเวลาครับ",
        phonetic: "Sa-wat-dee khráp. Phǒm chʉ̂ʉ Aung Aung, aa-yúu yîi-sìp-bpàet bpii. Maa jàak bprà-thêet Myanmar. Khoei tham-ngaan rong-ngaan maa sǎam bpii. Pen khon khà-yǎn, ráp-phìt-chɔ̂ɔp, læ trông tòo wee-laa khráp.",
        burmese: "မင်္ဂလာပါ။ ကျွန်တော့်နာမည် အောင်အောင်ပါ။ အသက် ၂၈ နှစ်ပါ။ မြန်မာနိုင်ငံကလာပါတယ်။ စက်ရုံမှာ ၃ နှစ်အလုပ်လုပ်ဖူးပါတယ်။ အလုပ်ကြိုးစားပြီး တာဝန်ယူတတ်ကာ အချိန်မှန်ပါတယ်။"
      },
      {
        id: "fl1-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "อายุเท่าไหร่",
        phonetic: "Aa-yúu thâo-rài?",
        burmese: "အသက်ဘယ်လောက်ရှိလဲ။"
      },
      {
        id: "fl1-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมอายุ 28 ปีครับ",
        phonetic: "Phǒm aa-yúu yîi-sìp-bpàet bpii khráp.",
        burmese: "ကျွန်တော် အသက် ၂၈ နှစ်ပါ။"
      },
      {
        id: "fl1-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "มาจากไหน",
        phonetic: "Maa jàak nǎi?",
        burmese: "ဘယ်ကလာတာလဲ။"
      },
      {
        id: "fl1-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมมาจากประเทศเมียนมาครับ",
        phonetic: "Phǒm maa jàak bprà-thêet Myanmar khráp.",
        burmese: "ကျွန်တော် မြန်မာနိုင်ငံကလာပါတယ်။"
      }
    ]
  },
  {
    id: "factory-lesson-2",
    number: 2,
    titleTh: "ประสบการณ์และหน้าที่รับผิดชอบ",
    titleEn: "Experience & Responsibilities",
    titleMy: "အတွေ့အကြုံနှင့် တာဝန်ယူမှုများ",
    description: "Discuss your past factory experience, jobs on the factory floor, and roles.",
    dialogues: [
      {
        id: "fl2-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "เคยทำงานโรงงานมาก่อนหรือเปล่า",
        phonetic: "Khoei tham-ngaan rong-ngaan maa kɔ̀ɔn rʉ̌ʉ bplào?",
        burmese: "စက်ရုံမှာ အလုပ်လုပ်ဖူးလား။"
      },
      {
        id: "fl2-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "เคยครับ ผมมีประสบการณ์ทำงานโรงงานประมาณ 3 ปีครับ",
        phonetic: "Khoei khráp. Phǒm mii bprà-sòp-gaan tham-ngaan rong-ngaan bprà-maan sǎam bpii khráp.",
        burmese: "ဟုတ်ပါတယ်။ စက်ရုံအတွေ့အကြုံ ၃ နှစ်ရှိပါတယ်။"
      },
      {
        id: "fl2-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျา",
        thai: "ทำตำแหน่งอะไร",
        phonetic: "Tham tam-nàeng à-rai?",
        burmese: "ဘာရာထူးလုပ်ခဲ့လဲ။"
      },
      {
        id: "fl2-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมทำตำแหน่งฝ่ายผลิตครับ",
        phonetic: "Phǒm tham tam-nàeng fàai phà-lìt khráp.",
        burmese: "ကျွန်တော် Production အပိုင်းမှာ လုပ်ခဲ့ပါတယ်။"
      },
      {
        id: "fl2-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "หน้าที่รับผิดชอบคืออะไร",
        phonetic: "Nâa-thîi ráp-phìt-chɔ̂ɔp khʉʉ à-rai?",
        burmese: "ဘာတာဝန်ယူခဲ့လဲ။"
      },
      {
        id: "fl2-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมประกอบสินค้า ตรวจสอบคุณภาพ แพ็กสินค้า และทำความสะอาดพื้นที่ทำงานครับ",
        phonetic: "Phǒm bprà-kɔ̀ɔp sǐn-kháa, trùat-sɔ̀ɔp khun-ná-phâap, phɛ́k sǐn-kháa, læ tham khwaam-sà-àat phʉ́ʉn-thîi tham-ngaan khráp.",
        burmese: "ပစ္စည်းတပ်ဆင်ခြင်း၊ အရည်အသွေးစစ်ဆေးခြင်း၊ ထုပ်ပိုးခြင်းနှင့် အလုပ်နေရာသန့်ရှင်းရေးလုပ်ပါတယ်။"
      }
    ]
  },
  {
    id: "factory-lesson-3",
    number: 3,
    titleTh: "แรงจูงใจและความตั้งใจทำงาน",
    titleEn: "Motivation & Job Commitment",
    titleMy: "အလုပ်အပေါ် စိတ်အားထက်သန်မှု",
    description: "Understand why you left your previous job, why you want this job, and your commitment.",
    dialogues: [
      {
        id: "fl3-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำไมถึงลาออกจากงานเก่า",
        phonetic: "Tham-mai thʉ̌ng laa òɔk jàak ngaan gào?",
        burmese: "အရင်အလုပ်က ဘာကြောင့်ထွက်တာလဲ။"
      },
      {
        id: "fl3-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "สัญญาจ้างสิ้นสุดครับ และอยากหางานที่มั่นคงกว่าครับ",
        phonetic: "Sǎn-yaa jâang sîn-sùt khráp, læ yàak hǎa ngaan thîi mân-khong gwàa khráp.",
        burmese: "စာချုပ်ပြီးသွားလို့ပါ။ ပိုတည်ငြိမ်တဲ့အလုပ်ရှာချင်လို့ပါ။"
      },
      {
        id: "fl3-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำไมถึงอยากทำงานที่นี่",
        phonetic: "Tham-mai thʉ̌ng yàak tham-ngaan thîi nîi?",
        burmese: "ဒီကုမ္ပဏီမှာ ဘာကြောင့်အလုပ်လုပ်ချင်တာလဲ။"
      },
      {
        id: "fl3-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "เพราะบริษัทมั่นคง มีสวัสดิการดีและผมอยากทำงานระยะยาวครับ",
        phonetic: "Phrɔ́ bɔɔ-rí-sàt mân-khong, mii sà-wàt-dì-gaan dii, læ phǒm yàak tham-ngaan rá-yá-yaao khráp.",
        burmese: "ကုမ္ပဏီတည်ငြိမ်ပြီး အကျိုးခံစားခွင့်ကောင်းတာကြောင့် ရေရှည်အလုပ်လုပ်ချင်ပါတယ်။"
      },
      {
        id: "fl3-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "คุณคิดว่าตัวเองเป็นคนแบบไหน",
        phonetic: "Khun khít wâa tua-eeng pen khon bàep nǎi?",
        burmese: "ကိုယ့်ကိုယ်ကိုယ် ဘယ်လိုလူလို့ထင်လဲ။"
      },
      {
        id: "fl3-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมเป็นคนขยัน อดทน และรับผิดชอบครับ",
        phonetic: "Phǒm pen khon khà-yǎn, òt-thon, læ ráp-phìt-chɔ̂ɔp khráp.",
        burmese: "အလုပ်ကြိုးစား၊ သည်းခံပြီး တာဝန်ယူတတ်တဲ့လူပါ။"
      },
      {
        id: "fl3-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ถ้ามีโอกาส จะทำงานกับบริษัทนานไหม",
        phonetic: "Thâa mii oo-gàat jà tham-ngaan gàp bɔɔ-rí-sàt naan mái?",
        burmese: "အခွင့်အရေးရရင် ကုမ္ပဏီမှာ ရေရှည်လုပ်မလား။"
      },
      {
        id: "fl3-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ครับ ผมอยากทำงานกับบริษัทระยะยาวครับ",
        phonetic: "Khráp. Phǒm yàak tham-ngaan rá-yá-yaao khráp.",
        burmese: "ဟုတ်ပါတယ်။ ရေရှည်အလုပ်လုပ်ချင်ပါတယ်။"
      }
    ]
  },
  {
    id: "factory-lesson-4",
    number: 4,
    titleTh: "การเข้ากะและการทำงานล่วงเวลา",
    titleEn: "Shift Availability & Flexibility",
    titleMy: "အလှည့်ကျဆိုင်းဆင်းခြင်းနှင့် အချိန်ပိုဆင်းခြင်း",
    description: "Learn how to answer questions about overtime (OT), night shifts, weekend shifts, and department rotation.",
    dialogues: [
      {
        id: "fl4-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำโอทีได้ไหม",
        phonetic: "Tham OT dâai mái?",
        burmese: "OT ဆင်းနိုင်လား။"
      },
      {
        id: "fl4-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมสามารถทำโอทีได้ครับ",
        phonetic: "Dâai khráp. Phǒm sǎa-mâat tham OT dâai khráp.",
        burmese: "ရပါတယ်။ OT ဆင်းနိုင်ပါတယ်။"
      },
      {
        id: "fl4-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "เข้ากะกลางคืนได้ไหม",
        phonetic: "Khâo gà glaang-khʉʉn dâai mái?",
        burmese: "ညဆိုင်းဆင်းနိုင်လား။"
      },
      {
        id: "fl4-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ทำได้ทั้งกะกลางวันและกะกลางคืนครับ",
        phonetic: "Dâai khráp. Tham dâai tháng gà glaang-wan læ gà glaang-khʉʉn khráp.",
        burmese: "နေ့ဆိုင်းရော ညဆိုင်းရော လုပ်နိုင်ပါတယ်။"
      },
      {
        id: "fl4-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำงานวันเสาร์อาทิตย์ได้ไหม",
        phonetic: "Tham-ngaan wan-sǎo aa-thít dâai mái?",
        burmese: "စနေ၊ တနင်္ဂနွေ အလုပ်လုပ်နိုင်မလား။"
      },
      {
        id: "fl4-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ถ้าบริษัทต้องการครับ",
        phonetic: "Dâai khráp. Phǒm tham-ngaan wan-sǎo aa-thít dâai khráp thâa bɔɔ-rí-sàt tɔ̂ng-kaan khráp.",
        burmese: "ရပါတယ်။ ကုမ္ပဏီလိုအပ်ရင် လုပ်နိုင်ပါတယ်။"
      },
      {
        id: "fl4-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ถ้าต้องย้ายแผนกทำได้ไหม",
        phonetic: "Thâa tɔ̂ng yáai phà-nɛ̀ɛk tham dâai mái?",
        burmese: "ဌာနပြောင်းရရင် လုပ်နိုင်မလား။"
      },
      {
        id: "fl4-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ถ้าบริษัทเห็นสมควรครับ",
        phonetic: "Dâai khráp. Thâa bɔɔ-rí-sàt hěn sǒm-khuan khráp.",
        burmese: "ရပါတယ်။ ကုမ္ပဏီလိုအပ်ရင် လုပ်နိုင်ပါတယ်။"
      },
      {
        id: "fl4-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "พร้อมทำงานทันทีไหม",
        phonetic: "Phrɔ́ɔm tham-ngaan than-thii mái?",
        burmese: "ချက်ချင်းအလုပ်စနိုင်မလား။"
      },
      {
        id: "fl4-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "พร้อมครับ เริ่มงานได้ทันทีครับ",
        phonetic: "Phrɔ́ɔm khráp. Rə̂əm ngaan dâai than-thii khráp.",
        burmese: "ရပါတယ်။ ချက်ချင်းစနိုင်ပါတယ်။"
      }
    ]
  },
  {
    id: "factory-lesson-5",
    number: 5,
    titleTh: "การทำงานเป็นทีม ความปลอดภัย และการแก้ปัญหา",
    titleEn: "Teamwork, Safety & Problem Solving",
    titleMy: "အဖွဲ့လိုက်လုပ်ဆောင်ခြင်း၊ ဘေးကင်းရေးနှင့် ပြဿနာဖြေရှင်းခြင်း",
    description: "Learn how to discuss teamwork skills, safety adherence, handling workplace mistakes, and following supervisor's instructions.",
    dialogues: [
      {
        id: "fl5-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำงานเป็นทีมได้ไหม",
        phonetic: "Tham-ngaan pen thiim dâai mái?",
        burmese: "အဖွဲ့လိုက်အလုပ်လုပ်နိုင်သလား။"
      },
      {
        id: "fl5-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมทำงานร่วมกับเพื่อนร่วมงานได้ดีครับ",
        phonetic: "Dâai khráp. Phǒm tham-ngaan rûam gàp phʉ̂an rûam-ngaan dâai dii khráp.",
        burmese: "ရပါတယ်။ လုပ်ဖော်ကိုင်ဖက်တွေနဲ့ ကောင်းကောင်းပူးပေါင်းလုပ်နိုင်ပါတယ်။"
      },
      {
        id: "fl5-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ทำงานภายใต้แรงกดดันได้ไหม",
        phonetic: "Tham-ngaan phaai-tâi rɛɛng-gòt-dan dâai mái?",
        burmese: "ဖိအားများတဲ့အလုပ်ကို လုပ်နိုင်မလား။"
      },
      {
        id: "fl5-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมตั้งใจทำงานและแก้ปัญหาได้ครับ",
        phonetic: "Dâai khráp. Phǒm tâng-jai tham-ngaan læ gâe bpan-hǎa dâai khráp.",
        burmese: "ရပါတယ်။ စိတ်အေးအေးထားပြီး အလုပ်ကို အာရုံစိုက်လုပ်ပါတယ်။"
      },
      {
        id: "fl5-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ถ้าหัวหน้าสอนงานใหม่ จะทำอย่างไร",
        phonetic: "Thâa hǔa-nâa sɔ̌ɔn ngaan mài jà tham yàang-rai?",
        burmese: "အလုပ်အသစ်သင်ပေးရင် ဘယ်လိုလုပ်မလဲ။"
      },
      {
        id: "fl5-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมตั้งใจฟังและเรียนรู้ให้เร็วที่สุดครับ",
        phonetic: "Phǒm tâng-jai fang læ rian-rúu hâi reo thîi-sùt khráp.",
        burmese: "သေချာနားထောင်ပြီး မြန်မြန်သင်ယူပါမယ်။"
      },
      {
        id: "fl5-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ถ้าทำงานผิดจะทำอย่างไร",
        phonetic: "Thâa tham-ngaan phìt jà tham yàang-rai?",
        burmese: "အလုပ်မှားရင် ဘာလုပ်မလဲ။"
      },
      {
        id: "fl5-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมจะแจ้งหัวหน้าทันทีและแก้ไขตามขั้นตอนครับ",
        phonetic: "Phǒm jà jâeng hǔa-nâa than-thii læ gâe-khǎi taam khán-dtɔɔn khráp.",
        burmese: "ခေါင်းဆောင်ကို ချက်ချင်းပြောပြီး စည်းမျဉ်းအတိုင်း ပြင်ဆင်ပါမယ်။"
      },
      {
        id: "fl5-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "รู้จักกฎความปลอดภัยไหม",
        phonetic: "Rúu-jàk gòt khwaam-bplɔ̀ɔt-phai mái?",
        burmese: "လုံခြုံရေးစည်းမျဉ်းတွေ သိလား။"
      },
      {
        id: "fl5-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "รู้ครับ และปฏิบัติตามทุกครั้งครับ",
        phonetic: "Rúu khráp, læ bpa-dtǐ-bàt taam thúk khráng khráp.",
        burmese: "သိပါတယ်။ အမြဲလိုက်နာပါတယ်။"
      }
    ]
  },
  {
    id: "factory-lesson-6",
    number: 6,
    titleTh: "กฎระเบียบ เครื่องจักร และทักษะภาษา",
    titleEn: "Regulations, Machinery & Language",
    titleMy: "စည်းကမ်းများ၊ စက်ကိရိယာများနှင့် ဘာသာစကား",
    description: "Discuss personal protective equipment (PPE), attendance reliability, machine handling, health habits, and Thai language skills.",
    dialogues: [
      {
        id: "fl6-d1",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ใส่อุปกรณ์ป้องกันได้ไหม",
        phonetic: "Sài ù-bpà-gɔɔn bpɔ̂ng-gan dâai mái?",
        burmese: "PPE ဝတ်နိုင်သလား။"
      },
      {
        id: "fl6-d2",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมใส่ทุกครั้งตามกฎบริษัทครับ",
        phonetic: "Dâai khráp. Phǒm sài thúk khráng taam gòt bɔɔ-rí-sàt khráp.",
        burmese: "ရပါတယ်။ ကုမ္ပဏီစည်းမျဉ်းအတိုင်း အမြဲဝတ်ပါတယ်။"
      },
      {
        id: "fl6-d3",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ขาดงานบ่อยไหม",
        phonetic: "Khàat-ngaan bɔ̀i mái?",
        burmese: "အလုပ်ပျက်တာ များလား။"
      },
      {
        id: "fl6-d4",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ไม่ครับ ผมมาทำงานตรงเวลาครับ",
        phonetic: "Mâi khráp. Phǒm maa tham-ngaan dtring wee-laa khráp.",
        burmese: "မများပါဘူး။ အမြဲအချိန်မှန်လာပါတယ်။"
      },
      {
        id: "fl6-d5",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "มาสายบ่อยไหม",
        phonetic: "Maa sǎai bɔ̀i mái?",
        burmese: "နောက်ကျတာ များလား။"
      },
      {
        id: "fl6-d6",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ไม่ครับ ผมตรงต่อเวลาครับ",
        phonetic: "Mâi khráp. Phǒm dtring dtɔ̀ɔ wee-laa khráp.",
        burmese: "မများပါဘူး။ အချိန်မှန်ပါတယ်။"
      },
      {
        id: "fl6-d7",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ใช้เครื่องจักรอะไรได้บ้าง",
        phonetic: "Chái khrʉ̂ang-jàk à-rai dâai bâang?",
        burmese: "ဘယ်စက်တွေ အသုံးပြုတတ်လဲ။"
      },
      {
        id: "fl6-d8",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ผมใช้เครื่องแพ็กสินค้าและเครื่องประกอบชิ้นงานได้ครับ",
        phonetic: "Phǒm chái khrʉ̂ang phɛ́k sǐn-kháa læ khrʉ̂ang bprà-gɔ̀ɔp chín-ngaan dâai khráp.",
        burmese: "ထုပ်ပိုးစက်နဲ့ တပ်ဆင်စက်ကို သုံးတတ်ပါတယ်။"
      },
      {
        id: "fl6-d9",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "อ่านตัวเลขภาษาไทยได้ไหม",
        phonetic: "Àan tua-lêek phaa-sǎa Thai dâai mái?",
        burmese: "ထိုင်းဂဏန်းဖတ်နိုင်လား။"
      },
      {
        id: "fl6-d10",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ อ่านตัวเลขพื้นฐานได้ครับ",
        phonetic: "Dâai khráp. Àan tua-lêek phʉ́ʉn-tǎan dâai khráp.",
        burmese: "အခြေခံဂဏန်းတွေ ဖတ်နိုင်ပါတယ်။"
      },
      {
        id: "fl6-d11",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "เขียนชื่อภาษาไทยได้ไหม",
        phonetic: "Khǐan chʉ̂ʉ phaa-sǎa Thai dâai mái?",
        burmese: "ထိုင်းလို နာမည်ရေးနိုင်လား။"
      },
      {
        id: "fl6-d12",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ได้ครับ ผมเขียนชื่อได้ครับ",
        phonetic: "Dâai khráp. Phǒm khǐan chʉ̂ʉ dâai khráp.",
        burmese: "ရေးနိုင်ပါတယ်။"
      },
      {
        id: "fl6-d13",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "มีโรคประจำตัวไหม",
        phonetic: "Mii rôok bprà-jam-tua mái?",
        burmese: "ရောဂါအခံရှိလား။"
      },
      {
        id: "fl6-d14",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ไม่มีครับ สุขภาพแข็งแรงครับ",
        phonetic: "Mâi-mii khráp. Sùk-khǎ-phâap kʰɛ̌ŋ-rɛɛŋ khráp.",
        burmese: "မရှိပါဘူး။ ကျန်းမာပါတယ်။"
      },
      {
        id: "fl6-d15",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "สูบบุหรี่ไหม",
        phonetic: "Sùup bù-rìi mái?",
        burmese: "ဆေးလိပ်သောက်လား။"
      },
      {
        id: "fl6-d16",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ไม่ครับ",
        phonetic: "Mâi khráp.",
        burmese: "မသောက်ပါဘူး။"
      },
      {
        id: "fl6-d17",
        speaker: "Phu-jat-kan",
        speakerLabelTh: "ผู้จัดการ (Phu-jat-kan)",
        speakerLabelEn: "Manager",
        speakerLabelMy: "မန်နေဂျာ",
        thai: "ดื่มเหล้าไหม",
        phonetic: "Dʉ̀ʉm lâo mái?",
        burmese: "အရက်သောက်လား။"
      },
      {
        id: "fl6-d18",
        speaker: "Aung-Aung",
        speakerLabelTh: "อ่องอ่อง (Aung Aung)",
        speakerLabelEn: "Aung Aung",
        speakerLabelMy: "အောင်အောင်",
        thai: "ไม่ครับ",
        phonetic: "Mâi khráp.",
        burmese: "မသောက်ပါဘူး။"
      }
    ]
  }
];

export const LESSONS: Lesson[] = [...RESTAURANT_LESSONS, ...FACTORY_LESSONS];

export const VOCABULARY: VocabItem[] = [
  // Lesson 1 Words
  {
    id: "v-sawatdee",
    word: "สวัสดี",
    phonetic: "sa-wat-dee",
    meaningMy: "မင်္ဂလာပါ",
    meaningEn: "Hello / Good day",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-krap",
    word: "ครับ",
    phonetic: "krap",
    meaningMy: "ခင်ဗျာ (ယဉ်ကျေးစွာ ပြောဆိုသည့် စကားစု)",
    meaningEn: "Polite particle (for male speakers)",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-chern-nang",
    word: "เชิญนั่ง",
    phonetic: "chern-nang",
    meaningMy: "ထိုင်ပါဦး",
    meaningEn: "Please take a seat",
    category: "Workplace Etiquette",
    lessonId: "lesson-1"
  },
  {
    id: "v-nae-nam-tua",
    word: "แนะนำตัว",
    phonetic: "nae-nam-tua",
    meaningMy: "မိတ်ဆက်ပေးပါ / ကိုယ်တိုင်မိတ်ဆက်သည်",
    meaningEn: "Introduce oneself",
    category: "Personal Details",
    lessonId: "lesson-1"
  },
  {
    id: "v-chue",
    word: "ชื่อ",
    phonetic: "chue",
    meaningMy: "နာမည်",
    meaningEn: "Name",
    category: "Personal Details",
    lessonId: "lesson-1"
  },
  {
    id: "v-khon-mianmar",
    word: "คนเมียนมา",
    phonetic: "khon mian-mar",
    meaningMy: "မြန်မာလူမျိုး",
    meaningEn: "Burmese person / Myanmar citizen",
    category: "Personal Details",
    lessonId: "lesson-1"
  },
  
  // Lesson 2 Words
  {
    id: "v-ma-jak",
    word: "มาจาก",
    phonetic: "ma-jak",
    meaningMy: "မှ လาသည်",
    meaningEn: "Come from",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-mueang",
    word: "เมือง",
    phonetic: "mueang",
    meaningMy: "မြို့",
    meaningEn: "City / Town",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-pak-yoo",
    word: "พักอยู่",
    phonetic: "pak-yoo",
    meaningMy: "တည်းခိုနေထိုင်သည်",
    meaningEn: "Stay at / Reside",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-theenai",
    word: "ที่ไหน",
    phonetic: "thee-nai",
    meaningMy: "ဘယ်နေရာလဲ",
    meaningEn: "Where",
    category: "Questions",
    lessonId: "lesson-2"
  },
  {
    id: "v-dern",
    word: "เดิน",
    phonetic: "dern",
    meaningMy: "လမ်းလျှောက်သည်",
    meaningEn: "Walk",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-mai-klai",
    word: "ไม่ไกล",
    phonetic: "mai-klai",
    meaningMy: "မဝေးပါဘူး",
    meaningEn: "Not far",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-aryu",
    word: "อายุ",
    phonetic: "ar-yu",
    meaningMy: "အသက်",
    meaningEn: "Age",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-taeng-ngan",
    word: "แต่งงาน",
    phonetic: "taeng-ngan",
    meaningMy: "အိမ်ထောင်ပြုသည် / มင်္ဂလာဆောင်သည်",
    meaningEn: "To get married",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-ma-khon-diew",
    word: "มาคนเดียว",
    phonetic: "ma khon diew",
    meaningMy: "တစ်ယောက်တည်းလာသည်",
    meaningEn: "Come alone",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-yoo-ma",
    word: "อยู่มา",
    phonetic: "yoo-ma",
    meaningMy: "နေထိုင်ခဲ့သည်မှာ (ကာล)",
    meaningEn: "Have lived for",
    category: "Personal Details",
    lessonId: "lesson-2"
  },

  // Lesson 3 Words
  {
    id: "v-ek-ka-san",
    word: "เอกสาร",
    phonetic: "ek-ka-san",
    meaningMy: "စာရွက်စာတမ်း",
    meaningEn: "Documents / Papers",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-passport",
    word: "พาสปอร์ต",
    phonetic: "pha-sa-pawtd",
    meaningMy: "နိုင်ငံကူးလက်မှတ် (ပတ်စပို့)",
    meaningEn: "Passport",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-bai-anuyat",
    word: "ใบอนุญาตทำงาน",
    phonetic: "bai-a-nu-yat tam-ngan",
    meaningMy: "အလုပ်လုပ်ခွင့်လက်မှတ် (ဝပ်ပါမစ် / အလုပ်သမားကတ်)",
    meaningEn: "Work Permit",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-yang-mai-mod-aryu",
    word: "ยังไม่หมดอายุ",
    phonetic: "yang mai mod ar-yu",
    meaningMy: "သက်တမ်းမကုန်သေးပါ",
    meaningEn: "Not yet expired",
    category: "Documents",
    lessonId: "lesson-3"
  },

  // Lesson 4 Words
  {
    id: "v-phood-thai",
    word: "พูดภาษาไทย",
    phonetic: "phood par-sar thai",
    meaningMy: "ထိုင်းစကားပြောသည်",
    meaningEn: "Speak Thai",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-fang-khaojai",
    word: "ฟังเข้าใจ",
    phonetic: "fang khao-jai",
    meaningMy: "နားထောင်ပြီးနားလည်သည်",
    meaningEn: "Understand hearing",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-cha-cha",
    word: "ช้าๆ",
    phonetic: "cha-cha",
    meaningMy: "ဖြည်းဖြည်းချင်း",
    meaningEn: "Slowly",
    category: "Daily Life",
    lessonId: "lesson-4"
  },
  {
    id: "v-phrom-rianroo",
    word: "พร้อมเรียนรู้",
    phonetic: "phrom rian-roo",
    meaningMy: "သင်ယူဖို့ အဆင်သင့်ရှိသည်",
    meaningEn: "Ready to learn",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },
  {
    id: "v-ran-arhan",
    word: "ร้านอาหาร",
    phonetic: "ran ar-han",
    meaningMy: "စားသောက်ဆိုင်",
    meaningEn: "Restaurant",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-lang-jan",
    word: "ล้างจาน",
    phonetic: "lang-jan",
    meaningMy: "ပန်းကန်ဆေးသည်",
    meaningEn: "Wash dishes",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-yok-khong",
    word: "ยกของ",
    phonetic: "yok-khong",
    meaningMy: "ပစ္စည်းမသည် / သယ်ဆောင်သည်",
    meaningEn: "Lift / carry things",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-tam-khwamsaard",
    word: "ทำความสะอาด",
    phonetic: "tam khwam sa-ard",
    meaningMy: "သန့်ရှင်းရေးလုပ်သည်",
    meaningEn: "To clean",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-mai-klua",
    word: "ไม่กลัวงานหนัก",
    phonetic: "mai klua ngan nak",
    meaningMy: "ပင်ပန်းသောအလုပ်ကိုမကြောက်ပါ",
    meaningEn: "Not afraid of hard work",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },

  // Lesson 5 Words
  {
    id: "v-rerm-ngan",
    word: "เริ่มงาน",
    phonetic: "rerm-ngan",
    meaningMy: "အလုပ်စဝင်သည်",
    meaningEn: "Start work",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-tan-thee",
    word: "ทันที",
    phonetic: "tan-thee",
    meaningMy: "ချက်ချင်း",
    meaningEn: "Immediately",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-ka",
    word: "กะ",
    phonetic: "ka",
    meaningMy: "ဆိုင်း (Shift)",
    meaningEn: "Shift (work hours)",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-sao-athit",
    word: "เสาร์-อาทิตย์",
    phonetic: "sao a-thit",
    meaningMy: "စနေ နှင့် တနင်္ဂนွေ",
    meaningEn: "Saturday and Sunday",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-mai-mee-panha",
    word: "ไม่มีปัญหา",
    phonetic: "mai mee pan-ha",
    meaningMy: "ပြဿနာမရှိပါ",
    meaningEn: "No problem",
    category: "Workplace Etiquette",
    lessonId: "lesson-5"
  },
  {
    id: "v-jaonay",
    word: "เจ้านาย",
    phonetic: "jao-nay",
    meaningMy: "သူဌေး / အလုပ်ရှင်",
    meaningEn: "Boss / Employer",
    category: "Workplace Etiquette",
    lessonId: "lesson-5"
  },

  // 10 NEW GREETINGS
  {
    id: "v-g-khothot",
    word: "ขอโทษ",
    phonetic: "kho-thot",
    meaningMy: "ဆောရီး / တောင်းပန်ပါတယ်",
    meaningEn: "Sorry / Excuse me",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-khobkhun",
    word: "ขอบคุณ",
    phonetic: "khob-khun",
    meaningMy: "ကျေးဇူးတင်ပါတယ်",
    meaningEn: "Thank you",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-sabaidee",
    word: "สบายดีไหม",
    phonetic: "sa-bai-dee mai",
    meaningMy: "နေကောင်းလား",
    meaningEn: "How are you?",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-yindee",
    word: "ยินดีที่ได้รู้จัก",
    phonetic: "yin-dee thee dai roo-jak",
    meaningMy: "တွေ့ရတာ ဝမ်းသာပါတယ်",
    meaningEn: "Nice to meet you",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-chokdee",
    word: "โชคดี",
    phonetic: "chok-dee",
    meaningMy: "ကံကောင်းပါစေ / အဆင်ပြေပါစေ",
    meaningEn: "Good luck",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-chao",
    word: "สวัสดีตอนเช้า",
    phonetic: "sa-wat-dee ton chao",
    meaningMy: "မင်္ဂလာနံနက်ခင်းပါ",
    meaningEn: "Good morning",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-bai",
    word: "สวัสดีตอนบ่าย",
    phonetic: "sa-wat-dee ton bai",
    meaningMy: "မင်္ဂလာနေ့လယ်ခင်းပါ",
    meaningEn: "Good afternoon",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-sawad",
    word: "ราตรีสวัสดิ์",
    phonetic: "ra-tree sa-wat",
    meaningMy: "ကောင်းသောညပါ",
    meaningEn: "Good night",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-wai",
    word: "ไหว้",
    phonetic: "wai",
    meaningMy: "လက်အုပ်ချี နှုတ်ဆက်ခြင်း",
    meaningEn: "Traditional Thai greeting gesture",
    category: "Greetings",
    lessonId: "lesson-1"
  },
  {
    id: "v-g-lakon",
    word: "ลาก่อน",
    phonetic: "la-kon",
    meaningMy: "သွားတော့မယ်နော် / နှုတ်ဆက်ပါတယ်",
    meaningEn: "Goodbye",
    category: "Greetings",
    lessonId: "lesson-1"
  },

  // 10 NEW WORKPLACE ETIQUETTE
  {
    id: "v-we-khoanuyat",
    word: "ขออนุญาต",
    phonetic: "kho a-nu-yat",
    meaningMy: "ခွင့်ပြုပါခင်ဗျာ",
    meaningEn: "May I / Excuse me",
    category: "Workplace Etiquette",
    lessonId: "lesson-1"
  },
  {
    id: "v-we-tangjai",
    word: "ตั้งใจทำงาน",
    phonetic: "tang-jai tam-ngan",
    meaningMy: "အလုပ်ကို စိတ်ဝင်တစားလုပ်သည်",
    meaningEn: "Work hard / Pay attention",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },
  {
    id: "v-we-masai",
    word: "มาสาย",
    phonetic: "ma sai",
    meaningMy: "နောက်ကျမှ ရောက်လာသည်",
    meaningEn: "Come late",
    category: "Workplace Etiquette",
    lessonId: "lesson-2"
  },
  {
    id: "v-we-trongwela",
    word: "มาตรงเวลา",
    phonetic: "ma trong we-la",
    meaningMy: "အချိန်မှန် ရောက်လာသည်",
    meaningEn: "Be on time",
    category: "Workplace Etiquette",
    lessonId: "lesson-2"
  },
  {
    id: "v-we-khayan",
    word: "ขยัน",
    phonetic: "kha-yan",
    meaningMy: "ဝီရိယရှိသော / ကြိုးစားသော",
    meaningEn: "Diligent / Hardworking",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },
  {
    id: "v-we-odthon",
    word: "อดทน",
    phonetic: "od-thon",
    meaningMy: "သည်းခံနိုင်သော / စိတ်ရှည်သော",
    meaningEn: "Patient / Resilient",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },
  {
    id: "v-we-suesat",
    word: "ซื่อสัตย์",
    phonetic: "sue-sat",
    meaningMy: "ရိုးသားသော",
    meaningEn: "Honest",
    category: "Workplace Etiquette",
    lessonId: "lesson-1"
  },
  {
    id: "v-we-ramatrawang",
    word: "ระมัดระวัง",
    phonetic: "ra-mat-ra-wang",
    meaningMy: "ဂရုစိုက်ပါ / သติထားပါ",
    meaningEn: "Be careful / Cautious",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },
  {
    id: "v-we-meerabiab",
    word: "มีระเบียบ",
    phonetic: "mee ra-biab",
    meaningMy: "စနစ်တကျရှိသော",
    meaningEn: "Disciplined / Organized",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },
  {
    id: "v-we-ruammue",
    word: "ร่วมมือ",
    phonetic: "ruam-mue",
    meaningMy: "ပူးပေါင်းဆောင်ရွက်သည်",
    meaningEn: "Cooperate / Collaborate",
    category: "Workplace Etiquette",
    lessonId: "lesson-5"
  },

  // 10 NEW PERSONAL DETAILS
  {
    id: "v-pd-namsakun",
    word: "นามสกุล",
    phonetic: "nam-sa-kun",
    meaningMy: "မျိုးရိုးအမည် / နောက်ဆုံးအမည်",
    meaningEn: "Surname / Last name",
    category: "Personal Details",
    lessonId: "lesson-1"
  },
  {
    id: "v-pd-ber",
    word: "เบอร์โทรศัพท์",
    phonetic: "ber tho-ra-sap",
    meaningMy: "ဖုန်းနံပါတ်",
    meaningEn: "Phone number",
    category: "Personal Details",
    lessonId: "lesson-1"
  },
  {
    id: "v-pd-wankoet",
    word: "วันเกิด",
    phonetic: "wan-koet",
    meaningMy: "မွေးနေ့",
    meaningEn: "Birthday",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-pd-phet",
    word: "เพศ",
    phonetic: "phet",
    meaningMy: "ကျား/မ လိင်",
    meaningEn: "Gender",
    category: "Personal Details",
    lessonId: "lesson-1"
  },
  {
    id: "v-pd-sathanaphap",
    word: "สถานภาพ",
    phonetic: "sa-tha-na-phap",
    meaningMy: "လူမှုရေးအခြေအနေ",
    meaningEn: "Marital status",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-pd-sot",
    word: "โสด",
    phonetic: "sot",
    meaningMy: "လူပျို / အပျို",
    meaningEn: "Single",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-pd-meeluk",
    word: "มีลูก",
    phonetic: "mee luk",
    meaningMy: "ကလေးရှိသည်",
    meaningEn: "Have children",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-pd-theeyoo",
    word: "ที่อยู่",
    phonetic: "thee-yoo",
    meaningMy: "နေရပ်လိပ်စာ",
    meaningEn: "Address",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-pd-prathet",
    word: "ประเทศ",
    phonetic: "pra-thet",
    meaningMy: "နိုင်ငံ",
    meaningEn: "Country",
    category: "Personal Details",
    lessonId: "lesson-1"
  },
  {
    id: "v-pd-sanchat",
    word: "สัญชาติ",
    phonetic: "san-chat",
    meaningMy: "နိုင်ငံသားဖြစ်မှု",
    meaningEn: "Nationality",
    category: "Personal Details",
    lessonId: "lesson-1"
  },

  // 10 NEW QUESTIONS
  {
    id: "v-q-arai",
    word: "อะไร",
    phonetic: "a-rai",
    meaningMy: "ဘာလဲ",
    meaningEn: "What",
    category: "Questions",
    lessonId: "lesson-1"
  },
  {
    id: "v-q-muearhai",
    word: "เมื่อไหร่",
    phonetic: "muea-rhai",
    meaningMy: "ဘယ်တော့လဲ",
    meaningEn: "When",
    category: "Questions",
    lessonId: "lesson-5"
  },
  {
    id: "v-q-thammai",
    word: "ทำไม",
    phonetic: "tham-mai",
    meaningMy: "ဘာဖြစ်လို့လဲ",
    meaningEn: "Why",
    category: "Questions",
    lessonId: "lesson-4"
  },
  {
    id: "v-q-yangrai",
    word: "อย่างไร",
    phonetic: "yang-rai",
    meaningMy: "ဘယ်လိုလဲ",
    meaningEn: "How",
    category: "Questions",
    lessonId: "lesson-4"
  },
  {
    id: "v-q-khrai",
    word: "ใคร",
    phonetic: "khrai",
    meaningMy: "ဘယ်သူလဲ",
    meaningEn: "Who",
    category: "Questions",
    lessonId: "lesson-1"
  },
  {
    id: "v-q-thaorhai",
    word: "เท่าไหร่",
    phonetic: "thao-rhai",
    meaningMy: "ဘယ်လောက်လဲ",
    meaningEn: "How much / How many",
    category: "Questions",
    lessonId: "lesson-2"
  },
  {
    id: "v-q-keekhon",
    word: "กี่คน",
    phonetic: "kee khon",
    meaningMy: "ဘယ်နှစ်ယောက်လဲ",
    meaningEn: "How many people",
    category: "Questions",
    lessonId: "lesson-2"
  },
  {
    id: "v-q-chingmai",
    word: "จริงไหม",
    phonetic: "ching mai",
    meaningMy: "ဟုတ်လား / တကယ်လား",
    meaningEn: "Is it true?",
    category: "Questions",
    lessonId: "lesson-3"
  },
  {
    id: "v-q-chaimai",
    word: "ใช่ไหม",
    phonetic: "chai mai",
    meaningMy: "ဟုတ်တယ်မဟုတ်လား",
    meaningEn: "Right? / Isn't it?",
    category: "Questions",
    lessonId: "lesson-3"
  },
  {
    id: "v-q-rueyang",
    word: "หรือยัง",
    phonetic: "rue yang",
    meaningMy: "ပြီးပြီလား",
    meaningEn: "Yet? / Already?",
    category: "Questions",
    lessonId: "lesson-5"
  },

  // 10 NEW DAILY LIFE
  {
    id: "v-dl-ban",
    word: "บ้าน",
    phonetic: "ban",
    meaningMy: "အိမ်",
    meaningEn: "House / Home",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-dl-arhan",
    word: "อาหาร",
    phonetic: "ar-han",
    meaningMy: "အစားအစာ",
    meaningEn: "Food",
    category: "Daily Life",
    lessonId: "lesson-4"
  },
  {
    id: "v-dl-talat",
    word: "ตลาด",
    phonetic: "ta-lat",
    meaningMy: "ဈေး",
    meaningEn: "Market",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-dl-sue",
    word: "ซื้อ",
    phonetic: "sue",
    meaningMy: "ဝယ်သည်",
    meaningEn: "Buy",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-dl-motorcycle",
    word: "รถจักรยานยนต์",
    phonetic: "rot jak-kra-yan-yon",
    meaningMy: "ဆိုင်ကယ်",
    meaningEn: "Motorcycle",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-dl-khee",
    word: "ขี่",
    phonetic: "khee",
    meaningMy: "စီးသည်",
    meaningEn: "Ride",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-dl-phone",
    word: "โทรศัพท์",
    phonetic: "tho-ra-sap",
    meaningMy: "ဖုန်း",
    meaningEn: "Telephone / Phone",
    category: "Daily Life",
    lessonId: "lesson-5"
  },
  {
    id: "v-dl-kinkhao",
    word: "กินข้าว",
    phonetic: "kin khao",
    meaningMy: "ထมင်းစားသည်",
    meaningEn: "Eat rice / Have a meal",
    category: "Daily Life",
    lessonId: "lesson-4"
  },
  {
    id: "v-dl-non",
    word: "นอน",
    phonetic: "non",
    meaningMy: "အိပ်သည်",
    meaningEn: "Sleep",
    category: "Daily Life",
    lessonId: "lesson-5"
  },
  {
    id: "v-dl-tuennon",
    word: "ตื่นนอน",
    phonetic: "tuen non",
    meaningMy: "အိပ်ရာမှနိုးသည်",
    meaningEn: "Wake up",
    category: "Daily Life",
    lessonId: "lesson-5"
  },

  // 10 NEW DOCUMENTS
  {
    id: "v-doc-bat",
    word: "บัตรประชาชน",
    phonetic: "bat pra-cha-chon",
    meaningMy: "မှတ်ပုံတင်",
    meaningEn: "ID Card",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-rup",
    word: "รูปถ่าย",
    phonetic: "rup-thai",
    meaningMy: "ဓာတ်ပုံ",
    meaningEn: "Photo",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-sanya",
    word: "สัญญาจ้าง",
    phonetic: "san-ya chang",
    meaningMy: "အလုပ်ခန့်စာချုပ်",
    meaningEn: "Employment Contract",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-truat",
    word: "ตรวจสุขภาพ",
    phonetic: "truat suk-kha-phap",
    meaningMy: "ဆေးစစ်ချက်",
    meaningEn: "Medical Check-up",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-laicen",
    word: "ใบขับขี่",
    phonetic: "bai khap-khee",
    meaningMy: "ယာဉ်မောင်းလိုင်စင်",
    meaningEn: "Driving License",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-visa",
    word: "วีซ่า",
    phonetic: "wi-sa",
    meaningMy: "ဗีဇา",
    meaningEn: "Visa",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-samnao",
    word: "สำเนา",
    phonetic: "sam-nao",
    meaningMy: "မိต္တူ",
    meaningEn: "Copy / Photocopy",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-signature",
    word: "ลงลายมือชื่อ",
    phonetic: "long lai-mue-chue",
    meaningMy: "လက်မှတ်ထိုးသည်",
    meaningEn: "Sign name / Signature",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-tuaching",
    word: "ตัวจริง",
    phonetic: "tua-ching",
    meaningMy: "မူရင်း",
    meaningEn: "Original Document",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-doc-bank",
    word: "บัญชีธนาคาร",
    phonetic: "ban-chee tha-na-khan",
    meaningMy: "ဘဏ်အကောင့်",
    meaningEn: "Bank Account",
    category: "Documents",
    lessonId: "lesson-3"
  },

  // 10 NEW LANGUAGE SKILLS
  {
    id: "v-ls-phama",
    word: "ภาษาพม่า",
    phonetic: "pha-sa pha-ma",
    meaningMy: "ဗမာစကား / မြန်မာဘာသာ",
    meaningEn: "Burmese language",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-an",
    word: "อ่าน",
    phonetic: "an",
    meaningMy: "ဖတ်သည်",
    meaningEn: "Read",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-khian",
    word: "เขียน",
    phonetic: "khian",
    meaningMy: "ရေးသည်",
    meaningEn: "Write",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-sakot",
    word: "สะกด",
    phonetic: "sa-kot",
    meaningMy: "စာလုံးပေါင်းသည်",
    meaningEn: "Spell",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-maikhaojai",
    word: "ไม่เข้าใจ",
    phonetic: "mai khao-jai",
    meaningMy: "နားမလည်ပါဘူး",
    meaningEn: "Do not understand",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-eekkhrang",
    word: "พูดอีกครั้ง",
    phonetic: "phood eek khrang",
    meaningMy: "နောက်တစ်ခေါက် ပြันပြောပေးပါ",
    meaningEn: "Say it again",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-plae",
    word: "แปล",
    phonetic: "plae",
    meaningMy: "ဘာသာပြန်သည်",
    meaningEn: "Translate",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-samniang",
    word: "สำเนียง",
    phonetic: "sam-niang",
    meaningMy: "လေယူလေသိမ်း",
    meaningEn: "Accent / Pronunciation tone",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-phoodchat",
    word: "พูดชัด",
    phonetic: "phood chat",
    meaningMy: "ပြတ်ပြတ်သားသားပြောသည်",
    meaningEn: "Speak clearly",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-ls-rianphasa",
    word: "เรียนภาษา",
    phonetic: "rian pha-sa",
    meaningMy: "ဘာသာစကားသင်ယူသည်",
    meaningEn: "Learn language",
    category: "Language Skills",
    lessonId: "lesson-4"
  },

  // 10 NEW JOB DUTIES
  {
    id: "v-jd-serve",
    word: "เสิร์ฟอาหาร",
    phonetic: "soep ar-han",
    meaningMy: "အစားအစာ ချပေးသည် / စားပွဲထိုးသည်",
    meaningEn: "Serve food",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-kitchen",
    word: "ทำครัว",
    phonetic: "tam khrua",
    meaningMy: "မီးဖိုချောင်အလုပ်လုပ်သည်",
    meaningEn: "Do kitchen work",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-sweep",
    word: "กวาดบ้าน",
    phonetic: "kwat ban",
    meaningMy: "အိမ်တံမြက်စည်းလှည်းသည်",
    meaningEn: "Sweep house",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-mop",
    word: "ถูพื้น",
    phonetic: "thoo phuen",
    meaningMy: "ကြမ်းတိုက်သည်",
    meaningEn: "Mop floor",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-kep",
    word: "เก็บของ",
    phonetic: "kep khong",
    meaningMy: "ပစ္စည်းများ သိမ်းဆည်းသည်",
    meaningEn: "Pack / Store items",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-drive",
    word: "ขับรถ",
    phonetic: "khap rot",
    meaningMy: "ကားမောင်းသည်",
    meaningEn: "Drive car",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-deliver",
    word: "ส่งของ",
    phonetic: "song khong",
    meaningMy: "ပစ္စည်းပို့သည်",
    meaningEn: "Deliver items",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-supervise",
    word: "คุมงาน",
    phonetic: "khum ngan",
    meaningMy: "อလုပ်ကို ကြီးကြပ်သည်",
    meaningEn: "Supervise work",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-arrange",
    word: "จัดเรียงสินค้า",
    phonetic: "jat riang sin-kha",
    meaningMy: "ကုန်ပစ္စည်းများ စီစဉ်သည်",
    meaningEn: "Arrange merchandise",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-jd-count",
    word: "ตรวจนับ",
    phonetic: "truat nap",
    meaningMy: "ရေတွက်စစ်ဆေးသည်",
    meaningEn: "Inventory count / Check",
    category: "Job Duties",
    lessonId: "lesson-4"
  },

  // 10 NEW AVAILABILITY
  {
    id: "v-av-holiday",
    word: "วันหยุด",
    phonetic: "wan yut",
    meaningMy: "အားလပ်ရက်",
    meaningEn: "Holiday / Day off",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-nightshift",
    word: "กะกลางคืน",
    phonetic: "ka klang-khuen",
    meaningMy: "ညဆိုင်း",
    meaningEn: "Night shift",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-dayshift",
    word: "กะกลางวัน",
    phonetic: "ka klang-wan",
    meaningMy: "နေ့ဆိုင်း",
    meaningEn: "Day shift",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-overtime",
    word: "ทำงานล่วงเวลา",
    phonetic: "tam-ngan luang we-la",
    meaningMy: "အချိန်ပိုအလုပ်လုပ်သည် / အိုတီ",
    meaningEn: "Work overtime / OT",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-takeleave",
    word: "ลาหยุด",
    phonetic: "la yut",
    meaningMy: "ခွင့်ယူသည်",
    meaningEn: "Take leave",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-sickleave",
    word: "ลาป่วย",
    phonetic: "la puay",
    meaningMy: "ဖျားနာခွင့်ယူသည်",
    meaningEn: "Sick leave",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-personal",
    word: "ลากิจ",
    phonetic: "la kit",
    meaningMy: "ကိုယ်ရေးကိုယ်တာကိစ္စဖြင့် ခွင့်ယူသည်",
    meaningEn: "Personal leave",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-readytowork",
    word: "พร้อมทำงาน",
    phonetic: "phrom tam-ngan",
    meaningMy: "အလုပ်လုပ်ရန် အဆင်သင့်ဖြစ်သည်",
    meaningEn: "Ready to work",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-convenient",
    word: "สะดวก",
    phonetic: "sa-duak",
    meaningMy: "အဆင်ပြေသည်",
    meaningEn: "Convenient / Available",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-av-schedule",
    word: "ตารางงาน",
    phonetic: "ta-rang ngan",
    meaningMy: "အလုပ်အချိန်ဇယား",
    meaningEn: "Work schedule",
    category: "Availability",
    lessonId: "lesson-5"
  }
];

const DUPLICATE_VOCAB = [
  
  // Lesson 2 Words
  {
    id: "v-ma-jak",
    word: "มาจาก",
    phonetic: "ma-jak",
    meaningMy: "မှ လာသည်",
    meaningEn: "Come from",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-mueang",
    word: "เมือง",
    phonetic: "mueang",
    meaningMy: "မြို့",
    meaningEn: "City / Town",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-pak-yoo",
    word: "พักอยู่",
    phonetic: "pak-yoo",
    meaningMy: "တည်းခိုနေထိုင်သည်",
    meaningEn: "Stay at / Reside",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-theenai",
    word: "ที่ไหน",
    phonetic: "thee-nai",
    meaningMy: "ဘယ်နေရာလဲ",
    meaningEn: "Where",
    category: "Questions",
    lessonId: "lesson-2"
  },
  {
    id: "v-dern",
    word: "เดิน",
    phonetic: "dern",
    meaningMy: "လမ်းလျှောက်သည်",
    meaningEn: "Walk",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-mai-klai",
    word: "ไม่ไกล",
    phonetic: "mai-klai",
    meaningMy: "မဝေးပါဘူး",
    meaningEn: "Not far",
    category: "Daily Life",
    lessonId: "lesson-2"
  },
  {
    id: "v-aryu",
    word: "อายุ",
    phonetic: "ar-yu",
    meaningMy: "အသက်",
    meaningEn: "Age",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-taeng-ngan",
    word: "แต่งงาน",
    phonetic: "taeng-ngan",
    meaningMy: "အိမ်ထောင်ပြုသည် / မင်္ဂလာဆောင်သည်",
    meaningEn: "To get married",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-ma-khon-diew",
    word: "มาคนเดียว",
    phonetic: "ma khon diew",
    meaningMy: "တစ်ယောက်တည်းလာသည်",
    meaningEn: "Come alone",
    category: "Personal Details",
    lessonId: "lesson-2"
  },
  {
    id: "v-yoo-ma",
    word: "อยู่มา",
    phonetic: "yoo-ma",
    meaningMy: "နေထိုင်ခဲ့သည်မှာ (ကာလ)",
    meaningEn: "Have lived for",
    category: "Personal Details",
    lessonId: "lesson-2"
  },

  // Lesson 3 Words
  {
    id: "v-ek-ka-san",
    word: "เอกสาร",
    phonetic: "ek-ka-san",
    meaningMy: "စာရွက်စာတမ်း",
    meaningEn: "Documents / Papers",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-passport",
    word: "พาสปอร์ต",
    phonetic: "pha-sa-pawtd",
    meaningMy: "နိုင်ငံကူးလက်မှတ် (ပတ်စပို့)",
    meaningEn: "Passport",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-bai-anuyat",
    word: "ใบอนุญาตทำงาน",
    phonetic: "bai-a-nu-yat tam-ngan",
    meaningMy: "အလုပ်လုပ်ခွင့်လက်မှတ် (ဝပ်ပါမစ် / အလုပ်သမားကတ်)",
    meaningEn: "Work Permit",
    category: "Documents",
    lessonId: "lesson-3"
  },
  {
    id: "v-yang-mai-mod-aryu",
    word: "ยังไม่หมดอายุ",
    phonetic: "yang mai mod ar-yu",
    meaningMy: "သက်တမ်းမကုန်သေးပါ",
    meaningEn: "Not yet expired",
    category: "Documents",
    lessonId: "lesson-3"
  },

  // Lesson 4 Words
  {
    id: "v-phood-thai",
    word: "พูดภาษาไทย",
    phonetic: "phood par-sar thai",
    meaningMy: "ထိုင်းစကားပြောသည်",
    meaningEn: "Speak Thai",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-fang-khaojai",
    word: "ฟังเข้าใจ",
    phonetic: "fang khao-jai",
    meaningMy: "နားထောင်ပြီးနားလည်သည်",
    meaningEn: "Understand hearing",
    category: "Language Skills",
    lessonId: "lesson-4"
  },
  {
    id: "v-cha-cha",
    word: "ช้าๆ",
    phonetic: "cha-cha",
    meaningMy: "ဖြည်းဖြည်းချင်း",
    meaningEn: "Slowly",
    category: "Daily Life",
    lessonId: "lesson-4"
  },
  {
    id: "v-phrom-rianroo",
    word: "พร้อมเรียนรู้",
    phonetic: "phrom rian-roo",
    meaningMy: "သင်ယူဖို့ အဆင်သင့်ရှိသည်",
    meaningEn: "Ready to learn",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },
  {
    id: "v-ran-arhan",
    word: "ร้านอาหาร",
    phonetic: "ran ar-han",
    meaningMy: "စားသောက်ဆိုင်",
    meaningEn: "Restaurant",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-lang-jan",
    word: "ล้างจาน",
    phonetic: "lang-jan",
    meaningMy: "ပန်းကန်ဆေးသည်",
    meaningEn: "Wash dishes",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-yok-khong",
    word: "ยกของ",
    phonetic: "yok-khong",
    meaningMy: "ပစ္စည်းမသည် / သယ်ဆောင်သည်",
    meaningEn: "Lift / carry things",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-tam-khwamsaard",
    word: "ทำความสะอาด",
    phonetic: "tam khwam sa-ard",
    meaningMy: "သန့်ရှင်းရေးလုပ်သည်",
    meaningEn: "To clean",
    category: "Job Duties",
    lessonId: "lesson-4"
  },
  {
    id: "v-mai-klua",
    word: "ไม่กลัวงานหนัก",
    phonetic: "mai klua ngan nak",
    meaningMy: "ပင်ပန်းသောအလုပ်ကိုမကြောက်ပါ",
    meaningEn: "Not afraid of hard work",
    category: "Workplace Etiquette",
    lessonId: "lesson-4"
  },

  // Lesson 5 Words
  {
    id: "v-rerm-ngan",
    word: "เริ่มงาน",
    phonetic: "rerm-ngan",
    meaningMy: "အလုပ်စဝင်သည်",
    meaningEn: "Start work",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-tan-thee",
    word: "ทันที",
    phonetic: "tan-thee",
    meaningMy: "ချက်ချင်း",
    meaningEn: "Immediately",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-ka",
    word: "กะ",
    phonetic: "ka",
    meaningMy: "ဆိုင်း (Shift)",
    meaningEn: "Shift (work hours)",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-sao-athit",
    word: "เสาร์-อาทิตย์",
    phonetic: "sao a-thit",
    meaningMy: "စနေ နှင့် တနင်္ဂနွေ",
    meaningEn: "Saturday and Sunday",
    category: "Availability",
    lessonId: "lesson-5"
  },
  {
    id: "v-mai-mee-panha",
    word: "ไม่มีปัญหา",
    phonetic: "mai mee pan-ha",
    meaningMy: "ပြဿနာမရှိပါ",
    meaningEn: "No problem",
    category: "Workplace Etiquette",
    lessonId: "lesson-5"
  },
  {
    id: "v-jaonay",
    word: "เจ้านาย",
    phonetic: "jao-nay",
    meaningMy: "သူဌေး / အလုပ်ရှင်",
    meaningEn: "Boss / Employer",
    category: "Workplace Etiquette",
    lessonId: "lesson-5"
  }
];

export const QUIZZES: QuizQuestion[] = [
  {
    id: "q-1",
    questionText: "Which Thai phrase is used to ask 'What is your name?'",
    options: [
      "สบายดีไหมครับ (Sa-bai-dee mai krap?)",
      "ชื่ออะไรครับ (Chue a-rai krap?)",
      "อายุเท่าไหร่ครับ (Ar-yu thao-rhai krap?)",
      "มาจากไหนครับ (Ma jak nai krap?)"
    ],
    correctIndex: 1,
    explanation: "'ชื่ออะไรครับ' (Chue a-rai krap?) literally means 'What is (your) name?'.",
    lessonId: "lesson-1"
  },
  {
    id: "q-2",
    questionText: "How do you say 'Burmese person' or 'Myanmar citizen' in Thai?",
    options: [
      "คนไทย (Khon Thai)",
      "คนอังกฤษ (Khon Ang-krit)",
      "คนเมียนมา (Khon Mian-mar)",
      "คนลาว (Khon Lao)"
    ],
    correctIndex: 2,
    explanation: "'คนเมียนมา' (Khon Mian-mar) is the Thai phrase for Myanmar/Burmese person.",
    lessonId: "lesson-1"
  },
  {
    id: "q-3",
    questionText: "If the manager says 'เชิญนั่งก่อนครับ' (Chern nang gon krap), what should you do?",
    options: [
      "Leave the room",
      "Sit down",
      "Show your Passport",
      "Speak about your experience"
    ],
    correctIndex: 1,
    explanation: "'เชิญนั่งก่อนครับ' means 'Please take a seat first.'",
    lessonId: "lesson-1"
  },
  {
    id: "q-4",
    questionText: "What does 'ไม่ไกล' (mai klai) mean in Win's dialogue: 'เดินมาทำงานได้ครับ ไม่ไกล'?",
    options: [
      "Very dangerous",
      "Too far",
      "Not far (close by)",
      "Cannot walk"
    ],
    correctIndex: 2,
    explanation: "'ไม่ไกล' (mai-klai) means 'not far'. Win is saying he can walk to work because it's nearby.",
    lessonId: "lesson-2"
  },
  {
    id: "q-5",
    questionText: "What are the Thai words for Passport and Work Permit?",
    options: [
      "หนังสือ (Nang-sue) and บัตร (Bat)",
      "พาสปอร์ต (Passport) and ใบอนุญาตทำงาน (Bai-a-nu-yat tam-ngan)",
      "เงิน (Ngen) and สัญญา (San-ya)",
      "ตั๋ว (Tua) and วีซ่า (Visa)"
    ],
    correctIndex: 1,
    explanation: "Passport is called 'พาสปอร์ต' and Work Permit is 'ใบอนุญาตทำงาน' in formal Thai.",
    lessonId: "lesson-3"
  },
  {
    id: "q-6",
    questionText: "What does 'พร้อมเรียนรู้ครับ!' (Phrom rian-roo krap!) mean?",
    options: [
      "I am ready to learn!",
      "I want to go home!",
      "I cannot speak Thai!",
      "I have high experience!"
    ],
    correctIndex: 0,
    explanation: "'พร้อม' (phrom) means ready, and 'เรียนรู้' (rian-roo) means to learn. This expresses high motivation.",
    lessonId: "lesson-4"
  },
  {
    id: "q-7",
    questionText: "What job duties did Win mention doing previously in a restaurant?",
    options: [
      "Cooking food and taking orders",
      "Washing dishes, lifting items, and cleaning",
      "Driving cars and delivery",
      "Managing the staff and accounting"
    ],
    correctIndex: 1,
    explanation: "Win mentioned 'ล้างจาน' (washing dishes), 'ยกของ' (lifting things), and 'ทำความสะอาด' (cleaning).",
    lessonId: "lesson-4"
  },
  {
    id: "q-8",
    questionText: "If a job requires 'ทำงานเป็นกะ' (tam-ngan pen ka), what does it mean?",
    options: [
      "Working part-time",
      "Working on a computer",
      "Working in shifts (e.g. Day/Night shifts)",
      "Working outdoors only"
    ],
    correctIndex: 2,
    explanation: "'กะ' (ka) means 'shift', so 'ทำงานเป็นกะ' means shift-work.",
    lessonId: "lesson-5"
  }
];

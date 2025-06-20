export const MOCK_DATA = {
  en: {
    hero: {
      headline: 'Digital Sharjah',
      subheadline: 'Shaping the future through digital innovation.',
      stats: '9000+ Government Users'
    },
    vision: {
      headline: 'Our Vision',
      textContent: 'To establish a globally leading digital government that fosters social and economic prosperity for Sharjah, enhancing the quality of life for its citizens, residents, and visitors.',
      individuals: [
        { name: 'Sheikh Dr. Sultan bin Muhammad Al Qasimi', title: 'Ruler of Sharjah', image: 'assets/images/person1.jpg' },
        { name: 'Sheikh Sultan bin Mohammed bin Sultan Al Qasimi', title: 'Crown Prince and Deputy Ruler of Sharjah', image: 'assets/images/person2.jpg' }
      ]
    },
    scope: {
      headline: 'Our Scope',
      items: [
        { title: 'Government to Government', description: 'Enhancing inter-agency collaboration.' },
        { title: 'Government to Citizen', description: 'Improving public service delivery.' },
        { title: 'Government to Business', description: 'Streamlining business interactions.' },
        { title: 'Government to Visitor', description: 'Enriching the visitor experience.' }
      ]
    },
    footer: {
      contact: 'Contact Us: info@dsd.gov.ae',
      copyright: `© ${new Date().getFullYear()} Digital Sharjah Department. All Rights Reserved.`,
    }
  },
  ar: {
    hero: {
      headline: 'الشارقة الرقمية',
      subheadline: 'نرسم المستقبل من خلال الابتكار الرقمي.',
      stats: '9000+ مستخدم حكومي'
    },
    vision: {
      headline: 'رؤيتنا',
      textContent: 'تأسيس حكومة رقمية رائدة عالميًا تعزز الازدهار الاجتماعي والاقتصادي للشارقة، مما يحسن نوعية الحياة لمواطنيها والمقيمين والزوار.',
      individuals: [
        { name: 'الشيخ الدكتور سلطان بن محمد القاسمي', title: 'حاكم الشارقة', image: 'assets/images/person1.jpg' },
        { name: 'الشيخ سلطان بن محمد بن سلطان القاسمي', title: 'ولي العهد ونائب حاكم الشارقة', image: 'assets/images/person2.jpg' }
      ]
    },
    scope: {
      headline: 'نطاق عملنا',
      items: [
        { title: 'من حكومة إلى حكومة', description: 'تعزيز التعاون بين الجهات.' },
        { title: 'من حكومة إلى مواطن', description: 'تحسين تقديم الخدمات العامة.' },
        { title: 'من حكومة إلى أعمال', description: 'تبسيط التفاعلات التجارية.' },
        { title: 'من حكومة إلى زائر', description: 'إثراء تجربة الزوار.' }
      ]
    },
    footer: {
      contact: 'اتصل بنا: info@dsd.gov.ae',
      copyright: `© ${new Date().getFullYear()} دائرة الشارقة الرقمية. جميع الحقوق محفوظة.`,
    }
  }
};

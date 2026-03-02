import { AgentInfo, StudyData } from './types';

export const agents: AgentInfo[] = [
  {
    name: 'محلل الأفكار',
    icon: '🕵️',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-400',
    description: 'يجمع المعلومات الأساسية حول مشروعك وفكرته',
    questions: [
      'مرحباً بك في جدوى+! 🎉\nأنا محلل الأفكار، سأساعدك في تحديد ملامح مشروعك.\n\nما هو اسم مشروعك المقترح؟',
      'ممتاز! 👍\nالآن أخبرني، ما هي فكرة المشروع بالتفصيل؟ ماذا ستقدم من منتجات أو خدمات؟',
      'رائع! 🌟\nفي أي قطاع يندرج هذا المشروع؟\n(مثال: تقنية، أغذية، تعليم، صحة، تجارة إلكترونية، خدمات...)',
      'أين تخطط لإقامة هذا المشروع؟ (المدينة أو المنطقة)',
      'أخيراً، ما هو رأس المال التقريبي المتاح للاستثمار في هذا المشروع؟',
    ],
  },
  {
    name: 'باحث السوق',
    icon: '📊',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-400',
    description: 'يحلل السوق والمنافسين والجمهور المستهدف',
    questions: [
      'مرحباً! أنا باحث السوق 📊\nبناءً على معلومات مشروعك، سأبدأ بتحليل السوق.\n\nمن هم أبرز المنافسين في مجالك؟ (اذكر 2-3 منافسين إن أمكن)',
      'من هو جمهورك المستهدف؟\n(الفئة العمرية، الجنس، مستوى الدخل، الاهتمامات)',
      'ما هو حجم السوق المتوقع لهذا المجال في منطقتك؟\n(كبير، متوسط، صغير، ناشئ)',
      'دعنا نحلل SWOT لمشروعك:\nما هي نقاط القوة الرئيسية لمشروعك؟ (اذكر 2-3 نقاط)',
      'ما هي نقاط الضعف أو التحديات المحتملة؟',
      'ما هي الفرص المتاحة في السوق؟',
      'ما هي التهديدات أو المخاطر الخارجية التي قد تواجه المشروع؟',
    ],
  },
  {
    name: 'المخطط المالي',
    icon: '💰',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-400',
    description: 'يبني النموذج المالي والتوقعات',
    questions: [
      'مرحباً! أنا المخطط المالي 💰\nسأساعدك في بناء النموذج المالي لمشروعك.\n\nما هي التكاليف التأسيسية (الثابتة) المتوقعة؟\n(مثال: إيجار، تجهيزات، تراخيص - اذكرها مع القيم التقريبية)',
      'ما هي التكاليف التشغيلية الشهرية المتوقعة؟\n(رواتب، فواتير، مواد خام، إلخ)',
      'كم عدد العملاء/المبيعات المتوقع شهرياً؟',
      'ما هو متوسط سعر المنتج أو الخدمة؟',
    ],
  },
  {
    name: 'مخطط العمليات',
    icon: '⚙️',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-400',
    description: 'يحدد خطة العمليات والهيكل التنظيمي',
    questions: [
      'مرحباً! أنا مخطط العمليات ⚙️\nسأساعدك في تخطيط العمليات التشغيلية.\n\nما هو نوع الموقع المطلوب للمشروع؟\n(مكتب، محل تجاري، مصنع، عمل من المنزل، أونلاين)',
      'ما هي المعدات والأدوات الرئيسية التي تحتاجها؟',
      'كم عدد الموظفين المطلوبين وما هي الأدوار الأساسية؟\n(مثال: مدير، محاسب، مبرمج، عامل)',
      'هل هناك تراخيص أو تصاريح خاصة مطلوبة لهذا المشروع؟',
    ],
  },
  {
    name: 'خبير التسويق',
    icon: '📢',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-400',
    description: 'يضع الخطة التسويقية والقنوات',
    questions: [
      'مرحباً! أنا خبير التسويق 📢\nسأضع لك خطة تسويقية متكاملة.\n\nما هي الاستراتيجية التسويقية التي تفضلها؟\n(تسويق رقمي، تقليدي، مزيج بينهما)',
      'ما هي قنوات التسويق التي تريد استخدامها؟\n(وسائل التواصل، إعلانات Google، SEO، إعلانات تلفزيونية، معارض...)',
      'ما هي الميزانية التسويقية الشهرية المتوقعة؟',
    ],
  },
  {
    name: 'كاتب التقرير',
    icon: '📝',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-400',
    description: 'يكتب التقرير النهائي المتكامل',
    questions: [
      'مرحباً! أنا كاتب التقرير 📝\nلقد تم جمع جميع المعلومات من الوكلاء السابقين.\n\nسأقوم الآن بإعداد التقرير النهائي المتكامل لدراسة الجدوى الخاصة بمشروعك.\n\nهل لديك أي ملاحظات إضافية تريد تضمينها في التقرير؟\n(أو اكتب "لا" للمتابعة)',
    ],
  },
];

export function processAgentResponse(
  agentIndex: number,
  questionIndex: number,
  userInput: string,
  currentData: Partial<StudyData>
): Partial<StudyData> {
  const data = { ...currentData };

  if (agentIndex === 0) {
    if (!data.project_info) {
      data.project_info = { name: '', idea: '', sector: '', location: '', capital: '' };
    }
    switch (questionIndex) {
      case 0: data.project_info.name = userInput; break;
      case 1: data.project_info.idea = userInput; break;
      case 2: data.project_info.sector = userInput; break;
      case 3: data.project_info.location = userInput; break;
      case 4: data.project_info.capital = userInput; break;
    }
  } else if (agentIndex === 1) {
    if (!data.market_analysis) {
      data.market_analysis = {
        competitors: '', targetAudience: '', marketSize: '',
        swot: { strengths: [], weaknesses: [], opportunities: [], threats: [] }
      };
    }
    switch (questionIndex) {
      case 0: data.market_analysis.competitors = userInput; break;
      case 1: data.market_analysis.targetAudience = userInput; break;
      case 2: data.market_analysis.marketSize = userInput; break;
      case 3: data.market_analysis.swot.strengths = userInput.split(/[,،\n]/).map(s => s.trim()).filter(Boolean); break;
      case 4: data.market_analysis.swot.weaknesses = userInput.split(/[,،\n]/).map(s => s.trim()).filter(Boolean); break;
      case 5: data.market_analysis.swot.opportunities = userInput.split(/[,،\n]/).map(s => s.trim()).filter(Boolean); break;
      case 6: data.market_analysis.swot.threats = userInput.split(/[,،\n]/).map(s => s.trim()).filter(Boolean); break;
    }
  } else if (agentIndex === 2) {
    if (!data.financial_plan) {
      data.financial_plan = {
        fixedCosts: [], variableCosts: [],
        revenue: { monthlyClients: 0, avgPrice: 0, monthlyRevenue: 0, yearlyRevenue: 0 },
        breakeven: { units: 0, value: 0 },
        scenarios: {
          optimistic: { revenue: 0, profit: 0 },
          realistic: { revenue: 0, profit: 0 },
          pessimistic: { revenue: 0, profit: 0 },
        }
      };
    }
    switch (questionIndex) {
      case 0: {
        const items = userInput.split(/[,،\n]/).map(s => s.trim()).filter(Boolean);
        data.financial_plan.fixedCosts = items.map(item => {
          const match = item.match(/(.+?)\s*[:：-]\s*(\d+)/);
          if (match) return { item: match[1].trim(), amount: parseInt(match[2]) };
          return { item, amount: 0 };
        });
        break;
      }
      case 1: {
        const items = userInput.split(/[,،\n]/).map(s => s.trim()).filter(Boolean);
        data.financial_plan.variableCosts = items.map(item => {
          const match = item.match(/(.+?)\s*[:：-]\s*(\d+)/);
          if (match) return { item: match[1].trim(), amount: parseInt(match[2]) };
          return { item, amount: 0 };
        });
        break;
      }
      case 2: {
        const num = parseInt(userInput.replace(/[^\d]/g, '')) || 100;
        data.financial_plan.revenue.monthlyClients = num;
        break;
      }
      case 3: {
        const price = parseInt(userInput.replace(/[^\d]/g, '')) || 50;
        data.financial_plan.revenue.avgPrice = price;
        const mc = data.financial_plan.revenue.monthlyClients;
        data.financial_plan.revenue.monthlyRevenue = mc * price;
        data.financial_plan.revenue.yearlyRevenue = mc * price * 12;

        const totalFixed = data.financial_plan.fixedCosts.reduce((s, c) => s + c.amount, 0);
        const totalVariable = data.financial_plan.variableCosts.reduce((s, c) => s + c.amount, 0);
        const monthlyProfit = (mc * price) - totalVariable;
        
        if (monthlyProfit > 0) {
          data.financial_plan.breakeven.units = Math.ceil(totalFixed / price);
          data.financial_plan.breakeven.value = Math.ceil(totalFixed / monthlyProfit * (mc * price));
        }

        const yearlyRev = mc * price * 12;
        const yearlyCost = totalFixed + (totalVariable * 12);
        data.financial_plan.scenarios = {
          optimistic: { revenue: Math.round(yearlyRev * 1.3), profit: Math.round(yearlyRev * 1.3 - yearlyCost) },
          realistic: { revenue: yearlyRev, profit: yearlyRev - yearlyCost },
          pessimistic: { revenue: Math.round(yearlyRev * 0.7), profit: Math.round(yearlyRev * 0.7 - yearlyCost) },
        };
        break;
      }
    }
  } else if (agentIndex === 3) {
    if (!data.operational_plan) {
      data.operational_plan = { location: '', equipment: '', orgStructure: '', licenses: '' };
    }
    switch (questionIndex) {
      case 0: data.operational_plan.location = userInput; break;
      case 1: data.operational_plan.equipment = userInput; break;
      case 2: data.operational_plan.orgStructure = userInput; break;
      case 3: data.operational_plan.licenses = userInput; break;
    }
  } else if (agentIndex === 4) {
    if (!data.marketing_plan) {
      data.marketing_plan = { strategy: '', channels: [], budget: 0 };
    }
    switch (questionIndex) {
      case 0: data.marketing_plan.strategy = userInput; break;
      case 1: data.marketing_plan.channels = userInput.split(/[,،\n]/).map(s => s.trim()).filter(Boolean); break;
      case 2: data.marketing_plan.budget = parseInt(userInput.replace(/[^\d]/g, '')) || 0; break;
    }
  }

  return data;
}

export function generateReport(data: Partial<StudyData>): string {
  const pi = data.project_info;
  const ma = data.market_analysis;
  const fp = data.financial_plan;
  const op = data.operational_plan;
  const mp = data.marketing_plan;
  const date = new Date().toLocaleDateString('ar-SA');

  const totalFixed = fp?.fixedCosts?.reduce((s, c) => s + c.amount, 0) || 0;
  const totalVariable = fp?.variableCosts?.reduce((s, c) => s + c.amount, 0) || 0;

  return `
# دراسة جدوى: ${pi?.name || 'المشروع'}

**تاريخ الإعداد:** ${date}
**إعداد:** منصة جدوى+

---

## الملخص التنفيذي

تقدم هذه الدراسة تحليلاً شاملاً لمشروع "${pi?.name}" في قطاع ${pi?.sector} بمنطقة ${pi?.location}. المشروع يهدف إلى ${pi?.idea}. برأس مال مبدئي قدره ${pi?.capital}.

---

## 1. وصف المشروع

- **اسم المشروع:** ${pi?.name}
- **فكرة المشروع:** ${pi?.idea}
- **القطاع:** ${pi?.sector}
- **الموقع:** ${pi?.location}
- **رأس المال:** ${pi?.capital}

---

## 2. دراسة السوق

### المنافسون
${ma?.competitors}

### الجمهور المستهدف
${ma?.targetAudience}

### حجم السوق
${ma?.marketSize}

### تحليل SWOT

| نقاط القوة | نقاط الضعف |
|---|---|
| ${ma?.swot?.strengths?.join(' | ') || '-'} | ${ma?.swot?.weaknesses?.join(' | ') || '-'} |

| الفرص | التهديدات |
|---|---|
| ${ma?.swot?.opportunities?.join(' | ') || '-'} | ${ma?.swot?.threats?.join(' | ') || '-'} |

---

## 3. الخطة المالية

### التكاليف التأسيسية (الثابتة)
${fp?.fixedCosts?.map(c => `- ${c.item}: ${c.amount.toLocaleString()} $`).join('\n') || 'لم يتم تحديدها'}
**الإجمالي: ${totalFixed.toLocaleString()} $**

### التكاليف التشغيلية الشهرية (المتغيرة)
${fp?.variableCosts?.map(c => `- ${c.item}: ${c.amount.toLocaleString()} $`).join('\n') || 'لم يتم تحديدها'}
**الإجمالي الشهري: ${totalVariable.toLocaleString()} $**
**الإجمالي السنوي: ${(totalVariable * 12).toLocaleString()} $**

### الإيرادات المتوقعة
- عدد العملاء الشهري: ${fp?.revenue?.monthlyClients || 0}
- متوسط سعر البيع: ${fp?.revenue?.avgPrice?.toLocaleString() || 0} $
- الإيراد الشهري: ${fp?.revenue?.monthlyRevenue?.toLocaleString() || 0} $
- الإيراد السنوي: ${fp?.revenue?.yearlyRevenue?.toLocaleString() || 0} $

### نقطة التعادل
- بالوحدات: ${fp?.breakeven?.units || 0} وحدة
- بالقيمة: ${fp?.breakeven?.value?.toLocaleString() || 0} $

### السيناريوهات المالية

| السيناريو | الإيراد السنوي | الربح السنوي |
|---|---|---|
| متفائل | ${fp?.scenarios?.optimistic?.revenue?.toLocaleString() || 0} $ | ${fp?.scenarios?.optimistic?.profit?.toLocaleString() || 0} $ |
| واقعي | ${fp?.scenarios?.realistic?.revenue?.toLocaleString() || 0} $ | ${fp?.scenarios?.realistic?.profit?.toLocaleString() || 0} $ |
| متشائم | ${fp?.scenarios?.pessimistic?.revenue?.toLocaleString() || 0} $ | ${fp?.scenarios?.pessimistic?.profit?.toLocaleString() || 0} $ |

---

## 4. الخطة التشغيلية

- **نوع الموقع:** ${op?.location}
- **المعدات والأدوات:** ${op?.equipment}
- **الهيكل التنظيمي:** ${op?.orgStructure}
- **التراخيص والتصاريح:** ${op?.licenses}

---

## 5. الخطة التسويقية

- **الاستراتيجية:** ${mp?.strategy}
- **قنوات التسويق:** ${mp?.channels?.join('، ') || 'لم تحدد'}
- **الميزانية التسويقية الشهرية:** ${mp?.budget?.toLocaleString() || 0} $

---

## 6. تحليل المخاطر والتوصيات

### المخاطر المحتملة
${ma?.swot?.threats?.map((t, i) => `${i + 1}. ${t}`).join('\n') || '- لم يتم تحديد مخاطر محددة'}

### التوصيات
1. البدء بنطاق محدود واختبار السوق قبل التوسع
2. بناء علاقات قوية مع العملاء الأوائل
3. مراقبة التدفقات النقدية بشكل دوري
4. تطوير ميزة تنافسية واضحة
5. الاستثمار في التسويق الرقمي بشكل مدروس

---

*تم إعداد هذا التقرير بواسطة منصة جدوى+ باستخدام الذكاء الاصطناعي*
*هذا التقرير استرشادي ولا يغني عن استشارة الخبراء المتخصصين*
  `.trim();
}

export function getAgentCompletionMessage(agentIndex: number, data: Partial<StudyData>): string {
  switch (agentIndex) {
    case 0:
      return `✅ ممتاز! تم جمع جميع المعلومات الأساسية عن مشروع "${data.project_info?.name}".\n\nملخص ما تم جمعه:\n📌 الفكرة: ${data.project_info?.idea}\n📌 القطاع: ${data.project_info?.sector}\n📌 الموقع: ${data.project_info?.location}\n📌 رأس المال: ${data.project_info?.capital}\n\nسيتم الآن تحويلك إلى باحث السوق...`;
    case 1:
      return `✅ تم إكمال تحليل السوق بنجاح!\n\nملخص التحليل:\n📊 المنافسون: ${data.market_analysis?.competitors}\n👥 الجمهور: ${data.market_analysis?.targetAudience}\n📈 حجم السوق: ${data.market_analysis?.marketSize}\n\nسيتم تحويلك الآن إلى المخطط المالي...`;
    case 2:
      return `✅ تم بناء النموذج المالي!\n\n💰 الإيراد الشهري المتوقع: ${data.financial_plan?.revenue?.monthlyRevenue?.toLocaleString() || 0}$\n📊 نقطة التعادل: ${data.financial_plan?.breakeven?.units || 0} وحدة\n\nسيتم تحويلك إلى مخطط العمليات...`;
    case 3:
      return `✅ تم إكمال الخطة التشغيلية!\n\n⚙️ الموقع: ${data.operational_plan?.location}\n🏗️ المعدات: ${data.operational_plan?.equipment}\n\nسيتم تحويلك إلى خبير التسويق...`;
    case 4:
      return `✅ تم وضع الخطة التسويقية!\n\n📢 الاستراتيجية: ${data.marketing_plan?.strategy}\n💵 الميزانية: ${data.marketing_plan?.budget?.toLocaleString() || 0}$\n\nسيتم تحويلك إلى كاتب التقرير النهائي...`;
    case 5:
      return `✅ تم إعداد التقرير النهائي بنجاح! 🎉\n\nيمكنك الآن مشاهدة التقرير الكامل وتحميله بصيغة PDF.\n\nشكراً لاستخدامك منصة جدوى+!`;
    default:
      return '';
  }
}

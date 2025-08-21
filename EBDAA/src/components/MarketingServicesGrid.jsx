import React from "react";
import "./MarketingServicesGrid.css";

const MarketingServicesGrid = () => {
  const services = [
    {
      image: "asc.png",
      title: "تصميم الهوية البصرية",
      description: `نقدم حلولاً متكاملة لتصميم
            الهوية البصرية , تشمل
            الشعار ,الألوان , والنمط
            البصريه العام , بما يعكس رؤية
            العلامة التجارية ويعزز حضورها
            في أذهان الجمهور`,
      buttonText: "إعرف أكثر",
      position: "up"
    },
    {
      image: "DigitalAdDesign-08.png",
      title: "تصميم الإعلانات الرقمية والمطبوعة ",
      description: `نُصمم مواد إعلانية عالية
        الجودة, سواء للاستخدام 
        الرقمي أو المطبوع, تجمع
        بين الإبداع البصري والوضوح
        الرسالي لضمان تحقيق أفضل
        تفاعل مع الجمهور المستهدف`,
      buttonText: "إعرف أكثر",
      position: "down"
    },
    {
      image: "asx.png",
      title: "إدارة الحملات الإعلانية",
      description: `نخطط وننفذ حملات إعلانية 
        فعالة عبر الوسائط المختلفة ,
        مع التركيز على إيصال الرسالة
        التسويقية بدقة وتحقيق
        أقصى تأثير ممكن ضمن
        الأهداف المحددة`,
      buttonText: "إعرف أكثر",
      position: "up"
    },
    {
      image: "514568-PIMP17-162-01.png",
      title: "صناعة المحتوى التسويقي",
      description: `مع إبداع ميديا نصنع لك
        محتوى تسويقي يلتقط
        انتباه العملاء ويثير
        اهتمامهم. نحن
        من نصنعها!`,
      buttonText: "إعرف أكثر",
      position: "down"
    }
  ];

  return (
    <div className="marketing-services-container">
      <div className="services-header">
        <h2>خدمات تسويقية وإعلانية متكاملة</h2>
        {/* Green dotted line added here */}
        <div className="green-dotted-line-header">
          <div className="thick-green-line"></div>
          <div className="three-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <p>نقدم العديد من خدمات التسويق والاعلان والخدمات التسويقية المختلفة مثل التصميم والخدمات الرقمية وخدمات المبيعات والتسويق الالكتروني</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.position}`}>
            <div className="service-icon">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingServicesGrid;
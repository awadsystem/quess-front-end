import React from 'react'
import './about.css'

// import Video player item
import VideoPlayer from '../videoPlayer/videoPlayer'
import Chip from './chip'

const About = () => {

    let ChipList = ['تطوير الأعمال', 'المشاريع الصغيرة', 'مشاركة العملاء', 'مشاركة العملاء', 'التحدث أمام الجمهور', 'الدعاية والإعلان', 'ريادة الأعمال', 'القيادة', 'التسويق الرقمي'].map((value, index) => (
        <Chip
            key={index}
            title={value}
        />
    ))

    return (
        <section id="about">
            <div className="about-inner">
                <div className="video-row">
                    <VideoPlayer
                        title="المقدمة التعريفية لـ هند الناهض"
                        image="https://assetshost.fra1.cdn.digitaloceanspaces.com/background-photo.png"
                        time="2:29"
                    />
                </div>

                <div className="about-row">
                    <div className="about-bio-holder">
                        <div className="about-bio">
                            <p>هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.</p>
                        </div>
                    </div>
                    <div className="mobile-padding">
                        <h3>الخبرات</h3>
                        <ul className="chip-ul">
                            {ChipList}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About
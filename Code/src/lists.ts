
export class Lists {
    static icons = [
        "ant-design:aim-outlined",
        'ic:round-people-alt',
        'icon-park-outline:play-basketball',
        'fa-solid:bible',
        'vs:kakaotalk',
        'ic:round-thumbs-up-down',
    ]

    static goal: Array<String> = ["واحد", "شخصي", "ايجابي", "قابل للتنفيذ", "اساسه الله", "مبني علي الحق"]
    static relationships: Array<String> = ["هدفه انا الطفل يتعرف عليك وعلي اللي حواليه", "يبقي قيه فرصه للكل انهم يشاركو ويتكلموا عن حياتهم", "فيه جو دافي يساعدك تتطلع اللي جو الطفل", "بين للكل انك مهتم بيهم بكل واحد فيهم", "ما تميمز بينهم لانهم بيحسوا وبيتضيقوا", "يكون فيه وقت للطفل ليك معاه بره الفصل"]
    static experience: Array<String> = ["مرتبط بهدف الدرس ", "يفضل كل الاطفال يشاركوا", "خليهم يستخدموا كل الحواس", "اتاكد انه آمن جسديا ", "اوعي تنسي جملة الربط", ""]
    static bible: Array<String> = ["استخدم الكتاب المقدس كمصدر اول", "اكدلهم دايما ان الكتاب المقدس هو كلمة الله", "ركز علي هدف واحد للدرس وكرره", "قدمه بطريقة مبدعة (الله يخليك)", "يقدم بمراعاة سنهم الصغير وحجم استيعابهم"]
    static talk: Array<String> = ["تكون مكونة من اسئلة مفتوحة و اسئله مغلقة (ايوة ولا)", "الاسئلة المفتوحة اكتر من المغلقة", "الاسلئة بتركز علي هدف الدرس ", "الاسئلة بتربط هدف الدرس مع حياتهم العملية وبتديهم فرصة يتكلموا  عن حياتهم"]
    static response: Array<String> = ["تكون تحدي او نشاط في نفس وقت الدرس", "تكون بتسمح ليهم انها تتعمل خلال السبوع", "تكون فرصة انهم يعيشوا كلمة الله ويطبقوها في حياتهم", "حاجة تقدر بعد كدا تتابعهم بيها وتسالهم عملوا ايه"]

    static encourage = [["قربت", "حلو", "كويس", "فيه احسن"], ["رائع جدا", "عاش عاش عاش", "ربنا يباركك", "كمل علي كدا"]]


}

const TheLists = [Lists.goal, Lists.relationships, Lists.experience, Lists.bible, Lists.talk, Lists.response]



export default Lists
export { TheLists }
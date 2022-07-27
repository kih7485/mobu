/**
 * 오피스텔/도시형/민간임대 분양정보 주택형별 상세조회
 */
export default interface UrbtyOfctlLttotPblancMdl{
    PBLANC_NO: number,              //공고번호
    HOUSE_MANAGE_NO: number,        //주택관리번호
    MODEL_NO: string,               //모델번호
    GP: string,                     //군
    TP: string,                     //타입
    SUPLY_AR: string,               //전용면적
    SUPLY_HSHLDCO: number,          //공급세대수
    SUPLY_AMOUNT: string,           //공급금액(분양최고금액) (단위:만원)
    SUBSCRPT_REQST_AMOUNT: string   //청약신청금 (단위:만원)
}
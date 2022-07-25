/**
 * /ApplyhomeInfoDetailSvc/v1/getRemndrLttotPblancMdl
 */
export default interface RemndrLttotPblancMdl{
    HOUSE_MANAGE_NO: number,    //주택관리번호
    PBLANC_NO: number,          //공고번호
    MODEL_NO: string,           //모델번호
    HOUSE_TY: string,           //모델타입
    SUPLY_AR: string,           //전용면적
    SUPLY_HSHLDCO: number,      //일반공급세대수
    SPSPLY_HSHLDCO: number,     //특별공급세대수
    LTTOT_TOP_AMOUNT: string    //공급금액(분양최고금액) (단위:만원)
}
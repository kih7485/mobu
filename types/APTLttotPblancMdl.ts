/**
 * 아파트 분양정보 주택형별 상세조회
 */
export default interface APTLttotPblancMdl{
    HOUSE_MANAGE_NO: number,                    //주택관리번호
    PBLANC_NO: number,                          //공고번호
    MODEL_NO: string,                           //모델번호
    HOUSE_TY: string,                           //주택형
    SUPLY_AR: string,                           //주택공급면적
    SUPLY_HSHLDCO: number,                      //일반공급세대수
    SPSPLY_HSHLDCO: number,                     //특별공급세대수
    MNYCH_HSHLDCO: number,                      //특별공급-다자녀가구 세대수
    NWWDS_HSHLDCO: number,                      //특별공급-신혼부부 세대수
    LFE_FRST_HSHLDCO: number,                   //특별공급-생애최초 세대수
    OLD_PARNTS_SUPORT_HSHLDCO: number,          //특별공급-노부모부양 세대수
    INSTT_RECOMEND_HSHLDCO: number,             //특별공급-기관추천 세대수
    ETC_HSHLDCO: number,                        //특별공급-기타 세대수
    TRANSR_INSTT_ENFSN_HSHLDCO: number,         //특별공급-이전기관 세대수
    LTTOT_TOP_AMOUNT: string                    //공급금액(분양최고금액) (단위:만원)
}
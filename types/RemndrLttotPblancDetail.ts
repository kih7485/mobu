/**
 * APT 무순위/잔여세대 분양정보 상세조회
 */
export default interface RemndrLttotPblancDetail {
    TYPE:"APT_REMAIN",
    HOUSE_MANAGE_NO: number,    //주택관리번호
    PBLANC_NO: number,          //공고번호
    HOUSE_NM: string,           //주택명
    HOUSE_SECD: string,         //주택구분코드 (04: 무순위/잔여세대 , 06: 계약취소주택)
    HOUSE_SECD_NM: string,      //주택구분코드명
    HSSPLY_ZIP: string,         //공급위치 우편번호
    HSSPLY_ADRES: string,       //공급위치
    TOT_SUPLY_HSHLDCO: number,  //공급규모
    RCRIT_PBLANC_DE: string,        //모집공고일 (YYYY-MM-DD)
    SUBSCRPT_RCEPT_BGNDE: string,   //청약접수시작일
    SUBSCRPT_RCEPT_ENDDE: string,   //청약접수종료일
    SPSPLY_RCEPT_BGNDE: string,     //특별공급접수시작일
    SPSPLY_RCEPT_ENDDE: string,     //특별공급접수종료일
    GNRL_RCEPT_BGNDE: string,       //일반공급접수 시작일
    GNRL_RCEPT_ENDDE: string,       //일반공급접수 종료일
    PRZWNER_PRESNATN_DE: string,    //당첨자발표일
    CNTRCT_CNCLS_BGNDE: string,     //계약시작일
    CNTRCT_CNCLS_ENDDE: string,     //계약종료일
    HMPG_ADRES: string,             //홈페이지주소
    BSNS_MBY_NM: string,            //사업주체명(시행사)
    MDHS_TELNO: string,             //문의처
    MVN_PREARNGE_YM: string         //입주예정월
}
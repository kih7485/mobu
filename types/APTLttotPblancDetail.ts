
/**
 * 아파트 분양정보
 */
export default interface APTLttotPblancDetail  {
    HOUSE_MANAGE_NO: number, //주택관리번호
    PBLANC_NO: number, //공고번호
    HOUSE_NM:string, //주택명
    HOUSE_SECD:	string, //주택구분코드(01: APT)
    HOUSE_SECD_NM: string, //주택구분코드명
    HOUSE_DTL_SECD: string, //주택상세구분코드(01: 민영, 03: 국민)
    HOUSE_DTL_SECD_NM: string, //주택상세구분코드명
    RENT_SECD: string, //분양구분코드(0: 분양주택, 1: 분양전환 가능임대, 2: 분양전환 불가임대)
    RENT_SECD_NM: string, //분양구분코드명
    SUBSCRPT_AREA_CODE: string, //공급지역코드 
    SUBSCRPT_AREA_CODE_NM: string, //공급지역명
    HSSPLY_ZIP: string,  //공급위치 우편번호
    HSSPLY_ADRES: string, //공급위치
    TOT_SUPLY_HSHLDCO: number,  //공급규모 
    RCRIT_PBLANC_DE: string,    //모집공고일 (YYYY-MM-DD)
    RCEPT_BGNDE: string,    //청약접수시작일
    RCEPT_ENDDE: string,    //청약접수종료일
    SPSPLY_RCEPT_BGNDE: string, //특별공급 접수시작일
    SPSPLY_RCEPT_ENDDE: string, //특별공급 접수종료일
    GNRL_RNK1_CRSPAREA_RCEPT_PD: string,    //1순위 접수일 해당지역
    GNRL_RNK1_ETC_GG_RCPTDE_PD: string,     //1순위 접수일 경기지역
    GNRL_RNK1_ETC_AREA_RCPTDE_PD: string,    //1순위 접수일 기타지역
    GNRL_RNK2_CRSPAREA_RCEPT_PD: string,    //2순위 접수일 해당지역
    GNRL_RNK2_ETC_GG_RCPTDE_PD: string,    //2순위 접수일 경기지역
    GNRL_RNK2_ETC_AREA_RCPTDE_PD: string,    //2순위 접수일 기타지역
    PRZWNER_PRESNATN_DE: string,    //당첨자발표일
    CNTRCT_CNCLS_BGNDE: string,    //계약시작일
    CNTRCT_CNCLS_ENDDE: string,    //계약종료일
    HMPG_ADRES: string,    //홈페이지주소
    CNSTRCT_ENTRPS_NM: string,    //건설업체명(시공사)
    MDHS_TELNO: string,    //문의처
    BSNS_MBY_NM: string,    //사업주체명(시행사)
    MVN_PREARNGE_YM: string,    //입주예정월
    SPECLT_RDN_EARTH_AT: string,    //투기과열지구
    MDAT_TRGET_AREA_SECD: string,    //조정대상지역 (Y: 과열지역, Y: 미대상주택, S: 위축지역)
    PARCPRC_ULS_AT: string,    //분양가상한제
    IMPRMN_BSNS_AT: string,    //정비사업
    PUBLIC_HOUSE_EARTH_AT: string,    //공공주택지구
    LRSCL_BLDLND_AT: string,    //대규모 택지개발지구
    NPLN_PRVOPR_PUBLIC_HOUSE_AT: string    //수도권 내 민영 공공주택지구

};


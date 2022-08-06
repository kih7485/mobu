
import APTLttotPblancDetail from '../../types/APTLttotPblancDetail';
import RemndrLttotPblancDetail from '../../types/RemndrLttotPblancDetail';
import UrbtyOfctlLttotPblancDetail from '../../types/UrbtyOfctlLttotPblancDetail';
import getAPTLttotPblancDetail from './aptSale';
import getUrbtyOfctlLttotPblancDetail from "./officetels";
import getRemndrLttotPblancDetail from "./reminders";


interface Props {
  type: string,
  data: APTLttotPblancDetail[] & UrbtyOfctlLttotPblancDetail[] & RemndrLttotPblancDetail[]
} 

export const estatesSubscription = async () => {
    const aptData = await getAPTLttotPblancDetail();
    const aptRemindData = await getRemndrLttotPblancDetail();
    const officetelsData  = await getUrbtyOfctlLttotPblancDetail();
    const resultData = [];
    resultData.push(aptData);
    resultData.push(aptRemindData);
    resultData.push(officetelsData);

    // console.log(resultData, "resultData"); 
    return resultData;
}

export default estatesSubscription;
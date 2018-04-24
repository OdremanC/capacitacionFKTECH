// Constants
import { API } from '../../constants/api'; 

// Utils
import { apiFetch } from '../../lib/utils/api';


class testApi {
  static addData(data) {
  	const method = "POST";
  	return apiFetch(API.TEST.ADD,{},'',data,method);
  }
  static getData() {
    const method = "GET";
    return apiFetch(API.TEST.ALL,{},'','',method);
  }
}
export default testApi;

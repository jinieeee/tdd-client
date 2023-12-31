import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const urlConfig = {
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL
}
const BoardGroupList = (props) => {
    const { auth } = useSelector(({ auth }) => ({
        auth: auth.auth,
    }));

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const boardGroupList = async () => {
            await axios
                .post(`${urlConfig.baseURL}/group/all`, null, {
                    headers: {
                        Authorization : auth,
                    }
                })
                .then((res) => {
                    setLoading(false);
                    setData(res.data);
                })
                .catch((error) => {
                    // 오류 처리
                    console.error(error);
                    setLoading(false);
                })
        }
        boardGroupList();

    }, []);

    if(loading || data == null) {
        return null;
    } else {
        return (
            <div>
                {data.map((item) => (
                    <div key={item.groupId}>{item.groupName}</div>
                ))}
            </div>
        )
    }

}

export default BoardGroupList;
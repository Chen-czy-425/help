import { useParams } from 'react-router-dom';

const Detail = () => {
    const { docid } = useParams(); // 获取URL中的参数
    return (
        <div>
            Detail:{docid}
        </div>
    )
}

export default Detail;
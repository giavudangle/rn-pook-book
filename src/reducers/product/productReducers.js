import {
  FETCH_PRODUCTS,
  PRODUCT_LOADING,
  PRODUCT_FAILURE,
} from "../../@types/productActionTypes";
import { FIRST_OPEN } from "../../@types/firstTimeOpenActionTypes";






// const initialState = {
//   products: [],
//   isFirstOpen: false,
//   isLoading: false,
// };


const initialState = {
  products: [
    {
      "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108762/ugvvlnf1gin7lq4yjiom.jpg",
      "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108763/mfnfxyleu9z6pk3gzj32.jpg",
      "stocks": 900,
      "_id": "6081a39c13f3e21db7724b38",
      "filename": "imageUrl-1619108760206.jpg",
      "title": "Đừng Làm Việc Chăm Chỉ Hãy Làm Việc Thông Minh",
      "price": 106700,
      "description": "Thành công là học cách làm việc THÔNG MINH hơn chứ không phải CHĂM CHỈ hơn! Những người thành công thường chỉ tập trung thời gian của họ vào một vài ưu tiên và luôn nghĩ làm thế nào để mọi việc diễn ra suôn sẻ.\n\nMỗi người đều có 96 khối năng lượng mỗi ngày để làm những gì chúng ta muốn. Bạn luôn cần đảm bảo mình đang sử dụng mỗi khối năng lượng một cách khôn ngoan để đạt được tiến bộ nhanh nhất trên các mục tiêu quan trọng của bản thân. Đừng Làm Việc Chăm Chỉ Hãy Làm Việc Thông Minh để luôn duy trì nguồn năng lượng tích cực là cuốn sách Bizbooks xin trân trọng gửi đến quý độc giả.\n\nNhững kiến thức trong cuốn sách đưa ra những nghiên cứu về bộ não để giúp chúng ta quản trị trí não, cảm xúc và thói quen với những bước hành động hết sức giản đơn nhờ đó thiết lập những kế hoạch phù hợp với nhịp độ sinh học của bản thân. Ví dụ như:\n\nNếu bạn đợi đến phút cuối mới bắt đầu làm việc, thì việc đó sẽ chỉ mất một vài phút để hoàn thành. Đó chính là định luật Parkinson mà chúng ta đều từng trải qua. Chúng ta đều vật lộn trong suốt một tháng để thực hiện một dự án, và rồi thật kỳ diệu, chúng ta hoàn tất dự án đó chỉ trong tuần cuối cùng.\n\nĐịnh luật này cung cấp một đòn bẩy tuyệt vời để làm việc năng suất hơn: Áp dụng những deadlines ngắn hơn cho một công việc nào đó, hay sắp xếp một cuộc gặp mặt sớm hơn. Tìm khoảng thời gian mà bạn năng suất nhất để làm những việc đó thay vì dàn trải trong ngày dài.\n\nChìa khoá để đạt được kết quả tốt không phải là làm việc siêng năng hơn. Hầu hết chúng ta đã làm việc nhiều giờ ở công ty. Chúng ta đem công việc về nhà, luôn luôn sẵn sàng cho công việc, giải quyết tất cả mọi thứ mà chúng ta được giao. Chúng ta làm việc đó một cách tốt nhất trong khả năng của mình. Dường như cho dù chúng ta có làm việc rất nhiều giờ đi chăng nữa; hiệu suất của chúng ta dường như không cải thiện.\n\nTrong khi chúng ta luôn nghĩ rằng những người thành công là bởi vì họ tài năng hơn chúng ta. Tuy nhiên, càng nhìn xung quanh, tôi càng thấy không phải vậy. Một trong những lý do chúng ta nghĩ rằng họ thành công nhờ tài năng là bởi nó giúp chúng ta bỏ qua lý do thực sự. Chúng tôi không tài năng như những người siêu thành công này nên tất nhiên chúng tôi không được như họ. Giải thích như vậy là sai. Tài năng rất quan trọng, điều đó là tất nhiên, nhưng nó không quan trọng nhiều như bạn nghĩ.",
      "author": {
        "_id": "60819feb13f3e21db7724b2c",
        "name": "Tony Schwartz",
        "createdAt": "2021-04-22T16:10:19.310Z",
        "updatedAt": "2021-04-22T16:10:19.310Z",
        "__v": 0
      },
      "category": {
        "code": "KNS",
        "_id": "6081a33b13f3e21db7724b37",
        "name": "Sách kỹ năng sống",
        "createdAt": "2021-04-22T16:24:27.466Z",
        "updatedAt": "2021-04-22T16:24:27.466Z",
        "__v": 0
      },
      "provider": {
        "_id": "60819f3913f3e21db7724b2a",
        "name": "BIZBOOKS",
        "createdAt": "2021-04-22T16:07:21.692Z",
        "updatedAt": "2021-04-22T16:07:21.692Z",
        "__v": 0
      },
      "publisher": {
        "_id": "60819fab13f3e21db7724b2b",
        "name": "Nhà Xuất Bản Hồng Đức",
        "createdAt": "2021-04-22T16:09:15.277Z",
        "updatedAt": "2021-04-22T16:09:15.277Z",
        "__v": 0
      },
      "createdAt": "2021-04-22T16:26:04.275Z",
      "updatedAt": "2021-04-22T17:13:03.726Z",
      "__v": 0
    },
    {
      "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619109029/nkpmh215lksoqomjgnwd.jpg",
      "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619109031/st9cbmlrf2kewhrftwdx.jpg",
      "stocks": 8820,
      "_id": "6081a4a713f3e21db7724b39",
      "filename": "imageUrl-1619109027793.jpg",
      "title": "Payback Time - Ngày Đòi Nợ",
      "price": 299000,
      "description": "NGÀY ĐÒI NỢ – Payback Time là cuốn sách bán chạy nhất New York Time được tác giả Phil Town sử dụng những ngôn ngữ đơn giản, dễ hiểu và lồng ghép những ví dụ thực tế giúp cho người đọc tiếp cận với những kiến thức về đầu tư chứng khoán một cách dễ dàng. Bên cạnh đó với những kiến thức và trải nghiệm của bản thân, chúng tôi đã đưa cuốn sách gần gũi hơn với bạn đọc Việt Nam.\n\nCuốn sách sẽ hướng dẫn bạn từ cách thức lựa chọn, đánh giá cổ phiếu, cho đến xây dựng cho mình một danh mục các cổ phiếu sẽ mua, mức giá mua–bán nào là hợp lý, cùng với những nguyên tắc mà bạn phải tuân theo… và cứ thực hành như vậy cho tới khi bạn trở nên giàu có.\n\n“Một cuộc sống hạnh phúc được bắt đầu từ những quyết định đầu tư khôn ngoan”. Ngay ngày hôm nay, hãy bắt đầu quyết định đầu tư khôn ngoan của bạn bằng việc trang bị một hệ thống và phương pháp đầu tư hoàn chỉnh đã được chứng minh hiệu quả tuyệt đối qua thời gian được trình bày trong cuốn sách này. Bởi vì: Kiếm một số tiền lớn từ đầu tư chứng khoán chính là cách “trả thù” tốt nhất cho tương lai tài chính của bạn vốn đã bị cướp đi trước đây.",
      "author": {
        "_id": "6081a01e13f3e21db7724b2d",
        "name": "Phill Town",
        "createdAt": "2021-04-22T16:11:10.931Z",
        "updatedAt": "2021-04-22T16:11:10.931Z",
        "__v": 0
      },
      "category": {
        "code": "KT",
        "_id": "6081a0f013f3e21db7724b30",
        "name": "Sách kinh tế ",
        "createdAt": "2021-04-22T16:14:40.940Z",
        "updatedAt": "2021-04-22T16:14:40.940Z",
        "__v": 0
      },
      "provider": {
        "_id": "60819f3913f3e21db7724b2a",
        "name": "BIZBOOKS",
        "createdAt": "2021-04-22T16:07:21.692Z",
        "updatedAt": "2021-04-22T16:07:21.692Z",
        "__v": 0
      },
      "publisher": {
        "_id": "6081a512af21a8abbed83f24",
        "name": "Happy Live",
        "createdAt": "2021-04-22T16:09:15.277Z",
        "updatedAt": "2021-04-22T16:09:15.277Z",
        "__v": 0
      },
      "createdAt": "2021-04-22T16:30:31.468Z",
      "updatedAt": "2021-04-22T17:13:03.727Z",
      "__v": 0
    },
    {
      "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619449151/mfulfsji4qotpk7g7hlb.jpg",
      "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619449152/m6frwwdzp8i4opf6metz.jpg",
      "stocks": 5000,
      "_id": "6086d5419f89a21281d8fd90",
      "filename": "imageUrl-1619449148299.jpg",
      "title": "Tâm Lý Học Về Tiền",
      "price": 149000,
      "description": "Tiền bạc có ở khắp mọi nơi, nó ảnh hưởng đến tất cả chúng ta, và khiến phần lớn chúng ta bối rối. Mọi người nghĩ về nó theo những cách hơi khác nhau một chút. Nó mang lại những bài học có thể được áp dụng tới rất nhiều lĩnh vực trong cuộc sống, như rủi ro, sự tự tin, và hạnh phúc. Rất ít chủ đề cung cấp một lăng kính phóng to đầy quyền lực giúp giải thích vì sao mọi người lại hành xử theo cách họ làm hơn là về tiền bạc. Đó mới là một trong những chương trình hoành tráng nhất trên thế giới.\n\nChúng ta hiếm khi lâm vào hoàn cảnh nợ ngập đầu ư? Biết tiết kiệm để dành cho lúc khốn khó hơn ư? Chuẩn bị sẵn sàng cho việc nghỉ hưu? Có những cái nhìn thiết thực về mối quan hệ giữa tiền và hạnh phúc của chúng ta hơn phải không?\n\nChúng ta đều làm những điều điên rồ với tiền bạc, bởi vì chúng ta đều còn khá mới mẻ với trò chơi này và điều có vẻ điên rồ với bạn lại có khi hợp lý với tôi. Nhưng không ai là điên rồ cả – chúng ta đều đưa ra các quyết định dựa trên những trải nghiệm độc đáo riêng có mang vẻ hợp lý với mình ở bất cứ thời điểm nào.\n\nMục đích của cuốn sách này là sử dụng những câu chuyện ngắn để thuyết phục bạn rằng những kỹ năng mềm còn quan trọng hơn khía cạnh lý thuyết của đồng tiền. Thông qua một tập hợp những thử nghiệm và sai lầm của nhiều năm chúng ta đã học được cách trở thành những nông dân giỏi giang hơn, những thợ sửa ống nước nhiều kỹ năng hơn, và những nhà hóa học tiên tiến hơn. Nhưng liệu việc thử nghiệm và sai lầm có dạy chúng ta trở nên giỏi hơn trong cách quản lý tài chính cá nhân của chính mình không?",
      "author": {
        "_id": "6086d3829f89a21281d8fd8d",
        "name": "Morgan Housel",
        "createdAt": "2021-04-26T14:51:46.603Z",
        "updatedAt": "2021-04-26T14:51:46.603Z",
        "__v": 0
      },
      "category": {
        "code": "KT",
        "_id": "6081a0f013f3e21db7724b30",
        "name": "Sách kinh tế ",
        "createdAt": "2021-04-22T16:14:40.940Z",
        "updatedAt": "2021-04-22T16:14:40.940Z",
        "__v": 0
      },
      "provider": {
        "_id": "6086d3b49f89a21281d8fd8e",
        "name": "1980 Books",
        "createdAt": "2021-04-26T14:52:36.751Z",
        "updatedAt": "2021-04-26T14:52:36.751Z",
        "__v": 0
      },
      "publisher": {
        "_id": "6086d3de9f89a21281d8fd8f",
        "name": "Nhà Xuất Bản Dân Trí",
        "createdAt": "2021-04-26T14:53:18.101Z",
        "updatedAt": "2021-04-26T14:53:18.101Z",
        "__v": 0
      },
      "createdAt": "2021-04-26T14:59:13.095Z",
      "updatedAt": "2021-04-26T14:59:13.095Z",
      "__v": 0
    }
  ],
  isFirstOpen: false,
  isLoading: false,
};




export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
        isLoading: false,
      };
    case FIRST_OPEN: {
      return {
        ...state,
        isFirstOpen: true,
      };
    }
    default:
      return state;
  }
};

import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList,
  SafeAreaView,
  Button
} from 'react-native';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/product';
//Colors
import Colors from '../../utils/Colors';
//Animation
import Animated from 'react-native-reanimated';
//Components
import {Header} from './components/Header'

// Float Button
import { Portal, Provider } from 'react-native-paper';

//

import SkeletonLoading from '../../components/Loaders/SkeletonLoading'
import SnackBar from '../../components/Notification/SnackBar'
import { Carousel } from './components/Carousel'

import { CategorySection } from './components/Categories/CategorySection'


import { FloatButton } from './components/Contact'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)


<<<<<<< HEAD
const products =
  [
    {
      "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108762/ugvvlnf1gin7lq4yjiom.jpg",
      "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108763/mfnfxyleu9z6pk3gzj32.jpg",
      "stocks": 900,
      "_id": "6081a39c13f3e21db7724b31",
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
      "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108762/ugvvlnf1gin7lq4yjiom.jpg",
      "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108763/mfnfxyleu9z6pk3gzj32.jpg",
      "stocks": 900,
      "_id": "6081a39c13f3e21db7724b32",
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
      "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108762/ugvvlnf1gin7lq4yjiom.jpg",
      "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1619108763/mfnfxyleu9z6pk3gzj32.jpg",
      "stocks": 900,
      "_id": "6081a39c13f3e21db7724b33",
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
      "_id": "6081a4a713f3e21db7724b34",
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
    
  ]
=======
import banners from "../../db/Banners";
>>>>>>> d3e7e57925646b3936aa3e586e9870a3cae474de

import { fetchCategories } from '../../actions/category/categoryAction';


export const HomeScreen = ({ navigation }) => {
  let scrollY = new Animated.Value(0);

  const isLoading = useSelector(state => state.store.isLoading)
  const notification = useSelector((state) => state.auth.notification);
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.store.products);
  const dispatch = useDispatch();

  const categories = useSelector(state => state.category.categories)

  const mappedCategories = categories.map((cate) => cate.code)



  useEffect(() => {
    dispatch(fetchCategories())
  },[])

  useEffect(() => {
    // AsyncStorage.removeItem("isFirstTime");
    const fetching = async () => {
      try {
        dispatch(fetchProducts());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, [user.userid]);

  return (
    <Provider>
      {
        isLoading
          ? (<SkeletonLoading />)
          : (
            <SafeAreaView style={styles.container}>

              <Header      
                products={products}
                navigation={navigation}
              />

              <Portal>
                <FloatButton />
              </Portal>

              <AnimatedFlatList
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                  <View style={styles.banner}>
                    <Carousel banners={banners} />
                  </View>
                )}                  
                scrollEventThrottle={1}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: { contentOffset: { y: scrollY } },
                    },
                  ],
                  { useNativeDriver: true },
                )}
                data={categories}
                keyExtractor={(item) => item._id}             
                renderItem={({ item }) => (
                  <CategorySection
                    category={item}
                    name={item.name}
                    listProducts={products}
                    navigation={navigation}
                  />
                )}
              />
              {Object.keys(notification).length === 0 ? (
                <View />
              ) : (
                <SnackBar
                  checkVisible={true}
                  message={
                    Object.keys(user).length === 0
                      ? notification
                      : notification + ' ' + user.name
                  }
                />
              )}


            </SafeAreaView>
          )}
    </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  list: {
    width: '100%',
    marginTop: 50,
    paddingBottom: 20,
  },
  banner:{
    marginBottom:50
  }
});

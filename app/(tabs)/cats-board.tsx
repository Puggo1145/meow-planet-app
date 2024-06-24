import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { useState, useRef } from "react";
// components
import HomeHeader from "@/components/cats-board/home-header";
import TrendingCats from "@/components/cats-board/trending-cats";
import FollowedCats from "@/components/cats-board/followed-cats";

interface Page {
  title: string;
  component: React.FC;
}

const CatsBoard: React.FC = () => {
  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pages: Page[] = [
    { title: "当下", component: TrendingCats },
    { title: "关注", component: FollowedCats }
  ]

  // 获取当前页面的 index
  const getCurrentPageIndex = (event: any) => {
    const currentPage = event.nativeEvent.position;
    setCurrentPage(currentPage);
  };
  const goToPage = (page: number) => {
    pagerViewRef.current?.setPage(page);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <HomeHeader />
      <View className="flex-1">
        {/* 页面 tab */}
        <View className="h-[36px] flex-row items-center px-4">
          {pages.map((page, index) => (
            <TouchableOpacity
              key={page.title}
              activeOpacity={1}
              onPress={() => goToPage(index)}
            >
              <Text
                className={`
                text-2xl font-hregular mr-3
                ${currentPage === index ? "font-hblack text-primary" : "text-[#999]"}
                `}
              >
                {page.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <PagerView
          ref={pagerViewRef}
          className="h-full mt-3"
          pageMargin={16}
          onPageScroll={getCurrentPageIndex}
        >
          {pages.map(page => (
            <page.component key={page.title} />
          ))}
        </PagerView>
      </View>
    </SafeAreaView>
  );
};

export default CatsBoard;
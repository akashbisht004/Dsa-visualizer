import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; // 1. Import useLocation
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

// --- All your React.lazy imports remain the same ---
// const Hero = React.lazy(() => import("./components/hero/Hero"));
const BellmanFord = React.lazy(() => import("./algorithms/Bellman_Ford/BellmanFord"));
const BinarySearch = React.lazy(() => import("./algorithms/Binary_Search/BinarySearch"));
const BreadthFirstSearch = React.lazy(() => import("./algorithms/Breadth_First_Search/BreadthFirstSearch"));
const BubbleSort = React.lazy(() => import("./algorithms/BubbleSort/BubbleSort"));
const DepthFirstSearch = React.lazy(() => import("./algorithms/Depth_First_Search/DepthFirstSearch"));
const DijkstraAlgorithm = React.lazy(() => import("./algorithms/Dijkstra's_Algorithms/DijkstrasAlgorithm"));
const HeapSort = React.lazy(() => import("./algorithms/HeapSort/HeapSort"));
const HuffmanCoding = React.lazy(() => import("./algorithms/Huffman_Coding/HuffmanCoding"));
const InsertionSort = React.lazy(() => import("./algorithms/InsertionSort/InsertionSort"));
const KruskalAlgorithms = React.lazy(() => import("./algorithms/Kruskal_Algorithms/KruskalAlgorithms"));
const LinearSearch = React.lazy(() => import("./algorithms/linear_search/linearSearch"));
const MergeSort = React.lazy(() => import("./algorithms/MergeSort/MergeSort"));
const NQueenProblem = React.lazy(() => import("./algorithms/N-Queen_Problem/NQueenProblem"));
const PrimsAlgirithms = React.lazy(() => import("./algorithms/Prim's_Algorithms/PrimsAlgirithms"));
const QuickSort = React.lazy(() => import("./algorithms/QuickSort/QuickSort"));
const SelectionSort = React.lazy(() => import("./algorithms/SelectionSort/SelectionSort"));
const SubsetSum = React.lazy(() => import("./algorithms/Subset_Sum/SubsetSum"));
const AvlTree = React.lazy(()=> import("./algorithms/AVL_tree/AvlTree"));
const BinaryTree = React.lazy(()=>import("./algorithms/Binary_tree/binaryTree"))
const BinarySearchTree = React.lazy(()=>import("./algorithms/Binary_search_tree/binarySearchTree"))
const BalanceTree = React.lazy(()=> import("./algorithms/Balance_Tree/balanceTree"))


const Home = React.lazy(() => import("./components/home/Home")); // temp


function App() {
  
  // 2. Get the current location object
  const location = useLocation();

  // 3. Check if the current path is the home page ('/')
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Suspense fallback={<Loader />}>
      
      {/* 4. Conditionally render the Header component */}
      {!isHomePage && <Header />}

      <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/BellmanFord" element={<BellmanFord/>}/>
            <Route path="/BinarySearch" element={<BinarySearch/>}/>
            <Route path="/BreadthFirstSearch" element={<BreadthFirstSearch/>}/>
            <Route path="/BubbleSort" element={<BubbleSort/>}/>
            <Route path="/DepthFirstSearch" element={<DepthFirstSearch/>}/>
            <Route path="/DijkstraAlgorithm" element={<DijkstraAlgorithm/>}/>
            <Route path="/HeapSort" element={<HeapSort/>}/>
            <Route path="/HuffmanCoding" element={<HuffmanCoding/>}/>
            <Route path="/InsertionSort" element={<InsertionSort/>}/>
            <Route path="/KruskalAlgorithms" element={<KruskalAlgorithms/>}/>
            <Route path="/LinearSearch" element={<LinearSearch/>}/>
            <Route path="/MergeSort" element={<MergeSort/>}/>
            <Route path="/NQueenProblem" element={<NQueenProblem/>}/>
            <Route path="/PrimsAlgirithms" element={<PrimsAlgirithms/>}/>
            <Route path="/QuickSort" element={<QuickSort/>}/>
            <Route path="/SelectionSort" element={<SelectionSort/>}/>
            <Route path="/SubsetSum" element={<SubsetSum/>}/>
            <Route path='/avlTree' element={<AvlTree/>} />
            <Route path='/binaryTree' element={<BinaryTree/>} />
            <Route path='/balanceTree' element={<BalanceTree/>} />
            <Route path='/binarySearchTree' element={<BinarySearchTree/>}/>
          </Routes>
      </main>
      </Suspense>
    </>
  )
}

export default App;
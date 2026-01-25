#include <bits/stdc++.h>
using namespace std;

void selection_sort(int arr[], int n)
{
    for (int i = 0; i <= n - 2; i++)
    {
        int min = i;
        for (int j = i; j <= n - 1; j++)
        {
            if (arr[j] < arr[min])
            {
                min = j;
            }
        }

        swap(arr[i], arr[min]);
    }
}

void bubble_sort(int arr[], int n){
if (n==1) return;


    for (int j = 0; j <= n-2; j++)
    {
        if (arr[j] > arr[j+1])
        {
            swap(arr[j], arr[j+1]);
        }
        }

        bubble_sort(arr ,n-1);
}


void insertion_sort(int arr[],  int i, int n){
 if (i==n)return;
 
 
    int j =i;
  while (j>0 && arr[j-1]> arr[j])
  {
    swap(arr[j] , arr[j-1]);
    j--;
  }
   insertion_sort(arr, i+1,n);
    
}


void merge(vector<int>& arr, int low, int mid, int high) {
    vector<int> temp;
    int left = low;
    int right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left]);
            left++;
        } else {
            temp.push_back(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push_back(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push_back(arr[right]);
        right++;
    }

    for (int i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

void ms(vector<int>& arr, int low, int high) {
    if (low >= high) return;
    int mid = (low + high) / 2;
    ms(arr, low, mid);
    ms(arr, mid + 1, high);
    merge(arr, low, mid, high);
}


int pivotIndex(vector<int>&arr, int low , int high){
    int pivot = arr[low];
    int i = low ;
    int j = high;

    while (i<j)
    {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) swap(arr[i], arr[j]);
    }
    swap(arr[low], arr[j]);
    return j;
}
        


void qs(vector<int>&arr, int low , int high)
{
   if (low<high)
   {
    int partition = pivotIndex(arr , low , high);
    qs(arr , low , partition-1);
    qs(arr, partition+1, high );
   }
   
}





int main() {

//  int arr[] = {13, 46, 24, 52, 20, 9};
//     int n = sizeof(arr) / sizeof(arr[0]);
  
//     insertion_sort(arr,0, n);
//     for (int i = 0; i < n; i++) {
//         cout << arr[i] << " ";
//     }8




    vector<int> arr = {30,50,15,25,80,20,90,45};
    int n = arr.size();



    qs(arr, 0, n - 1);

    cout << "After Sorting Array: " << endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}
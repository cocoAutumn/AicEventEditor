import struct
import re
import sys # 本模块用于接收命令行参数，假设本程序文件名为 pose.py
def is_valid_bytes(b):
    pattern = b'^\w+$'
    return bool(re.match(pattern, b))
def search_hex_strings(file_path):
    with open(file_path, 'rb') as file:
        data = file.read()
    matches = []
    i = 1
    while i < len(data) - 8:
        if data[i-1:i+3] == b'\x02\x00\x00\x00':
            count = struct.unpack('B', data[i+3:i+4])[0]
            if is_valid_bytes(data[i+4:i+4+count]):
                matches.append(data[i+4:i+4+count].decode('utf-8'))
            i += 4 + count
        else:
            i += 1
    return matches
file_path = sys.argv[1] # 在终端输入 python pose.py xxx.pxls 运行
result = search_hex_strings(file_path)
print(file_path) # 打印 pxls 文件名，方便批处理
print(result) # 打印该文件含有的所有 pose 名称